import Link from 'next/link'
import Image from 'next/image'
import goldMedalImg from '/public/img/medaille-or-lepine-500w.png'
import mainHeroImg from '/public/img/world-hero.webp'
import lepineStandImg from '/public/img/lepine-stand.jpeg'
import lepineRemisePrixImg from '/public/img/lepine-photo-officielle-cropped.jpeg'
import insightMediaImg from '/public/img/insight-media.png'
import giveawayImg from '/public/img/giveaway.webp'
import lotteryImg from '/public/img/lottery-ticket.jpeg'
import olympicGamesImg from '/public/img/fifa-draw.jpeg'
import featuresBadImg from '/public/img/features-bad.png'
import featuresCoolImg from '/public/img/features-cool.png'
import casinoMachineImg from '/public/img/text-to-win.webp'
import fdjLogoImg from '/public/img/fdj-logo-300w.png'
import insightMediaLogoImg from '/public/img/insight-media-logo.png'
import morningLogoImg from '/public/img/morning-logo.png'
import ipfsLogoImg from '/public/img/ipfs-logo-without-text.svg'
import tf1LogoImg from '/public/img/tf1-logo-300w.png'
import ethereumLogoImg from '/public/img/ethereum-logo-100w.png'
import chainlinkLogoImg from '/public/img/chainlink-logo-100w.png'
import fidealisLogoImg from '/public/img/fidealis-logo-300w.png'
import kastelCoLogoImg from '/public/img/kastel-co-logo-300w.png'
import kimLogoImg from '/public/img/kim-kardashian.jpg'
import fifaLogoImg from '/public/img/fifa-logo.png'
import mcdonaldsLogoImg from '/public/img/McDonalds-logo.png'
import bbcLogoImg from '/public/img/bbc-logo.webp'
import randomWinLogoImg from '/public/img/random-win-logo.png'
import heroDemoJpegImg from '/public/img/demo.jpeg'
import demoOrientExpressGifImg from '/public/img/demo-orient-express-with-captions.gif'
import bmmTestlabsImg from '/public/img/bmm-testlabs.jpg'
import gliRngImg from '/public/img/GLI-RNG.jpg'

import {
    ScaleIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    ShieldExclamationIcon,
    SparklesIcon,
    UserGroupIcon,
    CursorArrowRaysIcon,
    CubeTransparentIcon,
    CheckBadgeIcon,
    BoltIcon,
    MagnifyingGlassCircleIcon
} from '@heroicons/react/24/solid'


const features = [
    {
        name: 'Provably fair and random',
        description:
            'Rely on an algorithm secured by cryptographic proofs which cannot be manipulated by anyone, not even by us.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Top notch brand image',
        description:
            'Boost your brand image by using a transparent algorithm and showing your users that transparency matters to you.',
        icon: SparklesIcon,
    },
    {
        name: 'Say goodbye to disputes',
        description:
            'Prevent anyone from challenging your draw results by displaying easy-to-verify proofs which certify that your draws are performed in a fair and random way.',
        icon: ScaleIcon,
    },
    {
        name: 'Better user experience',
        description:
            'Empower your participants by letting them follow the draw in real time through a customized web page.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Increased engagement',
        description:
            'Grow your user base by ensuring trustworthy and fair outcomes that are verifiable.',
        icon: UserGroupIcon,
    },
    {
        name: 'Cutting-edge technologies',
        description:
            'Stay at the forefront of innovation by using the most advanced random draw algorithm currently on the market.',
        icon: RocketLaunchIcon,
    },
]

const featuresBad = [
    {
        name: 'No proof.',
        description:
            'The participants don\'t have a proof certifying that the draw was performed in a fair and random way, they have to take the organizer\'s word for it.',
        icon: ShieldExclamationIcon,
    },
    {
        name: 'Fake security.',
        description:
            'Most random draw websites are not open-source, and even when they are, it does not guarantee that the open-sourced code is the actual code that is running on the website. Therefore these websites are unverifiable and can\'t be trusted.',
        icon: ShieldExclamationIcon,
    },
    {
        name: 'Easy to manipulate.',
        description:
            'Most solutions don\'t tell how they generate randomness or they rely on centralized services like random.org. It is extremely easy for these services to send you a malicious random number and you won\'t be able to detect it.',
        icon: ShieldExclamationIcon,
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

const featuresCool = [
    {
        name: 'Provably fair results.',
        description:
            'The participants have an actual proof which certifies that the draw was performed in a fair and random way. They can check the results themselves using our provided link without communicating with the draw organizer.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Tamper-proof website.',
        description:
            'All draws are stored on our website verify.win using IPFS, the leading decentralized storage solution, which means that not only the code is open-source, but it\'s also verifiable and impossible for anyone to change it, even for us.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'On-chain verifiable randomness.',
        description:
            'The randomness is generated in our smart contract using Chainlink VRF which provides cryptographically secure randomness for your draw.',
        icon: ShieldCheckIcon,
    },
]


const useCases = [
    {
        id: 1,
        title: 'Social media giveaways',
        href: '#',
        description:
            'Increase the engagement on your giveaways by displaying a full transparency of the winner selection process.',
        imageUrl: giveawayImg
    },
    {
        id: 2,
        title: 'TV contests',
        href: '#',
        description:
            'Stand out from your competitors and regain the public interest in your TV Shows by letting your viewers know that your contests are transparent and secure thanks to blockchain technology.',
        imageUrl: casinoMachineImg
    },
    {
        id: 3,
        title: 'Lotteries',
        href: '#',
        description:
            'Add transparency and best in class security to your lottery by selecting the winning numbers with a verifiable draw that anyone can audit.',
        imageUrl: lotteryImg
    },
    {
        id: 4,
        title: 'Championships',
        href: '#',
        description:
            'Most championships, like the Olympic games and the FIFA World Cup, are using random draws to decide competition brackets. Make this process verifiable to prevent corruption.',
        imageUrl: olympicGamesImg
    },
    //   {
    //     id: 5,
    //     title: 'Public entities',
    //     href: '#',
    //     description:
    //       'Increase the trust in your public institutions by proving to your citizens that you are not corrupted.',
    //     imageUrl: publidGoodsImg
    //   },
    //   {
    //     id: 6,
    //     title: 'Custom',
    //     href: '#',
    //     description:
    //       'Random draw is one of the oldest algorithm on Earth',
    //     imageUrl: publidGoodsImg
    //   }
]


const videos = [
    {
        description: 'Our smart contract and the random numbers it generates have been audited by Gaming Laboratories International, the most prestigious testing laboratory in the world.',
        imageUrl: gliRngImg,
        videoUrl: '',
        // https://gaminglabs.com/services/igaming/random-number-generator-rng/
    },
    {
        description: 'Random.win is built by the same team behind VerifiableDraws.com which won the Gold Medal at Concours Lépine, the most famous innovation competition in France.',
        imageUrl: lepineRemisePrixImg,
        videoUrl: 'https://www.youtube.com/watch?v=4oVa9vfy-cE',
    },
    {
        description: 'Our algorithm relies on Chainlink VRF which have been granted the GLI-19 certification, the highest gaming certification in the world.',
        imageUrl: bmmTestlabsImg,
        videoUrl: 'https://bmm.com/bmm-testlabs-grants-the-first-compliance-certification-in-the-blockchain-industry-to-chainlink-vrf/',
    },
]

const tiers = [
    // {
    //     name: 'Hobby',
    //     id: 'tier-hobby',
    //     href: '/launch-contest',
    //     price: '0',
    //     description: 'Try our software for free on a test blockchain',
    //     features: [
    //         { included: false, text: 'Non secure randomness, for testing purposes only'},
    //         { included: true, text: 'Up to 10 participants'},
    //         { included: true, text: '1 winner only'},
    //         { included: true, text: 'Schedule draw at custom date and time'},
    //         { included: true, text: '48-hour support response time'},
    //     ],
    // },
    {
        name: 'Personal',
        id: 'tier-basic',
        href: '/launch-contest',
        price: '29€',
        description: 'Try the most advanced random draw algorithm currently on the market at an affordable price.',
        features: [
            // { included: true, text: 'Provably-fair and verifiable randomness' },
            // { included: true, text: 'Is secure enough to protect a billion dollar lottery against any kind of attack' },
            { included: true, text: 'Up to 1 000 participants' },
            { included: true, text: 'Up to 10 winners' },
            { included: true, text: 'Schedule draw at custom date and time' },
            { included: true, text: '48-hour support response time' },
        ],
        featured: false,
        cta: 'Launch draw',
    },
    // {
    //     name: 'Pro',
    //     id: 'tier-pro',
    //     href: '/launch-contest',
    //     price: '9€',
    //     description: 'Same as Basic but with 100x more participants to reach a larger audience.',
    //     features: [
    //         { included: true, text: 'Provably-fair and verifiable randomness' },
    //         // { included: true, text: 'Is secure enough to protect a billion dollar lottery against any kind of attack' },
    //         { included: true, text: 'Up to 100 000 participants' },
    //         { included: true, text: 'Up to 100 winners' },
    //         { included: true, text: 'Schedule draw at custom date and time' },
    //         { included: true, text: '24-hour support response time' },
    //     ],
    //     featured: false,
    //     cta: 'Launch draw',
    // },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '/contact',
        price: 'Custom',
        description: 'We provide custom plans for companies engaged in large-scale operations.',
        features: [
            { included: true, text: 'White-labelling, bring your own template' },
            { included: true, text: 'API access' },
            { included: true, text: 'Private draws' },
            { included: true, text: 'Unlimited participants' },
            { included: true, text: 'Unlimited winners' },
            { included: true, text: 'Priority support' },
        ],
        featured: true,
        cta: 'Get started today',
    }
]



const primaryFeatures = [
    {
        name: 'No account required',
        description:
          'It takes no more than 2 minutes to create a contest on random.win',
        href: '#',
        icon: BoltIcon,
      },
    {
      name: 'Fully decentralized',
      description:
        'Your contest runs entirely on the blockchain to make sure the winner selection is transparent for everyone',
      href: '#',
      icon: CubeTransparentIcon,
    },
    {
      name: 'One-click verification',
      description:
        'Your followers don\'t need to trust anyone, they can check the winners themselves on the blockchain if they want to',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
  ]
  const secondaryFeatures = [
    {
        name: 'Increased engagement.',
        description:
            'Encourage more people to participate by proving to them that they have a chance to win.',
        icon: UserGroupIcon,
    },
    {
        name: 'Top notch brand image.',
        description:
            'Being transparent with your followers is the best way you can boost your brand image.',
        icon: SparklesIcon,
    },
    {
        name: 'Say goodbye to disputes.',
        description:
            'Protect yourself from lawsuits by storing proofs of randomness on the blockchain.',
        icon: ScaleIcon,
    },
    {
        name: 'Better user experience.',
        description:
            'Let your followers check the winner themselves without them having to trust you.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Verifiable.',
        description:
            'Our code is public and cannot be manipulated by anyone, not even by us, because it lives on the blockchain.',
        icon: MagnifyingGlassCircleIcon,
    },
    
    
    {
        name: 'Provably random.',
        description:
            'We rely on Chainlink VRF to generate a public proof of randomness on the blockchain for each contest.',
        icon: ShieldCheckIcon,
    },
    
    
]
  const stats = [
    { id: 1, name: 'Influencers', value: '20+' },
    { id: 2, name: 'Contests deployed', value: '500+' },
    { id: 3, name: 'Total participants', value: '200,000+' },
    // { id: 4, name: 'Uptime guarantee', value: '99.9%' },
  ]
 



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


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
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-8">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

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
              <h1 className="mt-32 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                The best way to organize contests
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Random.win enables you to organize social media contests in <span className="font-bold">the most transparent way</span> by picking random numbers directly from the blockchain.
              </p> 
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/launch-contest"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Launch contest
                </Link>
                {/* <Link href="https://www.verify.win/bafkreiamidpvgvp35l67uuioe6e2qwbfq4u2e5qbu5mrz64osy46wuthdm" className="text-sm font-semibold leading-6 text-white">
                  View an example <span aria-hidden="true">→</span>
                </Link> */}
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
            <div className="mx-auto max-w-7xl pt-32 px-6 lg:px-8 lg:pt-0">
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5  logos">
                    
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={insightMediaLogoImg}
                        alt="Insight Media"
                    />

                    <Image
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
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
                        src={tf1LogoImg}
                        alt="TF1"
                    />
                    
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={fidealisLogoImg}
                        alt="Fidealis"
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



            

            {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                The ultimate random picker tool
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p> */}
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
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              You <span className="underline">don&apos;t need</span> to verify,
              <br />
              but if you want you can
              {/* Don&apos;t trust, Verify */}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                It only takes a few seconds. 
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src={demoOrientExpressGifImg}
                alt="App screenshot"
                className="rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              {/* <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
              </div> */}
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
                        A battle-tested product 🏆
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
            <p className="mt-2 text-3xl font-bold tracking-tight text-white text-center sm:text-5xl">
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



            {/* Powered By  */}
            {/* <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                <div style={{ boxSizing: 'border-box', margin: '0px auto', maxWidth: '1200px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                    <h2 data-main-heading="true" className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
                        Built on a foundation of decentralized,
                        <br />
                        battle-tested technologies
                    </h2>
                    <div data-version="v1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 1 auto', gap: '0px', position: 'relative', height: '264px', overflow: 'hidden', width: 'calc(100% + 16px * 2)', left: '-16px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                        <svg fill="none" height="264" role="img" viewBox="0 0 891 264" width="891" data-lines="true" aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center." style={{ boxSizing: 'border-box', transform: 'matrix(1, 0, 0, 1, -2.5, 0)', position: 'absolute', top: '0px', outlineColor: 'rgb(37, 99, 235)', display: 'block', verticalAlign: 'middle', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                            <path d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <g style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <path d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                                <path d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264" stroke="url(#orange-pulse-1)" strokeWidth="2" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            </g>
                            <g>
                                <path d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                                <path d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264" stroke="url(#blue-pulse-1)" strokeLinecap="round" strokeWidth="2"></path>
                            </g>
                            <g style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                                <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" stroke="url(#pink-pulse-2)" strokeLinecap="round" strokeWidth="2" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            </g>
                            <g style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                                <path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264" stroke="url(#blue-pulse-2)" strokeLinecap="round" strokeWidth="2" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            </g>
                            <path d="M412 96L412 0" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <g style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <path d="M412 263.5L412 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ transform: 'scale(-1)', transformOrigin: '412px 223.75px', boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                                <path d="M412 263.5L412 184" stroke="url(#pink-pulse-1)" strokeLinecap="round" strokeWidth="2" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            </g>
                            <g style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <path d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                                <path d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264" stroke="url(#orange-pulse-2)" strokeWidth="2" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            </g>
                            <path d="M436 96L436 0" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M436 214L436 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ transform: 'scale(-1)', transformOrigin: '436px 199px', boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M460 96L460 64" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M460 239L460 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ transform: 'scale(-1)', transformOrigin: '460px 211.5px', boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <circle cx="460" cy="64" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="460" cy="64" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="308" cy="64" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="308" cy="64" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="69" cy="173" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="69" cy="173" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="436" cy="214" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="436" cy="214" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="460" cy="240" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="460" cy="240" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="560" cy="214" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="560" cy="214" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="560" cy="197" fill="var(--geist-background)" r="4" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <circle cx="560" cy="197" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></circle>
                            <defs style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_341_27683" x1="412.5" x2="412.5" y1="-3.27835e-08" y2="96">
                                    <stop stopOpacity="0"></stop>
                                    <stop offset="1"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_341_27683" x1="436.5" x2="436.5" y1="-3.27835e-08" y2="96">
                                    <stop stopOpacity="0"></stop>
                                    <stop offset="1"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_341_27683" x1="554" x2="484" y1="20" y2="96">
                                    <stop stopOpacity="0"></stop>
                                    <stop offset="1"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="blue-pulse-1" x1="400" y1="83" x2="350" y2="133.75">
                                    <stop stopColor="#2EB9DF" stopOpacity="0"></stop><stop offset="0.05" stopColor="#2EB9DF"></stop>
                                    <stop offset="1" stopColor="#2EB9DF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="blue-pulse-2" x1="400" y1="83" x2="350" y2="133.75">
                                    <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
                                    <stop offset="0.05" stopColor="#2EB9DF"></stop>
                                    <stop offset="1" stopColor="#2EB9DF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="pink-pulse-1" x1="400" y1="83" x2="350" y2="133.75">
                                    <stop stopColor="#FF4A81" stopOpacity="0"></stop>
                                    <stop offset="0.030" stopColor="#FF4A81"></stop>
                                    <stop offset="0.27" stopColor="#DF6CF6"></stop>
                                    <stop offset="1" stopColor="#0196FF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="pink-pulse-2" x1="475" y1="120" x2="488" y2="150">
                                    <stop stopColor="#FF4A81" stopOpacity="0"></stop>
                                    <stop offset="0.0564843" stopColor="#FF4A81"></stop>
                                    <stop offset="0.4616" stopColor="#DF6CF6"></stop>
                                    <stop offset="1" stopColor="#0196FF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="orange-pulse-1" x1="360" y1="130" x2="400" y2="170">
                                    <stop stopColor="#FF7432" stopOpacity="0"></stop>
                                    <stop offset="0.0550784" stopColor="#FF7432"></stop>
                                    <stop offset="0.373284" stopColor="#F7CC4B"></stop>
                                    <stop offset="1" stopColor="#F7CC4B" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" id="orange-pulse-2" x1="300" y1="140" x2="400" y2="180">
                                    <stop stopColor="#FF7432" stopOpacity="0"></stop>
                                    <stop offset="0.0531089" stopColor="#FF7432"></stop>
                                    <stop offset="0.415114" stopColor="#F7CC4B"></stop>
                                    <stop offset="1" stopColor="#F7CC4B" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg fill="none" height="312" viewBox="0 0 400 312" width="400" data-mobile-lines="true" style={{ boxSizing: 'border-box', top: '30px', display: 'none', position: 'absolute', outlineColor: 'rgb(37, 99, 235)', verticalAlign: 'middle', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                            <path d="M140 36L140 23C140 20.7909 138.209 19 136 19L62.0001 19" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M116 62L16.0001 62" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M284 62.0076L559 62.0076C561.209 62.0076 563 63.7985 563 66.0076L563 195.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M116 81.9318L-160 81.9318C-162.209 81.9318 -164 83.7226 -164 85.9317L-164 105.841" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M284.5 82L370 82C372.209 82 374 83.7909 374 86L374 301.883C374 304.092 372.209 305.883 370 305.883L240 305.883C237.791 305.883 236 307.674 236 309.883L236 312" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M140 108L140 117.825C140 120.034 138.209 121.825 136 121.825L67.0001 121.825" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M164 36L164 4" stroke="url(#paint0_linear_114_9407)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M164 172.5L164 108" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M188 36L188 4" stroke="url(#paint1_linear_114_9407)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M188 137.689L188 107.803" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M212 36.1364L212 4.25757" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M212 138L212 108" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M236 36L236 8C236 5.79086 237.791 4 240 4L306 4" stroke="url(#paint2_linear_114_9407)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M236 107.803L236 133.689C236 135.898 237.791 137.689 240 137.689L312 137.689" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M260 36.1364L260 28.1819C260 25.9727 261.791 24.1819 264 24.1819L638 24.1819C640.209 24.1819 642 25.9727 642 28.1819L642 203.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <path d="M260 107.803L260 116.754C260 118.963 261.791 120.754 264 120.754L312 120.754" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="212" cy="4.25755" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M215.5 4.25755C215.5 6.18039 213.935 7.7424 212 7.7424C210.065 7.7424 208.5 6.18039 208.5 4.25755C208.5 2.33471 210.065 0.772705 212 0.772705C213.935 0.772705 215.5 2.33471 215.5 4.25755Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="60.0001" cy="18.9848" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M63.5001 18.9848C63.5001 20.9077 61.9349 22.4697 60.0001 22.4697C58.0653 22.4697 56.5001 20.9077 56.5001 18.9848C56.5001 17.062 58.0653 15.5 60.0001 15.5C61.9349 15.5 63.5001 17.062 63.5001 18.9848Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="20.0001" cy="61.9848" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M23.5001 61.9848C23.5001 63.9077 21.9349 65.4697 20.0001 65.4697C18.0653 65.4697 16.5001 63.9077 16.5001 61.9848C16.5001 60.062 18.0653 58.5 20.0001 58.5C21.9349 58.5 23.5001 60.062 23.5001 61.9848Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="188" cy="137.985" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M191.5 137.985C191.5 139.908 189.935 141.47 188 141.47C186.065 141.47 184.5 139.908 184.5 137.985C184.5 136.062 186.065 134.5 188 134.5C189.935 134.5 191.5 136.062 191.5 137.985Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="66.0001" cy="121.985" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M69.5001 121.985C69.5001 123.908 67.9349 125.47 66.0001 125.47C64.0653 125.47 62.5001 123.908 62.5001 121.985C62.5001 120.062 64.0653 118.5 66.0001 118.5C67.9349 118.5 69.5001 120.062 69.5001 121.985Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="212" cy="137.985" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M215.5 137.985C215.5 139.908 213.935 141.47 212 141.47C210.065 141.47 208.5 139.908 208.5 137.985C208.5 136.062 210.065 134.5 212 134.5C213.935 134.5 215.5 136.062 215.5 137.985Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="312" cy="137.689" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M315.5 137.689C315.5 139.612 313.935 141.174 312 141.174C310.065 141.174 308.5 139.612 308.5 137.689C308.5 135.767 310.065 134.205 312 134.205C313.935 134.205 315.5 135.767 315.5 137.689Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <ellipse cx="312" cy="120.754" fill="var(--geist-background)" rx="4" ry="3.98485" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></ellipse>
                            <path d="M315.5 120.754C315.5 122.677 313.935 124.239 312 124.239C310.065 124.239 308.5 122.677 308.5 120.754C308.5 118.831 310.065 117.269 312 117.269C313.935 117.269 315.5 118.831 315.5 120.754Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></path>
                            <rect fill="url(#paint3_linear_114_9407)" height="60" rx="0.996212" transform="rotate(90 368 61)" width="1.99242" x="368" y="61" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></rect>
                            <rect fill="url(#paint4_linear_114_9407)" height="60" rx="0.996212" transform="matrix(0 1 1 0 38 81)" width="1.99242" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></rect>
                            <rect fill="url(#paint5_linear_114_9407)" height="28" rx="1" transform="matrix(1 0 0 -1 163 148)" width="2" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></rect>
                            <defs style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <linearGradient gradientUnits="userSpaceOnUse" x1="164.5" x2="164.5" y1="4" y2="36" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    <stop stopOpacity="0" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" x1="188.5" x2="188.5" y1="4" y2="36" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    <stop stopOpacity="0" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" x1="306" x2="286.061" y1="4" y2="55.4142" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    <stop stopOpacity="0" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="1" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" x1="369.799" x2="369.797" y1="121.239" y2="58.4805" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    <stop stopColor="#FF4A81" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="0.21875" stopColor="#DF6CF7" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="1" stopColor="#0196FF" stopOpacity="0" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" x1="1.79948" x2="1.79741" y1="60.2391" y2="-2.51953" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    <stop stopColor="#FF7432" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="0.21875" stopColor="#F7CC4B" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" x1="1.80632" x2="1.80587" y1="28.1116" y2="-1.17578" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    <stop stopColor="#2EB9DF" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="0.21875" stopColor="#61DAFB" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                    <stop offset="1" stopColor="#61DAFB" stopOpacity="0" style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="foundation_cpu" data-version="v1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 1 auto', gap: '0px', userSelect: 'none', width: 'fit-content', padding: '21px 25px', borderRadius: '8px', fontSize: '24px', lineHeight: '26.4px', letterSpacing: '-0.96px', fontWeight: 700, color: 'rgb(255, 255, 255)', position: 'relative', background: 'linear-gradient(rgb(68, 68, 68) 0px, rgb(51, 51, 51) 100%) repeat scroll 0% 0% / auto padding-box border-box, rgba(0, 0, 0, 0) linear-gradient(rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 26.56%, rgba(0, 0, 0, 0.1) 51.56%, rgba(0, 0, 0, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.15) 0px 6px 4px -2px, rgba(0, 0, 0, 0.25) 0px -3px 1px -1px inset', transform: 'matrix(1, 0, 0, 1, 0, 8)', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }} aria-hidden="true">
                            <div data-cpu-shine="true" style={{ boxSizing: 'border-box', overflow: 'hidden', width: '100%', height: '68.3984px', position: 'absolute', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></div>
                            <div data-connectors="true" data-side="left" style={{ boxSizing: 'border-box', flexDirection: 'column', left: '-10px', gap: '14px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 1px 0px 1px 1px inset, rgb(221, 221, 221) 1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 1px 0px 1px 1px inset, rgb(221, 221, 221) 1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span></div>
                            <div data-connectors="true" data-side="top" style={{ boxSizing: 'border-box', top: '-10px', gap: '18px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span></div><span data-text="true" style={{ boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) linear-gradient(92.66deg, rgb(174, 174, 174), rgb(234, 234, 234) 19.79%, rgb(157, 155, 155) 33.33%, rgb(239, 236, 236) 70.31%, rgb(132, 132, 132)) repeat scroll 0% 0% / auto padding-box', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'rgba(0, 0, 0, 0)', textShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 10px, rgba(0, 0, 0, 0.1) 0px -1px 0px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>Powered By</span>
                            <div data-connectors="true" data-side="bottom" style={{ boxSizing: 'border-box', bottom: '-10px', gap: '18px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span></div>
                            <div data-connectors="true" data-side="right" style={{ boxSizing: 'border-box', flexDirection: 'column', right: '-10px', gap: '14px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) -1px 0px 1px 1px inset, rgb(221, 221, 221) -1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span><span data-connector="true" style={{ boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) -1px 0px 1px 1px inset, rgb(221, 221, 221) -1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}></span></div>
                        </div>
                    </div>
                    <div data-version="v1" className="flex flex-row flex-wrap sm:flex-nowrap gap-8 items-center justify-center">
                        <Link data-version="v1" className="foundation_card" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 116, 222)', textDecoration: 'none solid rgb(0, 116, 222)', transition: 'background 0.15s ease 0s', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '0px', width: '100%', minHeight: '240px', borderRadius: '12px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgb(250, 250, 250) 0px 0px 0px 6px inset', background: '#fff', position: 'relative', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)', touchAction: 'pan-y' }} data-variant="react" href="https://ipfs.tech/" rel="noopener" target="_blank">
                            <div data-icon="true" style={{ boxSizing: 'border-box', height: '40px', display: 'flex', alignItems: 'center', marginBottom: 'auto', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <Image
                                    className="h-14 w-auto"
                                    src={ipfsLogoImg}
                                    alt="IPFS"
                                />
                            </div>
                            <div data-version="v1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <span data-version="v1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', fontSize: '20px', lineHeight: '30px', letterSpacing: '-0.8px', color: 'rgb(0, 0, 0)', margin: '0px', fontWeight: 600, outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }} data-title="true">
                                    <span style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>IPFS</span>
                                    <svg viewBox="0 0 20 20" fill="rgb(150, 150, 150)" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span data-subtitle="true" style={{ boxSizing: 'border-box', fontSize: '14px', lineHeight: '21px', letterSpacing: '-0.14px', color: 'rgb(102, 102, 102)', margin: '0px', maxWidth: '440.918px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    The InterPlanetary File System (IPFS) is a distributed file storage protocol that allows computers all over the globe to store and serve files as part of a giant peer-to-peer network.
                                </span>
                            </div>
                        </Link>
                        <Link data-version="v1" className="foundation_card" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 116, 222)', textDecoration: 'none solid rgb(0, 116, 222)', transition: 'background 0.15s ease 0s', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '0px', width: '100%', minHeight: '240px', borderRadius: '12px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgb(250, 250, 250) 0px 0px 0px 6px inset', background: '#fff', position: 'relative', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)', touchAction: 'pan-y' }} data-variant="turbo" href="https://ethereum.org/" rel="noopener" target="_blank">
                            <div data-icon="true" style={{ boxSizing: 'border-box', height: '40px', display: 'flex', alignItems: 'center', marginBottom: 'auto', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <Image
                                    className="h-14 w-auto"
                                    src={ethereumLogoImg}
                                    alt=""
                                />
                            </div>
                            <div data-version="v1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <span data-version="v1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', fontSize: '20px', lineHeight: '30px', letterSpacing: '-0.8px', color: 'rgb(0, 0, 0)', margin: '0px', fontWeight: 600, outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }} data-title="true">
                                    <span style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>Ethereum</span>
                                    <svg viewBox="0 0 20 20" fill="rgb(150, 150, 150)" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span data-subtitle="true" style={{ boxSizing: 'border-box', fontSize: '14px', lineHeight: '21px', letterSpacing: '-0.14px', color: 'rgb(102, 102, 102)', margin: '0px', maxWidth: '440.918px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts.
                                </span>
                            </div>
                        </Link>
                        <Link href="https://chain.link/vrf" rel="noopener" target="_blank" data-version="v1" className="foundation_card" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 116, 222)', textDecoration: 'none solid rgb(0, 116, 222)', transition: 'background 0.15s ease 0s', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '0px', width: '100%', minHeight: '240px', borderRadius: '12px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgb(250, 250, 250) 0px 0px 0px 6px inset', background: '#fff', position: 'relative', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)', touchAction: 'pan-y' }} data-variant="swc">
                            <div data-icon="true" style={{ boxSizing: 'border-box', height: '40px', display: 'flex', alignItems: 'center', marginBottom: 'auto', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <Image
                                    className="h-14 w-auto"
                                    src={chainlinkLogoImg}
                                    alt=""
                                />
                            </div>
                            <div data-version="v1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                <span data-version="v1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', fontSize: '20px', lineHeight: '30px', letterSpacing: '-0.8px', color: 'rgb(0, 0, 0)', margin: '0px', fontWeight: 600, outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }} data-title="true">
                                    <span style={{ boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>Chainlink VRF</span>
                                    <svg viewBox="0 0 20 20" fill="rgb(150, 150, 150)" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span data-subtitle="true" style={{ boxSizing: 'border-box', fontSize: '14px', lineHeight: '21px', letterSpacing: '-0.14px', color: 'rgb(102, 102, 102)', margin: '0px', maxWidth: '440.918px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)' }}>
                                    Chainlink VRF provides cryptographically secure randomness that cannot be manipulated by any user, node operator, or malicious actor.
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section> */}



            


{/* CTA section */}
<div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
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
              Random.win is the only random picker on the internet which enables a full transparency of the drawing process for all the participants. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/launch-contest"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Launch contest
              </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                Contact us <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>


    

        
        </div>
        


    )
}
