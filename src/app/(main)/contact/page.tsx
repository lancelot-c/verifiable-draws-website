"use client"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import Link from "next/link"
import Image from 'next/image'
import randomWinLogoImg from '/public/img/random-win-logo.png'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type FormInputs = {
    firstName: string,
    lastName: string,
    company: string,
    email: string,
    message: string
}

export default function Example() {
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sent, setSent] = useState<boolean>(false)

    const { register, trigger, getValues, formState: { errors, isValid } } = useForm<FormInputs>({
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            message: ''
        }
    });


    useEffect(() => {
        if (!submitted) {
            return;
        }

        let ignore = false;

        const [firstName, lastName, company, email, message] = getValues(["firstName", "lastName", "company", "email", "message"]);


        try {

            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    company,
                    email,
                    message
                }),
            })
                .then(res => res.json())
                .then(data => {
                    if (!ignore) {

                        if (data.errorMessage) {
                            setErrorMessage(data.errorMessage);
                        } else {
                            setSent(true)
                        }
                        
                    }

                });

        } catch (error: any) {
            console.error(error);
            setErrorMessage('An error occured while sending your message. Please try again later.');
        }

        return () => {
            ignore = true;
        };
    }, [submitted, getValues]);


    return (
        <div className="mx-auto max-w-7xl pt-24 sm:pt-16 px-6 lg:px-8 min-h-full mb-16">
            

            {/* Logo */}
            <Link href="/" className="flex lg:flex-1 items-center">
                    <Image
                        className="h-8 w-auto"
                        src={randomWinLogoImg}
                        alt="Random.win"
                    />
                    <div className="text-lg ml-3 font-semibold leading-6 text-white">
                        Random.win
                    </div>
            </Link>

            
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl  mb-8">
                    Contact us
                </h2>
                <p className="text-lg leading-8 text-gray-300">
                    Tell us more about your needs. We usually reply back within 48h.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="first-name"
                                autoComplete="given-name"
                                className={`bg-[#30313C] text-white block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                ${errors.firstName ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                {...register("firstName", {
                                    required: 'First name is required',
                                    onBlur: () => { trigger("firstName"); },
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="last-name"
                                autoComplete="family-name"
                                className={`bg-[#30313C] text-white block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                ${errors.lastName ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                {...register("lastName", {
                                    required: 'Last name is required',
                                    onBlur: () => { trigger("lastName"); },
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                className={`bg-[#30313C] text-white block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                ${errors.email ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                {...register("email", {
                                    required: 'Email is required',
                                    onBlur: () => { trigger("email"); },
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="company"
                                autoComplete="organization"
                                className="bg-[#30313C] text-white block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("company", {
                                    onBlur: () => { trigger("company"); },
                                })}
                            />
                        </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                rows={8}
                                className={`bg-[#30313C] text-white block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                                ${errors.message ? 'ring-red-600' : 'focus:ring-indigo-600'}`}
                                {...register("message", {
                                    required: 'Message is required',
                                    onBlur: () => { trigger("message"); },
                                })}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="mt-10">
                    <button
                        onClick={() => { setSubmitted(true) }}
                        className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                        ${(isValid && !submitted) ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-300 pointer-events-none'}`}
                    >
                        Send
                    </button>
                </div>

                {
                    (sent) && (
                        
                        <div className="rounded-md bg-green-50 p-4 mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-800">Thank you for your message.</p>
                                </div>
                            </div>
                        </div>

                    )
                }


                {
                    (errorMessage) && (
                        
                        <div className="rounded-md bg-red-50 p-4 mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-red-800">{ errorMessage }</p>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    )
}
