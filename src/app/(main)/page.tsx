import Link from 'next/link'
import Image from 'next/image'
import FAQ from "./faq";
import goldMedalImg from '/public/img/medaille-or-lepine-500w.png'
import lepineRemisePrixImg from '/public/img/lepine-photo-officielle-cropped.jpeg'
import insightMediaLogoImg from '/public/img/insight-media-logo.png'
import morningLogoImg from '/public/img/morning-logo.png'
import fidealisLogoImg from '/public/img/fidealis-logo-300w.png'
import randomWinLogoImg from '/public/img/random-win-logo.png'
import heroDemoJpegImg from '/public/img/step1.jpeg'
import chainlinkVrfImg from '/public/img/chainlink-vrf.avif'
import step1Img from '/public/img/step1.jpeg'
import step2Img from '/public/img/step2.jpeg'
import step3Img from '/public/img/step3.gif'
import insightMediaImg from '/public/img/insight-media.png'
import kastelCoImg from '/public/img/kastel-co-logo-1872w.png'
import polygonLogoImg from '/public/img/polygon-logo.png'
import ethereumLogoImg from '/public/img/ef-logo.webp'
import fdjLogoImg from '/public/img/fdj-logo-2880w.png'
import kimLogoImg from '/public/img/kim-kardashian.jpg'
import fifaLogoImg from '/public/img/fifa-logo.png'
import mcdonaldsLogoImg from '/public/img/McDonalds-logo.png'
import bbcLogoImg from '/public/img/bbc-logo.webp'

import {
    ScaleIcon,
    ShieldCheckIcon,
    SparklesIcon,
    UserGroupIcon,
    CursorArrowRaysIcon,
    CubeTransparentIcon,
    BoltIcon,
    MagnifyingGlassCircleIcon,
    CurrencyDollarIcon,
    CheckBadgeIcon,
    GiftIcon,
} from '@heroicons/react/24/solid'
import { ArrowTopRightOnSquareIcon, GlobeAltIcon } from '@heroicons/react/24/outline';








const primaryFeatures = [
    {
      name: 'Fully transparent',
      description:
        'Your random draw runs entirely on our public Ethereum smart contract which provides contest participants with an easy way to verify the winners for their contest in a trustless manner.',
      href: '#',
      icon: CubeTransparentIcon,
    },
    {
      name: 'Provably random',
      description:
        'For each contest, a proof of randomness is generated on the blockchain by Chainlink VRF, the global leader in verifiable randomness.',
      href: '#',
      icon: ShieldCheckIcon,
    },
    {
        name: 'Legal value',
        description:
          'Ethereum smart contracts are recognized as a reliable source of truth in any legal system in the world.',
        href: '#',
        icon: ScaleIcon,
      },
]




const hallOfShame = [
    {
        name: 'Kim Kardashian sued for fake lottery scam on Instagram',
        image: kimLogoImg,
        website: 'TMZ',
        url: 'https://www.tmz.com/2022/09/15/kim-kardashian-scott-disick-sued-scam-lottery-lawsuit/'
    },
    {
        name: 'Michel Platini admits the World Cup 98 draw was rigged',
        image: fifaLogoImg,
        website: 'The Washington Post',
        url: 'https://www.washingtonpost.com/news/early-lead/wp/2018/05/18/former-uefa-boss-michel-platini-says-1998-world-cup-draw-was-fixed/'
    },
    {
        name: 'McDonald\'s fooled on its own lucky draw game for more than 10 years',
        image: mcdonaldsLogoImg,
        website: 'Daily Beast',
        url: 'https://www.thedailybeast.com/how-an-ex-cop-rigged-mcdonalds-monopoly-game-and-stole-millions'
    },
    {
        name: 'BBC fined by regulators for fake quizzes and contests',
        image: bbcLogoImg,
        website: 'Reuters',
        url: 'https://www.reuters.com/article/us-britain-bbc-idUSL065561320080730'
    }
]



  const secondaryFeatures = [
    {
        name: 'Increased engagement.',
        description:
            'Encourage more people to participate in your contest by proving to them that it is not a scam and that they actually have a real chance to win.',
        icon: UserGroupIcon,
    },
    {
        name: 'Top notch brand image.',
        description:
            'Being transparent with your followers is the best way you can boost your brand image and improve your reputation.',
        icon: SparklesIcon,
    },
    {
        name: 'Better user experience.',
        description:
            'Enable a more fun and interactive experience with your followers by letting them check the winner themselves without them having to trust you.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Say goodbye to disputes.',
        description:
            'Protect yourself from haters and lawsuits challenging the result of your contest by having a proof of randomness that you can show to anyone.',
        icon: ScaleIcon,
    },
    
    {
        name: 'Incredibly cheap.',
        description:
            'In Europe, certifying the randomness of a contest with a judicial officer cost at least 100€. We only charge 4€ per contest while offering a better protection.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'GDPR compliant.',
        description:
            'Even though our algorithm runs on the public Ethereum blockchain, your followers personal data stay private and never touch the blockchain.',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Big prizes allowed.',
        description:
            'Safely put any amount of money at stake by leveraging Ethereum robust security model that relies on cryptographic principles, making it resistant to tampering and fraud.',
        icon: GiftIcon,
    },
    {
        name: 'Verifiable.',
        description:
            'Our code is public and cannot be manipulated by anyone, not even by us, because our smart contract is tamper-proof. It means we could not rig your contest even if we wanted to.',
        icon: MagnifyingGlassCircleIcon,
    },
    
]

const videos = [
    {
        description: 'Our random numbers are generated by Chainlink VRF which is the blockchain industry\'s most widely adopted random number generator.',
        imageUrl: chainlinkVrfImg,
        videoUrl: 'https://chain.link/vrf',
        // videoUrl: 'https://bmm.com/bmm-testlabs-grants-the-first-compliance-certification-in-the-blockchain-industry-to-chainlink-vrf/',
    },
    {
        description: 'Random.win has won the Gold Medal at Concours Lépine, France\'s biggest innovation competition.',
        imageUrl: lepineRemisePrixImg,
        videoUrl: 'https://www.linkedin.com/posts/lancelotchardonnet_immense-fiert%C3%A9-davoir-remport%C3%A9-dimanche-activity-7061594682044096512-KOHt?utm_source=share&utm_medium=member_desktop',
    },
    // {
    //     description: 'Our smart contract and the random numbers it generates have been audited by Gaming Labs, which has the most experienced and robust RNG testing methodologies in the world.',
    //     imageUrl: gliRngImg,
    //     videoUrl: 'https://gaminglabs.com/services/igaming/random-number-generator-rng/',
    // },
    {
        description: 'Journalists from Insight Media made a video about us to promote the solution in Switzerland.',
        imageUrl: insightMediaImg,
        videoUrl: 'https://www.instagram.com/reel/CwS0Ip6IBp-/',
    }
]


  const stats = [
    { id: 1, name: 'Influencers', value: '20+' },
    { id: 2, name: 'Contests deployed', value: '500+' },
    { id: 3, name: 'Total participants', value: '200,000+' },
    // { id: 4, name: 'Uptime guarantee', value: '99.9%' },
  ]


export default function Example() {

    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>

            {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-10 lg:flex lg:px-8 lg:pt-8">
            <div className="mx-auto text-center lg:text-left max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

            <div className="flex lg:flex-1 items-center">
              <Image
                className="h-8 w-auto"
                src={randomWinLogoImg}
                alt="Random.win"
              />
              <div className="text-lg ml-3 font-semibold leading-6 text-white">
              Random.win
                </div>
            </div>
              
              
              {/* <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                    Latest updates
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                    <span>Just shipped v1.0</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </span>
                </a>
              </div> */}
              <h1 className="mt-16 lg:mt-32 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Finally, a random picker you can trust
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Organize contests where the random draw is <span className="underline font-semibold">transparent and provably random</span> thanks to blockchain technology.
              </p> 
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="/launch-contest"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Launch contest
                </Link>
                <Link href="#benefits" className="text-sm font-semibold leading-6 text-white">
                  See benefits <span aria-hidden="true">→</span>
                </Link>
              </div>
              
              <div className="text-gray-300 text-sm mt-10">
                <div className="py-1">
                    <Link rel="noopener" target="_blank" className="hover:underline" href="https://www.linkedin.com/posts/lancelotchardonnet_immense-fiert%C3%A9-davoir-remport%C3%A9-dimanche-activity-7061594682044096512-KOHt?utm_source=share&utm_medium=member_desktop">
                        🏆 Awarded Gold Medal at Concours Lépine 
                        {/* <ArrowTopRightOnSquareIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" /> */}
                    </Link>
                </div>
                <div className="py-1">⚖️ Recognized by all jurisdictions in the world</div>
                
                <div className="py-1">🇫🇷 Our team has advised the French National Lottery</div>
                {/* <div className="py-1">💸 Simple pricing, only 4€ per contest</div> */}
                {/* <div className="py-1">🔒 Patented blockchain algorithm</div> */}
              </div>
            </div>
            {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div> */}
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <Image src={heroDemoJpegImg} alt="Demo" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

            {/* Logo cloud */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-32">
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 logos">
                    
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={insightMediaLogoImg}
                        alt="Insight Media"
                    />

                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={morningLogoImg}
                        alt="Morning"
                    />

                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={fdjLogoImg}
                        alt="FDJ"
                    />

                    <Image
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={polygonLogoImg}
                        alt="Polygon"
                    />
                    
                    <Image
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src={kastelCoImg}
                        alt="KastelCo"
                    />
                </div>
                {/* <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                Transistor saves up to $40,000 per year, per employee by working with us.
              </span>
              <Link href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" /> Read our case study{' '}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div> */}
                {/* <h2 className="mt-16 text-center text-lg font-semibold leading-8 text-gray-900">
                    These companies have expressed their interest in our product
                </h2> */}
            </div>




            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Most contests are scams
                            </h1>
                            {/* <p className="mt-4 text-lg leading-8 text-gray-600">
                                Here are just a few cases where people didn&apos;t use Verifiable Draws and got in trouble.
                            </p> */}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            {hallOfShame.map((company, index) => (
                                <div key={company.name} className="flex flex-col items-center bg-[#a24238] p-8">
                                    <div>
                                        <Image
                                            src={company.image}
                                            alt=""
                                            className={`object-scale-down h-24 ${ index === 0 ? 'rounded-full w-24' : 'w-36'}`}
                                        />
                                    </div>

                                    <div className="text-xl font-semibold tracking-tight text-white mt-4">{company.name}</div>
                                    
                                    <Link href={company.url} target="_blank" className="flex items-center justify-center hover:underline text-xs font-semibold leading-6 text-white mt-2">
                                        {company.website}
                                        <ArrowTopRightOnSquareIcon className="h-4 w-4 inline ml-1" aria-hidden="true" />
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg> */}
                                    </Link>
                                </div>
                            ))}
                        </dl>
                        {/* <div className="text-center">
                            <p className="mt-16 text-lg leading-8 text-gray-600">
                                Stay safe, secure your draws with Verifiable Draws.
                            </p>
                        </div> */}
                        
                    </div>
                </div>
            </div>



            

            {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2> */}
            <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Enter Random.win:<br />
                Transparent by design
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                We encode transparency into our algorithm by relying only on smart contracts.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid mx-auto max-w-md grid-cols-1 gap-x-16 gap-y-16 lg:max-w-5xl lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-xl font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg ">
                      <feature.icon className="h-10 w-10 text-indigo-500" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    {/* <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div id="benefits" className="pt-32 sm:pt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2> */}
              <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Unlock a myriad of benefits
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Running your contests on smart contracts enables you to have an edge over your competitors by unlocking a wide range of benefits for your business.
              </p>
            </div>
          </div>
          {/* <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src={demoOrientExpressGifImg}
                alt="App screenshot"
                className="rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
              </div>
            </div>
          </div> */}

<div className="flex justify-evenly mt-16">

            <div className="">
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <Image src={step1Img} alt="Demo" />
                </foreignObject>
              </svg>
            </div>

            <div className="">
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <Image src={step2Img} alt="Demo" />
                </foreignObject>
              </svg>
            </div>

            <div className="">
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <Image src={step3Img} alt="Demo" />
                </foreignObject>
              </svg>
            </div>

            </div>


          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        

        


      

            


            {/* Concours Lépine */}
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                <div className="relative mx-auto max-w-2xl text-center">
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        An award-winning product 🏆
                    </p>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                    Don't worry, we've got you covered
                    </p> */}

                    <Image
                        className="gold-medal m-auto -z-10 absolute hidden lg:block"
                        sizes="210px"
                        src={goldMedalImg}
                        alt="Médaille d'or du Concours Lépine 2023"
                    />
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {videos.map((video) => (
                        <li key={video.description}>
                            <Link href={video.videoUrl} target="_blank" >
                                <div className="relative w-full">
                                    <Image
                                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                                        src={video.imageUrl}
                                        alt=""
                                        width="300"
                                        height="300"
                                    />

                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>

                                {/* <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{video.description}</h3> */}
                                <p className="text-base mt-6 leading-7 text-gray-300 ">{video.description}</p>
                                <ul role="list" className="mt-6 flex gap-x-6">
                                    {/* {
                                        (video.videoUrl.includes("yyoutube")) && (
                                            <li className="text-gray-300">
                                                
                                                <span className="sr-only">Youtube</span>
                                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                
                                            </li>
                                        )
                                    } */}

                                    {
                                        (video.videoUrl) && (
                                            <li className="text-gray-300">
                                                {/* <Link href={video.videoUrl} target="_blank" className="text-gray-400 hover:text-gray-500"> */}
                                                <span className="sr-only">External link</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

                                                {/* </Link> */}
                                            </li>
                                        )
                                    }
                                </ul>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>




{/* Stats */}
<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 text-center">
          <div className="relative mx-auto max-w-xl lg:max-w-3xl text-center">
            {/* <h2 className="text-base font-semibold leading-8 text-indigo-400">Our track record</h2> */}
            <p className="text-3xl font-bold tracking-tight text-white text-center sm:text-5xl">
              Trusted by influencers worldwide
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p> */}
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                <dt className="text-sm leading-6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>


        {/* FAQ */}
        <FAQ></FAQ>


            


{/* CTA section */}
<div className="relative isolate mt-16 sm:mt-32 px-6 py-32  sm:py-40 lg:px-8">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
          </svg>
          <div
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rely on proofs, not promises.
              {/* <br />
              Just give it to them. */}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            People don&apos;t trust promises that are backed by nothing but thin air.<br />Start using Random.win today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/launch-contest"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link href="https://discord.gg/3YjqW9MP7H" rel="noopener" target="_blank" className="text-sm font-semibold leading-6 text-white">
                Join our Discord <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>


    

        
        </div>
        


    )
}
