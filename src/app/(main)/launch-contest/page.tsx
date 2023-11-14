'use client'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React from "react";
import { loadStripe, StripeElementsOptions, PaymentIntent } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import CheckoutForm from "./CheckoutForm";
import LoginBtn from "./login-btn";
import { SessionProvider } from 'next-auth/react';

const websiteBasePaths = (process.env.NEXT_PUBLIC_APP_ENV === 'test') ? ['http://localhost:3000/ipfs?cid='] : ['http://verify.win/']
const stripePublicKey = (process.env.NEXT_PUBLIC_STRIPE_ENV === 'test') ? process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST : process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_PROD;

if (!stripePublicKey) {
    throw new Error("stripePublicKey is undefined")
}

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(stripePublicKey);


const steps = [
    { name: 'Choose source', href: '#step1' },
    { name: 'Contest details', href: '#step2' },
    { name: 'Schedule the random draw', href: '#step3' },
    { name: 'Purchase', href: '#step4' },
    { name: 'Share the link in your story', href: '#step5' },
]

type FormInputs = {
    step1?: {
        signedInAs?: string
        postUrl?: string
    },
    step2?: {
        name: string
        rules: string,
        participants: string
        nbWinners: number
    },
    step3?: {
        scheduledAt: string
    },
    step4?: {

    },
    step5?: {

    },
}

const drawNamePlaceholder = 'Win a Holiday to The Maldives';

const drawRulesPlaceholder =
`To take part in this contest the only thing you have to do is to follow my Instagram account @happy_lance and like this Instagram post: https://www.instagram.com/p/Ct7jt-motWO6svTyXoQbbpDfU3F-kv6XTXXqEY0/
Then, one person will be randomly selected among the participants to win a 2-week holiday for 2 people to The Maldives.`;

const drawParticipantsPlaceholder = `@jeys23
@happy_lance
@mappingfestival
@sarah.bounab
@fit_fondation_
@cassandra_11.80
@elnaz_elie
@flyingjuliette
@27.horses
@_h_lo_
@julianinha_10
@myflixbox
@basile_schl
@walidpanerai
@fiorellacaye
@marieguillou_
@aline.hnh
@kwn_yayou
@dianafpc6155
@jaey.music
@mitch_schnitzbauer
@m.l.k._av
@carolineruchat
@gesinemar
@cyril_ratl
@marta82_pa
@lara.koch
@tsuki_lyn
@droux_ch
@piccasso_ink
@shay.gnv
@el.aldair
@sak0ch_
@s.e.b.a.7.7
@stasia.ds
@merylsup
@natalia_olszewskaa
@lucielogean
@henriboulet
@nico_zimmv
@poses_attitude
@ceciletyty
@itscamq
@nanahy
@low.maf
@itwasntk
@katia.cmrng
@el_dominicano.gnv
@nourskd
@chill_mlk
@benj.online
@meylinn.pr
@ajlaave_you
@aude456331
@sara_kkar
@crochetonique
@emman_wild
@cokoch
@vitg1234
@ceciilia_0949
@alexia_ratl
@melodymcv
@marieclaudebruchez
@monicafornes
@marion_florquin
@mister.idris
@estellebubu3005
@giusepperealennelcuore
@aloisius_gonzaga_agung`;

const drawNbWinnersPlaceholder = '4';



export default function Page() {

    const searchParams = useSearchParams()
    const dt_min = new Date();
    const dt_default = new Date();
    const safetyCushionMin = (process.env.NEXT_PUBLIC_APP_ENV === 'test') ? -1000000 : 0;
    const safetyCushionDefault = (process.env.NEXT_PUBLIC_APP_ENV === 'test') ? 0 : (60 * 6);
    dt_min.setMinutes(dt_min.getMinutes() - dt_min.getTimezoneOffset() + safetyCushionMin);
    dt_default.setMinutes(dt_min.getMinutes() - dt_min.getTimezoneOffset() + safetyCushionDefault);
    const scheduledAtMinValue = dt_min.toISOString().slice(0, 16);
    const scheduledAtDefaultValue = dt_default.toISOString().slice(0, 16);

    const { register, trigger, getValues, formState: { errors, isValid } } = useForm<FormInputs>({
        defaultValues: {
            step1: {

            },
            step2: {
                name: drawNamePlaceholder,
                rules: drawRulesPlaceholder,
                participants: drawParticipantsPlaceholder,
                nbWinners: 1
            },
            step3: {
                scheduledAt: scheduledAtDefaultValue
            }
        }
    });

    const showErrorsOnBlur = true
    type StepNumber = 1 | 2 | 3 | 4 | 5
    const startAtStep = 1
    const paymentStep = 4
    const shareStep = 5

    const [currentStep, setCurrentStep] = useState<StepNumber>(startAtStep)
    const [selectedStep, setSelectedStep] = useState<StepNumber>(currentStep)
    const [clientSecret, setClientSecret] = useState<string>('');
    const [cid, setCid] = useState<string>('');
    const [deployError, setDeployError] = useState<string>('');
    const [deployInProgress, setDeployInProgress] = useState<boolean>(false);
    const [drawLinks, setDrawLinks] = useState<string[]>([]);
    const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | undefined>(undefined);

    const [accessToken, setAccessToken] = useState<string>('');
    const [loadingMedia, setLoadingMedia] = useState<boolean>(false);
    const [mediaUrls, setMediaUrls] = useState<string[]>([]);



    useEffect(() => {
        if (currentStep !== paymentStep) {
            return;
        }

        if (searchParams.has('code')) {
            nextStep(`step5`);
            return;
        }

        let ignore = false;

        fetch("/api/payment/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!ignore) {
                    setClientSecret(data.clientSecret)
                }
            });

        return () => {
            ignore = true;
        };

    }, [currentStep])

    useEffect(() => {
        if (currentStep !== shareStep || (paymentIntent === undefined && !searchParams.has('code'))) {
            return;
        }

        let ignore = false;

        const [drawTitle, drawRules, drawParticipants, drawNbWinners] = getValues(["step2.name", "step2.rules", "step2.participants", "step2.nbWinners"]);
        const drawScheduledAt = Math.ceil(getTimestampFromIso(getValues("step3.scheduledAt")) / 1000); // in seconds
        setDeployInProgress(true);

        let jsonBody = {};

        if (searchParams.has('code')) {
            jsonBody = {
                code: searchParams.get('code'),
                drawTitle,
                drawRules,
                drawParticipants,
                drawNbWinners,
                drawScheduledAt
            }
        } else if (paymentIntent) {
            jsonBody = {
                paymentIntentId: paymentIntent.id,
                drawTitle,
                drawRules,
                drawParticipants,
                drawNbWinners,
                drawScheduledAt
            }
        }

        fetch("/api/draw/deploy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonBody),
        })
            .then(res => res.json())
            .then(data => {
                if (!ignore) {

                    setDeployInProgress(false)

                    if (data.response.cid) {
                        setCid(data.response.cid);
                        setDrawLinks(websiteBasePaths.map(basePath => `${basePath}${data.response.cid}`))
                    }

                    if (data.error) {
                        setDeployError(data.error.message);
                    }

                }

            });

        return () => {
            ignore = true;
        };
    }, [currentStep, paymentIntent, getValues])


    useEffect(() => {

        if (!accessToken) {
            return;
        }

        let ignore = false;

        retrieveMedia();

        return () => {
            ignore = true;
        };

    }, [accessToken])


    function previousStep() {
        setSelectedStep(selectedStep - 1 as StepNumber)
    }

    async function nextStep(inputsToValidate: keyof FormInputs) {

        if (!isValid) {
            await trigger([inputsToValidate]);
            console.log(errors)
            return;
        }

        if (selectedStep + 1 > currentStep) {
            setCurrentStep(currentStep + 1 as StepNumber)
        }

        setSelectedStep(selectedStep + 1 as StepNumber)
    }

    function goToStep(stepNumber: StepNumber) {
        return () => {
            if (stepNumber > currentStep) {
                setCurrentStep(stepNumber)
            }

            setSelectedStep(stepNumber)
        }
    }

    async function retrieveMedia() {

        console.log(`Retrieving Instagram media with access token = ${accessToken}`);
        setLoadingMedia(true)

        let res: any = await fetch(`https://graph.facebook.com/v18.0/me/accounts?access_token=${accessToken}`);
        let body = await res.json();
        console.log(`body`, body);

        const appId = body.data[0].id
        console.log(`appId`, appId);
        setLoadingMedia(false)

    }


    const options: StripeElementsOptions = {
        clientSecret,
        fonts: [{ cssSrc: 'https://fonts.googleapis.com/css?family=Inter' }],
        appearance: {
            theme: 'night',
            variables: {
                fontFamily: 'Inter',
                colorPrimary: '#4f46e5', // = Tailwind indigo-600 color
                colorPrimaryText: '#ffffff',
            },
            disableAnimations: false,
            labels: 'above'
        },
        loader: 'always',
    };


    async function onPaymentSuccess(paymentIntent: PaymentIntent) {

        const [drawTitle, drawRules, drawParticipants, drawNbWinners, drawScheduledAt] = getValues(["step2.name", "step2.rules", "step2.participants", "step2.nbWinners", "step3.scheduledAt"]);

        if (!drawTitle || !drawRules || !drawParticipants || !drawNbWinners || !drawScheduledAt) {
            return;
        }

        setPaymentIntent(paymentIntent)
        goToStep(5)();
    }

    function validateScheduledAtFn() {
        return getTimestampFromIso(getValues("step3.scheduledAt")) >= getTimestampFromIso(scheduledAtMinValue)
    }

    // get timestamp in ms from partial iso string
    function getTimestampFromIso(iso: string) {
        const isoStr = `${iso}:00.000Z`;
        const date = new Date(isoStr);
        const timestampWithOffset = date.getTime();
        const offset = date.getTimezoneOffset() * 60 * 1000;
        const timestampWithoutOffset = timestampWithOffset + offset;
        return timestampWithoutOffset
    }

    function copyDrawLinkToClipboard(link: string) {
        navigator.clipboard.writeText(link).then(() => { }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    }

    function shortenUrl(url: string) {
        return url.replace('http://', '').replace('https://', '').replace('www.', '');
    }

    function manuallyEnter() {
        nextStep('step1')
    }

    return (
        <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8 min-h-full">
            <SessionProvider>

            {/* Background gradients */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div
                className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(20%)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>




            <h2 className="mt-0 text-4xl font-bold tracking-tight mb-16 text-white sm:text-5xl text-center">
                Launch a contest
            </h2>

            <nav aria-label="Progress">
                <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                    {steps.map((step, index) => (
                        <li key={step.name} className="md:flex-1">
                            {selectedStep > index + 1 ? (
                                // Completed step
                                <Link
                                    href={step.href}
                                    onClick={goToStep(index + 1 as StepNumber)}
                                    className={`group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4
                                    ${isValid && selectedStep !== shareStep ? '' : 'pointer-events-none'}`}
                                >
                                    <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">Step {index + 1}</span>
                                    <span className="text-sm font-medium text-gray-300">{step.name}</span>
                                </Link>
                            ) : selectedStep === index + 1 ? (
                                // Ongoing step
                                <Link
                                    href={step.href}
                                    className="pointer-events-none flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                    aria-current="step"
                                >
                                    <span className="text-sm font-medium text-indigo-600">Step {index + 1}</span>
                                    <span className="text-sm font-medium text-gray-300">{step.name}</span>
                                </Link>
                            ) : currentStep >= index + 1 ? (
                                // Upcoming available step
                                <Link
                                    href={step.href}
                                    onClick={goToStep(index + 1 as StepNumber)}
                                    className={`group flex flex-col border-l-4 border-indigo-300 py-2 pl-4 hover:border-indigo-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4
                                    ${isValid ? '' : 'pointer-events-none'}`}
                                >
                                    <span className="text-sm font-medium text-indigo-300 group-hover:text-indigo-600">Step {index + 1}</span>
                                    <span className="text-sm font-medium text-gray-300">{step.name}</span>
                                </Link>
                            ) : (
                                // Upcoming unavailable step
                                <Link
                                    href={step.href}
                                    className="pointer-events-none group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                >
                                    <span className="text-sm font-medium text-white group-hover:text-gray-700">Step {index + 1}</span>
                                    <span className="text-sm font-medium text-gray-300">{step.name}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Form */}
            <div className="mt-12">
                {
                    (selectedStep === 1) && (
                        <div className="mt-10">

                            <div className="flex flex-col text-center">
                                <div className="block text-lg font-normal leading-6 text-white mb-12">
                                    How do you want to retrieve the list of participants ?
                                </div>

                                <div className="flex justify-evenly items-start mb-12">
                                
                                    <LoginBtn setAccessToken={setAccessToken}></LoginBtn>

                                    <button
                                        onClick={manuallyEnter}
                                        type="button"
                                        className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Manually enter the list
                                    </button>

                                </div>

                            </div>


                            {/* Manually select the post among tiles */}
                            <div className={`${accessToken ? '' : 'hidden'}`}>
                                        {
                                            (loadingMedia) ? (
                                                <div className="text-white">
                                                    Loading your media...
                                                </div>
                                            ) : (
                                                <div>
                                                    {mediaUrls.map((mediaUrl) => (
                                                        <Image key={mediaUrl} src={mediaUrl} alt="Media" />
                                                    ))}
                                                </div>
                                            )
                                        }
                            </div>


                            {/* Manually type the post URL */}
                            {/* <div className={`sm:col-span-4 ${accessToken ? '' : 'hidden'}`}>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                    Paste the URL of your Instagram contest post
                                </label>
                                <div className="flex mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                        <input
                                            type="text"
                                            id="name"
                                            className={`bg-[#30313C] text-white block w-96 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                            ${errors.step1?.postUrl && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                            {...register("step1.postUrl", {
                                                onBlur: () => { trigger("step1.postUrl"); },
                                            })}
                                        />
                                    </div>

                                    


                                    
                                    <div>
                                        {
                                            (loadingContest) ? (
                                                <button
                                                    type="button"
                                                    className="ml-4 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg> 
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => retrieveContest()}
                                                    type="button"
                                                    className="ml-4 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                                                </button>
                                            )
                                        }
                                    </div>

                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-300">We will automatically retrieve the list of participants from your post</p>
                            </div> */}

                        </div>
                    )
                }


                {
                    (selectedStep === 2) && (
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">                            

                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                        <input
                                            type="text"
                                            id="name"
                                            className={`bg-[#30313C] text-white block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                            ${errors.step2?.name && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                            {...register("step2.name", {
                                                required: 'Name is required',
                                                onBlur: () => { trigger("step2.name"); },
                                            })}
                                        />
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-300">This will be the title of the page we will create for your contest.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="rules" className="block text-sm font-medium leading-6 text-white">
                                    Rules
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={10}
                                        id="rules"
                                        className={`bg-[#30313C] text-white block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                        ${errors.step2?.rules && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step2.rules", {
                                            required: 'Rules are required',
                                            onBlur: () => { trigger("step2.rules"); },
                                        })}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-300">Explain what people needed to do in order to participate in this contest.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="participants" className="block text-sm font-medium leading-6 text-white">
                                    List of participants
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={10}
                                        id="participants"
                                        className={`bg-[#30313C] text-white block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                        ${errors.step2?.participants && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step2.participants", {
                                            required: 'List of participants is required',
                                            onBlur: () => { trigger("step2.participants"); },
                                        })}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-300">
                                    Type one username per line.
                                </p>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="nbWinners" className="block text-sm font-medium leading-6 text-white">
                                    Number of winners
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        id="nbWinners"
                                        min="0"
                                        className={`bg-[#30313C] text-white block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                        ${errors.step2?.nbWinners && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step2.nbWinners", {
                                            required: 'Number of winners is required',
                                            onBlur: () => { trigger("step2.nbWinners"); },
                                        })}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-300">This is the number of participants that the algorithm will randomly select.</p>
                            </div>
                        </div>
                    )
                }

                {
                    (selectedStep === 3) && (
                        <div className="mt-10">

                            <div className="text-center">
                                <label htmlFor="scheduledAt" className="block text-sm font-normal leading-6 text-white">
                                Choose the date and time at which the random draw will happen.<br />
                                ({(Intl.DateTimeFormat().resolvedOptions().timeZone)} time zone detected)
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="datetime-local"
                                        id="scheduledAt"
                                        min={scheduledAtMinValue}
                                        className={`bg-[#30313C] text-white block m-auto rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                        ${errors.step3?.scheduledAt && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step3.scheduledAt", {
                                            required: 'Scheduled date and time is required',
                                            validate: validateScheduledAtFn,
                                            onBlur: () => { trigger("step3.scheduledAt"); },
                                        })}
                                    ></input>
                                </div>
                            </div>

                            <div className="rounded-md bg-blue-50 p-4 mt-8">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 flex-1 md:flex md:justify-between">
                                        <p className="text-sm text-blue-700">
                                            At the end of this form we will create a web page for your contest and give you the link to access it. Please note that you will have to share this link to the participants before the random draw happens.
                                            By doing so, the participants will have the guarantee that you did not know the result of the contest in advance. {/* which means that you will be <Link href="https://messari.io/report/credible-neutrality-as-a-guiding-principle" rel="noopener" target="_blank" className="underline">credibly neutral</Link>. */}
                                            That&apos;s why as a good practice we recommend you to choose a date and time which is at least 6 hours in the future from now.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }

                {/* Payment step, hidden by default but needs to always be in the DOM
                to prevent re-rendering when the user switch between steps */}
                <div className={`flex flex-wrap justify-center justify-items-center items-center mt-10 w-full ${selectedStep === paymentStep ? '' : 'hidden'}`}>

                    <p className="max-w-[600px] mt-0 px-8 sm:px-24 py-16 border-b lg:border-b-0 lg:border-r border-gray-200 text-md font-light tracking-wide text-white sm:text-md text-center">
                        Because it is 100% decentralized, Random.win is the only platform which prevents all kinds of fraud in social media contests.
                        <br /><br />
                        Therefore, by choosing us, you are contributing to make the world a better place and inspiring others to do the same.
                        <br /><br />
                        This is the last step before deploying your contest.<br />
                        The decentralized world awaits you. ✨
                    </p>

                    <div className="min-w-[300px] max-w-[800px] flex-auto px-8 sm:px-24 py-16">
                        

                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm onPaymentSuccess={onPaymentSuccess} />
                            </Elements>
                        )}
                    </div>

                </div>

                {
                    (selectedStep === 5) && (
                        <div className="mt-10">

                            <div className="rounded-md bg-green-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-green-800">Payment successful</p>
                                    </div>
                                </div>
                            </div>

                            
                            
                            {
                                (deployInProgress) && (

                                    <div className="rounded-md bg-yellow-50 p-4 mt-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="orange" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-yellow-800">
                                                    Deploying the contest on IPFS and Ethereum.
                                                </h3>
                                                <div className="mt-2 text-sm text-yellow-700">
                                                    <p>
                                                        This action generally takes about a minute, please wait without closing the page.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }


                            {
                                (cid && deployError) && (

                                    <div className="rounded-md bg-green-50 p-4 mt-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-green-800">Contest successfully uploaded to verify.win/{ cid }</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }


                            {
                                (deployError) && (
                                    
                                    <div className="rounded-md bg-red-50 p-4 mt-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-red-800">
                                                    { deployError }<br />
                                                    { (cid) ? 'Please send us the above IPFS link' : 'Please contact us' } using the chat at the bottom-right of this page so that we can investigate what went wrong.<br />
                                                    We apologize for the inconvenience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }

                                {
                                    (drawLinks.length > 0 && !deployError) && (
                                    <div className="text-center">
                                        <p className="mt-8 text-md text-white">
                                            Your contest has successfully been deployed to the blockchain. 🎉<br />
                                            You can now share the following link to the participants so that they can access the contest details and see the winners when they are announced.
                                        </p>


                                        {drawLinks.map((drawLink) => (
                                            <div key={drawLink} className="rounded-md bg-white/50 ring-2 ring-indigo-800 my-12 px-8 py-4 text-xl flex justify-center">
                                                <div className="text-ellipsis overflow-hidden mx-2">
                                                    { shortenUrl(drawLink) }
                                                </div>

                                                <Link href={drawLink} rel="noopener" target="_blank" className="mx-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                    </svg>
                                                </Link>

                                                <div onClick={() => { copyDrawLinkToClipboard(drawLink) }} className="cursor-pointer mx-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}

                                        <p className="mt-8 text-md text-white">
                                            If you need further assistance please ask on <Link href="https://discord.gg/3YjqW9MP7H" rel="noopener" target="_blank" className="underline">our Discord server</Link>, we will be happy to help you.<br />
                                            Thank you for using our service and helping to make the world more decentralized and transparent.
                                        </p>
                                    </div>
                                )
                            }

                        </div>
                    )
                }

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {
                        (selectedStep > 1 && selectedStep < steps.length && selectedStep !== paymentStep) && (
                            <button
                                onClick={previousStep}
                                className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                            >
                                Back
                            </button>
                        )
                    }
                    {
                        (selectedStep < steps.length && selectedStep !== paymentStep && selectedStep > 1) && (
                            <button
                                type="button"
                                onClick={async () => { await nextStep(`step${selectedStep}`) }}
                                className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                                ${isValid ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-300 pointer-events-none'}`}
                            >
                                Continue
                            </button>
                        )
                    }
                    {
                        (selectedStep === steps.length && drawLinks.length > 0) && (
                            <Link href="/">
                                <button
                                    type="button"
                                    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                                >
                                    Finish
                                </button>
                            </Link>
                        )
                    }
                </div>

            </div>


            </SessionProvider>
        </div>
    )
}