"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const mainnetContractAddress = process.env.MAINNET_CONTRACT_ADDRESS as string;

export default function FAQ() {

    const faqs = [
        // {
        //     question: "How is Random.win different?",
        //     answer:
        //         `There are many choices when it comes to choosing a randomness provider: Random.org, Lukky, Pickaw, RandomDraws.com, ...
        //         <br /><br />
        //         Every single one of them claims to be transparent and random. However, these claims are backed by nothing but thin air, and you have to take their word for it. Not only they cannot prove it to the contest organizer, but more importantly, they cannot prove it to the contest participants. Therefore, their added value is very limited.
        //         <br /><br />
        //         With Random.win, contest participants have the proof that the contest isn't rigged because they can verify the winner in a single click by simply asking our smart contract. Transparency by design. ✨
        //         <br /><br />
        //         This enables Random.win to be an order of magnitude better than any other randomness provider.
        //         `,
        // },
        {
            question: "I don't really care about blockchain and transparency, why should I use Random.win?",
            answer:
                `Blockchain enables transparency.
                <br /><br />
                Now even if transparency doesn't matter to you, it matters a lot for your contest participants, which are your clients. In business, the clients are kings. Pleasing them will improve their engagement with you and your own reputation as a reliable and trustworthy business.
                <br /><br />
                In the end the real question is, why would you organize an opaque contest when organizing a transparent contest is just as easy and benefits you much more?`
        },
        {
            question: "How is Random.win provably random?",
            answer:
                `Our smart contract uses <a href="https://chain.link/vrf" rel="noopener" target="_blank"><u>Chainlink VRF</u></a> which is the blockchain industry's most widely adopted random number generator.
                <br /><br />
                Chainlink VRF generates randomness that is both truly random AND verifiable. Truly random because the source of randomness comes from block hashes which are unpredictable ahead of time. Verifiable because a proof of randomness is generated and verified on-chain before the randomness is delivered to our smart contract.
                <br /><br />
                Here is <a href="https://www.youtube.com/watch?v=eRzLNfn4LGc" rel="noopener" target="_blank"><u>a video</u></a> explaining how Chainlink VRF works.`,
        },
        {
            question: "How can I verify the winner for my contest in a trustless manner?",
            answer:
            `Every contest created on our platform is stored on our domain verify.win with the format verify.win/[contest-identifier]
            <br /><br />
            Contest identifiers are unique text strings which can be used by the participants to query our smart contract on the blockchain.
            By <a href="https://polygonscan.com/address/${mainnetContractAddress}#readContract#F1" rel="noopener" target="_blank"><u>calling the function “checkContestWinners” on our smart contract</u></a> with the contest identifier as a parameter, they will get the winner for their contest in a completely trustless way. ✨`,
        },
        {
            question: "Where is your smart contract?",
            answer:
                `<a href="https://polygonscan.com/address/${mainnetContractAddress}#code" rel="noopener" target="_blank"><u>Here it is.</u></a>`,
        },
    ]

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32  sm:mt-56">
            <div className="mx-auto max-w-4xl divide-y divide-white/10">
                <h2 className="text-3xl sm:text-5xl font-bold leading-10 tracking-tight text-center text-white">
                    Frequently asked questions
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-white/10">
                    {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                            
                                            <span className="text-base font-semibold leading-7">
                                                {faq.question}
                                            </span>
                                            <span className="ml-6 flex h-7 items-center">
                                                {open ? (
                                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12 pt-4">
                                        <p className="text-base leading-7 text-gray-300" dangerouslySetInnerHTML={{__html: faq.answer}} />
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    )

}