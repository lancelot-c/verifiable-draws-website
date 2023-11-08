"use client"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDownIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type FormInputs = {
    firstName: string,
    lastName: string,
    company: string,
    email: string,
    phone: string,
    message: string
}

const firstNamePlaceholder = ''
const lastNamePlaceholder = ''
const companyPlaceholder = ''
const emailPlaceholder = ''
const phonePlaceholder = ''
const messagePlaceholder = ''

export default function Example() {
    const [agreed, setAgreed] = useState(false)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sent, setSent] = useState<boolean>(false)

    const { register, trigger, getValues, formState: { errors, isValid } } = useForm<FormInputs>({
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        }
    });


    useEffect(() => {
        if (!submitted) {
            return;
        }

        let ignore = false;

        const [firstName, lastName, company, email, phone, message] = getValues(["firstName", "lastName", "company", "email", "phone", "message"]);


        try {

            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    company,
                    email,
                    phone,
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
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Terms of service
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                Lorem Ipsum
                </p>
            </div>
            
        </div>
    )
}
