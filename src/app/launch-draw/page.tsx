"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link'

import React from "react";
import * as stripeJs from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../components/CheckoutForm";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable is not set")
}

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = stripeJs.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


// import DrawService from 'src/services/DrawService';

// const step = ref(3);
// const loading = ref(false);

const drawNamePlaceholder = '2026 FIFA World Cup Draw';
// const drawTitle = ref(titlePlaceholder);

const drawRulesPlaceholder =
    `48 countries have been selected during the 2026 FIFA World Cup qualification phase.
Competing countries will now be divided into twelve groups of four teams (groups A to K).

This draw will output the list of countries randomly shuffled.
The first 4 countries of the list will form the group A, the next 4 will form group B, and so on, until group K.`;
// const drawRules = ref(rulesPlaceholder);

// const participantsRetrieval = ref('manual');
// let options = [
//     { label: 'Écrire manuellement la liste des participants', value: 'manual' },
//     { label: 'Récupérer la liste des participants sur un réseau social (Youtube, Instagram, Twitter, TikTok, LinkedIn)', value: 'socialMedia', disable: true },
//     { label: 'Importer la liste des participants depuis un fichier .csv ou .txt', value: 'file', disable: true }
// ];

const drawParticipantsPlaceholder = `Argentina
Brazil
England
France
Spain
Belgium
Portugal
Germany
Netherlands
Uruguay
Croatia
Denmark
Mexico
United States
Senegal
Wales
Poland
Australia
Japan
Morocco
Switzerland
Ghana
South Korea
Cameroon
Serbia
Canada
Costa Rica
Tunisia
Saudi Arabia
Iran
Ecuador
China
India
Indonesia
Pakistan
Nigeria
Bangladesh
Russia
Ethiopia
Philippines
Egypt
Vietnam
Democratic Republic of the Congo
Turkey
Thailand
Tanzania
South Africa
Italy`;

// const drawParticipants = ref(participantsPlaceholder);
const drawNbWinnersPlaceholder = '48';
// const drawNbWinners = ref(nbWinnersPlaceholder);

// const ipfsCid = ref('');
// const drawFilename = ref('');

// const myLocale = {
//     /* starting with Sunday */
//     days: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
//     daysShort: 'Dim_Lun_Mar_Mer_Jeu_Ven_Sam'.split('_'),
//     months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
//     monthsShort: 'Jan_Fev_Mars_Avr_Mai_Juin_Juil_Août_Sept_Oct_Nov_Dec'.split('_'),
//     firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
//     format24h: true,
//     pluralDay: 'jours'
// };

// const safetyMinutes = 0; // Should be 5
// const minimumScheduledAt = ref(date.addToDate(Date.now(), { minutes: safetyMinutes }));
// const drawScheduledAtDate = ref(date.formatDate(minimumScheduledAt.value, 'YYYY/MM/DD'));
// const drawScheduledAtTime = ref(date.formatDate(minimumScheduledAt.value, 'HH:mm'));

// function dateOptionsFn(d: string) {
//     minimumScheduledAt.value = date.addToDate(Date.now(), { minutes: safetyMinutes });
//     const minimumDate = date.formatDate(minimumScheduledAt.value, 'YYYY/MM/DD');

//     return d >= minimumDate;
// }

// function timeOptionsFn(hr: number, min: number | null) {

//     minimumScheduledAt.value = date.addToDate(Date.now(), { minutes: safetyMinutes });
//     const minimumDate = date.formatDate(minimumScheduledAt.value, 'YYYY/MM/DD');

//     if (drawScheduledAtDate.value > minimumDate) {
//         return true;
//     }

//     const minimumHr = Number(date.formatDate(minimumScheduledAt.value, 'HH'));
//     const minimumMin = Number(date.formatDate(minimumScheduledAt.value, 'mm'));

//     if (hr > minimumHr) {
//         return true;
//     }

//     if (hr < minimumHr) {
//         return false;
//     }

//     if (min === null) {
//         return true;
//     } else if (min >= 0 && min <= 59 && min >= minimumMin) {
//         return true;
//     }

//     return false;
// }

// function copyIPFSLinkToClipboard() {
//     navigator.clipboard.writeText(`https://${ipfsCid.value}.ipfs.dweb.link/${drawFilename.value}`).then(() => {
//         console.log('Async: Copying to clipboard was successful!');
//     }, (err) => {
//         console.error('Async: Could not copy text: ', err);
//     });
// }

// function downloadQrCode() {
//     let link = document.createElement('a');
//     link.href = 'http://localhost:9000/src/assets/qr-code.png';
//     link.download = 'qr-code.png';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// async function deployDraw() {

//     loading.value = true;
//     const year = Number(date.formatDate(drawScheduledAtDate.value, 'YYYY'));
//     const month = Number(date.formatDate(drawScheduledAtDate.value, 'MM'));
//     const day = Number(date.formatDate(drawScheduledAtDate.value, 'DD'));
//     const hour = Number(drawScheduledAtTime.value.split(':')[0]);
//     const minute = Number(drawScheduledAtTime.value.split(':')[1]);
//     const second = 0;
//     const drawScheduledAt = date.buildDate({ year, month, day, hour, minute, second });
//     const drawScheduledAtTimestamp = Number(date.formatDate(drawScheduledAt, 'X'));

//     const createdDraw = await DrawService.create(drawTitle.value, drawRules.value, drawParticipants.value, drawNbWinners.value, drawScheduledAtTimestamp);

//     ipfsCid.value = createdDraw.data.ipfsCidString;
//     drawFilename.value = createdDraw.data.drawFilename;
//     step.value = 4;
//     loading.value = false;
// }

// function reset() {
//     step.value = 1;
// }

const showErrorsOnBlur = true
type StepNumber = 1 | 2 | 3 | 4 | 5
const startAtStep = 1
const paymentStep = 4

const steps = [
    { name: 'Draw name and rules', href: '#rules' },
    { name: 'Participants', href: '#participants' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Purchase', href: '#purchase' },
    { name: 'Share', href: '#share' },
]

type FormInputs = {
    step1: {
        name: string
        rules: string
    },
    step2: {
        participants: string
        nbWinners: number
    },
    step3: {

    },
    step4: {

    },
    step5: {

    },
}

export default function Page() {

    const { register, trigger, formState: { errors, isValid } } = useForm<FormInputs>();
    const [currentStep, setCurrentStep] = useState<StepNumber>(startAtStep)
    const [selectedStep, setSelectedStep] = useState<StepNumber>(currentStep)
    const [clientSecret, setClientSecret] = useState('');

    function createPaymentIntent() {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "1 draw" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }

    function previousStep() {
        setSelectedStep(selectedStep - 1 as any)
    }

    async function nextStep(inputsToValidate: keyof FormInputs) {


        if (!isValid) {
            await trigger([inputsToValidate]);
            console.log(errors)
            return;
        }

        if (selectedStep + 1 > currentStep) {
            setCurrentStep(currentStep + 1 as any)

            if (currentStep + 1 === paymentStep) {
                createPaymentIntent();
            }
        }

        setSelectedStep(selectedStep + 1 as any)
    }

    function goToStep(stepNumber: number) {
        return () => {
            if (stepNumber <= currentStep) {
                setSelectedStep(stepNumber as any)
            }
        }
    }


    const options: stripeJs.StripeElementsOptions = {
        clientSecret,
        fonts: [{cssSrc: 'https://fonts.googleapis.com/css?family=Inter'}],
        appearance: {
            theme: 'stripe',
            variables: {
                fontFamily: 'Inter',
                colorPrimary: '#4f46e5', // = Tailwind indigo-600 color
            },
            disableAnimations: false,
            // rules: {
            //     '#submit': {
            //         border: '10px solid #E0E6EB',
            //         boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
            //       }
            // },
            labels: 'above'
        },
        loader: 'always',
    };

    return (
        <div className="mx-auto max-w-7xl px-6 sm:pt-32 lg:px-8 min-h-full">

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




            <p className="mt-0 text-4xl font-bold tracking-tight sm:mb-16 text-gray-900 sm:text-5xl text-center">
                Launch a verifiable draw
            </p>

            <nav aria-label="Progress">
                <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                    {steps.map((step, index) => (
                        <li key={step.name} className="md:flex-1">
                            {selectedStep > index + 1 ? (
                                // Completed step
                                <a
                                    href={step.href}
                                    onClick={goToStep(index + 1)}
                                    className={`group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4
                                    ${isValid ? '' : ''}`}
                                >
                                    <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">Step {index + 1}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            ) : selectedStep === index + 1 ? (
                                // Ongoing step
                                <a
                                    href={step.href}
                                    onClick={goToStep(index + 1)}
                                    className="pointer-events-none flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                    aria-current="step"
                                >
                                    <span className="text-sm font-medium text-indigo-600">Step {index + 1}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            ) : currentStep >= index + 1 ? (
                                // Upcoming available step
                                <a
                                    href={step.href}
                                    onClick={goToStep(index + 1)}
                                    className={`group flex flex-col border-l-4 border-indigo-300 py-2 pl-4 hover:border-indigo-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4
                                    ${isValid ? '' : 'pointer-events-none'}`}
                                >
                                    <span className="text-sm font-medium text-indigo-300 group-hover:text-indigo-600">Step {index + 1}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            ) : (
                                // Upcoming unavailable step
                                <a
                                    href={step.href}
                                    onClick={goToStep(index + 1)}
                                    className="pointer-events-none group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                >
                                    <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step {index + 1}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Form */}
            <div className="mt-12">
                {
                    (selectedStep === 1) && (
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <div className={`flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md
                                        ${errors.step1?.name && showErrorsOnBlur ? 'ring-red-600' : 'focus-within:ring-indigo-600'}`}>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder={drawNamePlaceholder}
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                            ${errors.step1?.name && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                            {...register("step1.name", { required: true })}
                                            onBlur={() => trigger("step1.name")}
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="col-span-full">
                                <label htmlFor="rules" className="block text-sm font-medium leading-6 text-gray-900">
                                    Rules
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={6}
                                        id="rules"
                                        placeholder={drawRulesPlaceholder}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                        ${errors.step1?.rules && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step1.rules", { required: true })}
                                        onBlur={() => trigger("step1.rules")}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Rules should be written in natural language</p>
                            </div>

                        </div>
                    )
                }


                {
                    (selectedStep === 2) && (
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="col-span-full">
                                <label htmlFor="participants" className="block text-sm font-medium leading-6 text-gray-900">
                                    List of participants
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={10}
                                        id="participants"
                                        placeholder={drawParticipantsPlaceholder}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                        ${errors.step2?.participants && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step2.participants", { required: true })}
                                        onBlur={() => trigger("step2.participants")}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Each line should contain only one participant</p>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="nbWinners" className="block text-sm font-medium leading-6 text-gray-900">
                                    Number of participants to draw
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        id="nbWinners"
                                        min="0"
                                        placeholder={drawNbWinnersPlaceholder}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                        ${errors.step2?.nbWinners && showErrorsOnBlur ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                        {...register("step2.nbWinners", { required: true })}
                                        onBlur={() => trigger("step2.nbWinners")}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    (selectedStep === 3) && (
                        <div className="mt-10">

                            <div className="text-center">
                                <label htmlFor="scheduledFor" className="block text-sm font-medium leading-6 text-gray-900">
                                    When should the draw be triggered ?
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="datetime-local"
                                        id="scheduledFor"
                                        name="scheduledFor"
                                        defaultValue="2018-06-12T19:30"
                                        min="2018-06-07T00:00"
                                    ></input>
                                </div>
                            </div>

                        </div>
                    )
                }

                {/* Payment step, hidden by default but needs to always be in the DOM
                to prevent re-rendering when the user switch between steps */}
                <div className={`mt-10 m-auto w-1/2 ${selectedStep === paymentStep ? '' : 'hidden'}`}>

                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    )}

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {
                        (selectedStep > 1 && selectedStep < steps.length && selectedStep !== paymentStep) && (
                            <button
                                onClick={previousStep}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Back
                            </button>
                        )
                    }
                    {
                        (selectedStep < steps.length && selectedStep !== paymentStep) && (
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
                        (selectedStep === steps.length) && (
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

            {/* <q-stepper v-model="step" ref="stepper" color="primary" header-nav animated flat> */}


            {/* <q-step :name="1" title="Nom du tirage et règles" icon="settings" :done="step > 1" :header-nav="step > 1 && step != 4 && !loading">
                    <q-input outlined v-model="drawTitle" class="q-my-lg" :input-style="{ fontSize: '1.3em', lineHeight: '26px' }" label="Nom du tirage" :placeholder="titlePlaceholder"
                            :rules="[val => !!val || 'Ce champ est requis']" />

                        <q-input v-model="drawRules" outlined class="q-my-lg" :input-style="{ fontSize: '1.3em', lineHeight: '26px', height: '230px' }" type="textarea" label="Règles"
                            :placeholder="rulesPlaceholder" :rules="[val => !!val || 'Ce champ est requis']" />

                        <q-stepper-navigation>
                            <div class="stepper-navigation-inner-content">
                                <q-btn @click="() => { step = 2; }" color="primary" label="Continuer" />
                            </div>
                        </q-stepper-navigation>
                </q-step> */}


            {/* <q-step :name="2" title="Participants" icon="group" :done="step > 2" :header-nav="step > 2 && step != 4 && !loading">
                    <div class="step-inner-content">
                        <div class="step-inner-content__text">
                            Comment voulez-vous récupérer la liste des participants ?
                        
                            <div class="q-gutter-sm q-my-lg">
                                <q-option-group :options="options" type="radio" v-model="participantsRetrieval" />
                            </div>
                        </div>

                        <q-input v-model="drawParticipants" outlined class="q-my-lg" :input-style="{ fontSize: '1.3em', lineHeight: '26px' }" type="textarea" label="Liste des participants"
                            :placeholder="participantsPlaceholder" :rules="[val => !!val || 'Ce champ est requis']" />

                        <q-input v-model="drawNbWinners" type="number" outlined class="q-my-lg" :input-style="{ fontSize: '1.3em', lineHeight: '26px' }" 
                            label="Nombre de gagnants" :placeholder="nbWinnersPlaceholder" style="max-width: 300px" />

                        <q-stepper-navigation>
                            <div class="stepper-navigation-inner-content">
                                <q-btn flat @click="step = 1" color="primary" label="Précédent" class="q-ml-sm" />
                                <q-btn @click="() => { step = 3; }" color="primary" label="Continuer" />
                            </div>
                        </q-stepper-navigation>
                    </div>
                </q-step> */}


            {/* <q-step :name="3" title="Date et heure de déclenchement" icon="event" :done="step > 3" :header-nav="step > 3 && step != 4 && !loading">
                    <div class="step-inner-content">
                        <div class="step-inner-content__text">
                            <p class="text-center q-my-lg">
                                Le tirage doit être programmé au moins 5 minutes dans le futur.
                                Nous imposons cette contrainte afin de vous laisser le temps de partager le lien du tirage aux participants avant que le tirage ne se déclenche.
                            </p>
                        </div>

                        <div class="row justify-evenly">
                            <q-date v-model="drawScheduledAtDate" :options="dateOptionsFn" now-btn class="q-my-lg" :locale="myLocale" />
                            <q-time v-model="drawScheduledAtTime" :options="timeOptionsFn" format24h class="q-my-lg" />
                        </div>

                        <q-stepper-navigation>
                            <div class="stepper-navigation-inner-content">
                                <q-btn flat @click="step = 2" color="primary" label="Précédent" class="q-ml-sm" :disable="loading" />
                                <q-btn @click="deployDraw" color="primary" label="Publier" :loading="loading" :disable="loading" />
                            </div>
                        </q-stepper-navigation>
                    </div>
                </q-step> */}


            {/* <q-step :name="4" title="Partager le tirage" icon="sms" :done="step > 4" :header-nav="false">
                    <div class="step-inner-content">
                        <div class="step-inner-content__text">
                            <p class="text-center q-my-lg">
                                Votre tirage a été déployé avec succès sur IPFS et Ethereum 🎉<br />
                                Il ne vous reste plus qu'à partager le lien suivant aux participants :
                            </p>
                        
                            <div class="ipfs-card row justify-center items-center">
                                <p class="ipfs-card__cid q-mb-none q-mr-lg">https://{{ ipfsCid }}.ipfs.dweb.link/{{ drawFilename }}</p>
                                <!-- <q-icon name="content_copy" /> -->
                                <q-btn round unelevated icon="content_copy" @click="copyIPFSLinkToClipboard()" />
                                <q-btn round unelevated icon="open_in_new" :href="'https://' + ipfsCid + '.ipfs.dweb.link/' + drawFilename" target="_blank" />
                            </div>
                            <p class="text-center q-my-lg">
                                Pour que le tirage soit valide vous DEVEZ partager ce lien avant le <span class="text-underline">{{ drawScheduledAtDate }} à {{ drawScheduledAtTime }}</span>.
                            </p>
                            <p class="text-center q-my-lg">
                                Autrement vous pouvez partager ce QR code qui est le strict équivalent du lien ci-dessus:
                            </p>
                            <div class="row justify-center items-center">
                                <q-img
                                    src="./../assets/qr-code.png"
                                    style="width: 300px"
                                    />
                                <q-btn round unelevated icon="download" @click="downloadQrCode()" class="q-ml-lg" />
                            </div>
                        </div>
                        
                        <q-stepper-navigation>
                            <div class="stepper-navigation-inner-content">
                                <q-btn color="primary" @click="reset" label="Créer un nouveau tirage" />
                            </div>
                        </q-stepper-navigation>
                    </div>
                </q-step> */}


            {/* </q-stepper> */}





        </div>
    )
}