"use client"

import Link from "next/link"
import Image from 'next/image'
import randomWinLogoImg from '/public/img/random-win-logo.png'


export default function PrivacyPolicy() {

    return (
        <div className="mx-auto max-w-7xl pt-24 sm:pt-16 px-6 lg:px-8 min-h-full">

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
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
                    Privacy policy
                </h2>
                <p className="text-md leading-8 text-gray-300">
                    At Random.win, we prioritize the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect the data you provide to us. By using our services, you agree to the practices described in this policy.
                </p>
            </div>

            <div className="mx-auto max-w-2xl mt-16 text-white">

                <p className="mb-4"><span className="font-bold">Data Collection:</span> We collect essential data, such as contact information and usage details, to improve our services and ensure smooth communication.</p>

                <p className="mb-4"><span className="font-bold">Data Usage:</span> Your information is used solely for providing our services, improving user experience, and addressing inquiries.</p>

                <p className="mb-4"><span className="font-bold">Third-Party Sharing:</span> We do not share your data with third parties without your consent, except when required by law.</p>

                <p className="mb-4"><span className="font-bold">Cookies and Tracking:</span> We may use cookies and tracking technologies to enhance our services. You can manage your preferences related to these technologies.</p>

                <p className="mb-4"><span className="font-bold">Security Measures:</span> We have implemented security measures to safeguard your data.</p>

                <p className="mb-4"><span className="font-bold">User Rights:</span> You have the right to access, correct, or delete your information.</p>

                <p className="mb-4"><span className="font-bold">Updates to Policy:</span> Any updates to our privacy policy will be posted on our website.</p>

                <p className="mb-4"><span className="font-bold">Contact Information:</span> For privacy-related questions or concerns, please contact us at lancelot@borr.tech​</p>

                <p className="mb-4">This policy outlines the core principles of how we handle your data. If you have any questions or need further information, don&apos;t hesitate to reach out to us.</p>

            </div>
            
        </div>
    )
}
