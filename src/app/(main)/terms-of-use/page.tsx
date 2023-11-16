"use client"

import Link from "next/link"
import Image from 'next/image'
import randomWinLogoImg from '/public/img/random-win-logo.png'


export default function TermsOfUse() {

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
                    Terms of use
                </h2>
                <p className="text-md leading-8 text-gray-300">
                Welcome to Random.win ! These terms and conditions outline the rules and regulations for the use of the Random.win website, located at https://www.random.win/.

​
<br /><br />
By accessing this website, we assume you accept these terms and conditions. Please do not continue to use Random.win if you do not agree to abide by all the terms and conditions stated on this page.
                </p>
            </div>

            <div className="mx-auto max-w-2xl mt-16 text-white">

                <p className="mb-8">
                    <div className="font-bold">Cookies</div>
                    We employ the use of cookies. By accessing Random.win, you agree to use cookies in accordance with our Privacy Policy.
                </p>

                <p className="mb-8">
                    <div className="font-bold">License</div>
                    Unless otherwise stated, Random.win and/or its licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved. You may access this content for your personal use, subject to the restrictions set in these terms and conditions.
                    <br />
You must not:<br />
<ul className="list-disc list-inside pl-4">
    <li>Republish material from Random.win</li>

<li>Sell, rent, or sublicense material from Random.win</li>

<li>Reproduce, duplicate, or copy material from Random.win</li>

<li>Redistribute content from Random.win</li></ul>
                </p>

                <p className="mb-8">
                    <div className="font-bold">This Agreement</div>
                    This Agreement begins on the date you access our website.
                </p>

                <p className="mb-8">
                    <div className="font-bold">User Comments</div>
                    Certain sections of our website may allow users to post and exchange opinions and information. Random.win does not pre-screen, edit, publish, or review Comments before they appear on the website. Comments reflect the views of their authors, not Random.win. We are not liable for Comments or any resulting liability, damages, or expenses.
<br />
We reserve the right to monitor and remove inappropriate or offensive Comments that breach these Terms and Conditions.
                </p>

                <p className="mb-8">
                    <div className="font-bold">You Warrant and Represent</div>
                    By posting Comments on our website, you represent that:
                    <ul className="list-disc list-inside pl-4">
                    <li>You have the right to post the Comments and all necessary licenses and consents.</li>

                    <li>Your Comments do not infringe on any third-party intellectual property rights.</li>

                    <li>Your Comments do not contain defamatory, libelous, offensive, indecent, or unlawful material.</li>

                    <li>Your Comments are not for soliciting or promoting business, commercial activities, or unlawful activities.</li>
</ul>
You grant Random.win a non-exclusive license to use, reproduce, and edit your Comments in any form or media.
                </p>

                <p className="mb-8">
                    <div className="font-bold">Hyperlinking to our content</div>
                    The following organizations may link to our Website without prior written approval:
                    <ul className="list-disc list-inside pl-4">

                        
                    <li>Government agencies</li>

                    <li>Search engines</li>

                    <li>News organizations</li>

                    <li>Online directory distributors</li>

</ul>

These organizations may link to our home page, publications, or other website content as long as it is not deceptive, implies sponsorship, endorsement, or approval, and fits the context of their site.
<br />
We may consider and approve other link requests from various organizations, subject to certain criteria.
                </p>

                <p className="mb-8">
                    <div className="font-bold">iFrames</div>
                    You may not create frames around our webpages without prior written permission.
                </p>

                <p className="mb-8">
                    <div className="font-bold">Content Liability</div>
                    We are not responsible for any content that appears on your website. You agree to protect and defend us against all claims arising on your Website.
                </p>

                <p className="mb-8">
                    <div className="font-bold">Your privacy</div>
                    Please read our Privacy Policy.
                </p>

                <p className="mb-8">
                    <div className="font-bold">Reservation of Rights</div>
                    We reserve the right to request the removal of any links to our Website and to amend these terms and conditions and our linking policy at any time. By continuously linking to our Website, you agree to follow these linking terms and conditions.
                </p>

                <p className="mb-8">
                    <div className="font-bold">Removal of Links</div>
                    If you find any link on our Website offensive for any reason, please contact us, but we are not obligated to remove or respond to you directly.
                    <br />
We do not guarantee the accuracy, completeness, or availability of information on this website.
                </p>

                <p className="mb-8">
                    <div className="font-bold">Disclaimer</div>
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and its use. Nothing in this disclaimer will limit or exclude our or your liability for certain matters.
<br />
Thank you for using Random.win. Please let us know if you have any questions or concerns about these terms.
                </p>
            </div>
            
        </div>
    )
}
