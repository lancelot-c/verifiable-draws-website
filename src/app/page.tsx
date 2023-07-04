import Link from 'next/link'
import Image from 'next/image'

import {
    ArrowTrendingUpIcon,
    Bars3Icon,
    BuildingLibraryIcon,
    CheckIcon,
    CurrencyDollarIcon,
    GlobeEuropeAfricaIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/solid'


const features = [
    {
      name: 'Reliable by design',
      description:
        'It is impossible for anyone, even us, to rig our draws because our algorithm is end-to-end decentralized.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Top notch brand image',
      description:
        'Using transparent algorithms when interacting with your customers is one of the best way to boost your brand image.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Say goodbye to disputes',
      description:
        'Contestations of the results are hopeless because there is an undeniable scientific proof certifying that the draw is fair and random.',
      icon: BuildingLibraryIcon,
    },
    {
      name: 'Increase participation rate',
      description:
        'Because it is transparent, the draw easily earn the public trust, turning suspicious onlookers into potential participants.',
      icon: ArrowTrendingUpIcon,
    },
    // {
    //   name: 'Much cheaper than a court bailiff',
    //   description:
    //     'Relying on a court bailiff to certify a draw cost 500€ on average in France. One draw with us costs 29€ and even less if you buy in bulk.',
    //   icon: CurrencyDollarIcon,
    // },
    // {
    //   name: 'Works online & offline',
    //   description:
    //     'Your real world draws can also be verifiable because we provide you with QR codes that you can share with real world participants.',
    //   icon: GlobeEuropeAfricaIcon,
    // },
  ]
  

const tiers = [
    {
        name: 'Single draw',
        id: 'tier-freelancer',
        href: '/launch-draw',
        packagePrice: '29',
        description: 'For individuals looking only for a single draw.',
        features: [
            'Instant deploy only',
            'Immediate or scheduled draw',
            'Up to 10,000 participants',
            'Up to 3 winners',
            '48-hour support response time'
        ],
        mostPopular: true,
    },
    {
      name: '10 draws',
      id: 'tier-startup',
      href: '#join-community',
      packagePrice: '17',
      savePercentage: '40',
      description: 'For people who organise draws on a regular basis, like social media influencers.',
      features: [
        'Deploy now or later',
        'Immediate or scheduled draw',
        'Up to 1,000,000 participants',
        'Up to 100 winners',
        '24-hour support response time',
      ],
      mostPopular: false,
      availableSoon: true
    },
    {
      name: '100 draws',
      id: 'tier-enterprise',
      href: '#join-community',
      packagePrice: '12',
      savePercentage: '60',
      description: 'For teams & businesses who are organizing draws at scale.',
      features: [
        'Deploy now or later',
        'Immediate or scheduled draw',
        'Up to 10,000,000 participants',
        'Up to 1000 winners',
        '1-hour, dedicated support response time',
      ],
      bestValue: false,
      availableSoon: true
    },
  ]
  

  


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }


export default function Example() {

    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <div>

                {/* Hero section */}
        <div className="relative pt-14">
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
          <div className="py-0 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <Image
                        className="gold-medal m-auto -z-10 lg:absolute"
                        src="/medaille-or-lepine-small.png"
                        alt="Médaille d'or du Concours Lépine 2023"
                    />
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Build a company that everyone trust
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        <span className="italic">Verifiable Draws</span> enables you to organize random draws and contests which are completely transparent thanks to decentralized technologies,
                        allowing you to prove the whole world that your company is trustworthy.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/launch-draw"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Launch Draw
                        </Link>
                        <Link href="#join-community" className="text-sm font-semibold leading-6 text-gray-900">
                            Live Demo <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/graphique-technique.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>

              {/* <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 p-2 lg:-m-4 lg:p-4">
                  <Image
                    src="/verify-win.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                  />
                </div>
              </div> */}
              
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl pt-32 px-6 lg:px-8 lg:pt-0">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5  grayscale-[90%]">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/fdj-logo.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            {/* <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/hdjp-logo.jpg"
              alt="Reform"
              width={158}
              height={48}
            /> */}
            
            {/* <svg viewBox="0 0 500 65">
            
                <g id="Calque_2" data-name="Calque 2">
                    <g id="vecto">
                        <g id="Presse">
                            <path className="cls-1" fill="none" d="M227.3,49a21.18,21.18,0,0,0,4.08,6,17.92,17.92,0,0,0,5.72,3.93,17.41,17.41,0,0,0,6.93,1.4,18.59,18.59,0,0,0,4.7-.61l5.07-18.2H225.41A21.3,21.3,0,0,0,227.3,49Z"/>
                            <path className="cls-1" fill="none" d="M112.12,22.84A18,18,0,0,0,106.29,19a18.85,18.85,0,0,0-14.11,0,18.12,18.12,0,0,0-5.83,3.83,18.6,18.6,0,0,0-4,5.88,22.09,22.09,0,0,0-1.81,7.44h37.63a20.45,20.45,0,0,0-6-13.32Z"/>
                            <path className="cls-1" fill="none" d="M27.47,22.05a9,9,0,0,0-2.95-2.23A8.3,8.3,0,0,0,21,19H6.48V40.27h14.9A7.9,7.9,0,0,0,25,39.44a8.27,8.27,0,0,0,2.77-2.3,11.38,11.38,0,0,0,1.8-3.42,13,13,0,0,0,.65-4.11,11.58,11.58,0,0,0-2.77-7.56Z"/>
                            <path className="cls-1" fill="none" d="M250.73,19.48a18.62,18.62,0,0,0-14,0A17.72,17.72,0,0,0,231,23.26a18.62,18.62,0,0,0-4,5.82,22,22,0,0,0-1.79,7.37h30l3.1-11.12a19.87,19.87,0,0,0-1.81-2.07A17.72,17.72,0,0,0,250.73,19.48Z"/>
                            <path className="cls-2" fill="#000" d="M32.44,18.42a15.73,15.73,0,0,0-4.9-3.75,14,14,0,0,0-6.23-1.4H0V64.39H6.48V46H21.74a13.76,13.76,0,0,0,6.16-1.37A14.9,14.9,0,0,0,32.65,41a16.93,16.93,0,0,0,3.06-5.26,17.69,17.69,0,0,0,1.08-6.12,16,16,0,0,0-1.15-5.94A18.09,18.09,0,0,0,32.44,18.42Zm-2.85,15.3a11.38,11.38,0,0,1-1.8,3.42A8.27,8.27,0,0,1,25,39.44a7.9,7.9,0,0,1-3.64.83H6.48V19H21a8.3,8.3,0,0,1,3.57.79,9,9,0,0,1,2.95,2.23,11.58,11.58,0,0,1,2.77,7.56A13,13,0,0,1,29.59,33.72Z"/>
                            <path className="cls-2" fill="#000" d="M66.7,13a14.34,14.34,0,0,0-9.31,3.57,27.07,27.07,0,0,0-7,9V13.33H44.16V64.39h6.66V32.64a18.88,18.88,0,0,1,7.06-9.71,21,21,0,0,1,11.76-3.72V13.13A7.3,7.3,0,0,0,68.37,13Z"/>
                            <path className="cls-2" fill="#000" d="M117.46,20.29a24.4,24.4,0,0,0-8-5.74,26,26,0,0,0-20.48,0,25.67,25.67,0,0,0-13.43,14,27,27,0,0,0-1.91,10.14A27.64,27.64,0,0,0,75.57,49a26.74,26.74,0,0,0,5.34,8.48,24.81,24.81,0,0,0,18.42,7.89,26.88,26.88,0,0,0,7.06-.93,24.45,24.45,0,0,0,6.27-2.65,23,23,0,0,0,5-4A16.82,16.82,0,0,0,121,52.63l-5.78-1.57a12.84,12.84,0,0,1-2.5,3.77A15.56,15.56,0,0,1,109,57.72a19.72,19.72,0,0,1-4.51,1.87,18.73,18.73,0,0,1-5,.68,17.43,17.43,0,0,1-7-1.42,18.13,18.13,0,0,1-5.78-4,21.69,21.69,0,0,1-6-13.62h43.61a4.45,4.45,0,0,0,.15-1.08c0-.52,0-1,0-1.57a26.91,26.91,0,0,0-1.86-10A26.55,26.55,0,0,0,117.46,20.29ZM80.52,36.16a22.09,22.09,0,0,1,1.81-7.44,18.6,18.6,0,0,1,4-5.88A18.12,18.12,0,0,1,92.18,19a18.85,18.85,0,0,1,14.11,0,18,18,0,0,1,5.83,3.83,20.45,20.45,0,0,1,6,13.32Z"/>
                            <path className="cls-2" fill="#000" d="M164.14,40.77A20.91,20.91,0,0,0,158.67,38a64.12,64.12,0,0,0-7.17-2q-3.45-.8-6-1.51a19.47,19.47,0,0,1-4.22-1.69,6.62,6.62,0,0,1-2.48-2.34A6.84,6.84,0,0,1,138,27a7.43,7.43,0,0,1,2.77-6.12c1.85-1.49,4.76-2.23,8.75-2.23a20.12,20.12,0,0,1,4.43.47,22.21,22.21,0,0,1,3.92,1.22,20.5,20.5,0,0,1,3.24,1.69,10.45,10.45,0,0,1,2.3,1.95l3-5.26a27.39,27.39,0,0,0-24.12-4.86,16.56,16.56,0,0,0-5.83,2.92,13.46,13.46,0,0,0-3.82,4.75A14.64,14.64,0,0,0,131.34,28a12.21,12.21,0,0,0,1,5.18,9.78,9.78,0,0,0,3,3.67,18.54,18.54,0,0,0,4.93,2.6,62.4,62.4,0,0,0,6.84,2q3.52.87,6.3,1.69a22,22,0,0,1,4.64,1.91,8.22,8.22,0,0,1,2.85,2.56,6.42,6.42,0,0,1,1,3.63,6.5,6.5,0,0,1-3,5.84q-3,1.93-8.5,1.94a25.35,25.35,0,0,1-5.65-.61,31,31,0,0,1-5-1.59,24.47,24.47,0,0,1-4.18-2.19,17.44,17.44,0,0,1-3-2.45l-3.09,5.47A31.44,31.44,0,0,0,139,63.06a34,34,0,0,0,11.2,1.83,31,31,0,0,0,7.34-.83,16.9,16.9,0,0,0,5.87-2.59A12.76,12.76,0,0,0,167.34,57a13.37,13.37,0,0,0,1.44-6.37,12.88,12.88,0,0,0-1.19-5.84A11.16,11.16,0,0,0,164.14,40.77Z"/>
                            <path className="cls-2" fill="#000" d="M208.27,40.77A20.75,20.75,0,0,0,202.8,38a63.33,63.33,0,0,0-7.16-2q-3.46-.8-6-1.51a19.37,19.37,0,0,1-4.21-1.69A6.47,6.47,0,0,1,183,30.48a6.84,6.84,0,0,1-.8-3.46A7.44,7.44,0,0,1,185,20.9c1.84-1.49,4.76-2.23,8.74-2.23a20,20,0,0,1,4.43.47,22.32,22.32,0,0,1,3.93,1.22,21.41,21.41,0,0,1,3.24,1.69,10.69,10.69,0,0,1,2.3,1.95l3-5.26a25.64,25.64,0,0,0-16.77-5.83,26.5,26.5,0,0,0-7.35,1,16.65,16.65,0,0,0-5.83,2.92,13.54,13.54,0,0,0-3.81,4.75A14.5,14.5,0,0,0,175.48,28a12.06,12.06,0,0,0,1,5.18,9.75,9.75,0,0,0,3,3.67,18.61,18.61,0,0,0,4.94,2.6,61.12,61.12,0,0,0,6.84,2q3.52.87,6.3,1.69a22.48,22.48,0,0,1,4.64,1.91A8.09,8.09,0,0,1,205,47.65a6.43,6.43,0,0,1,1,3.63,6.49,6.49,0,0,1-3,5.84c-2,1.29-4.85,1.94-8.49,1.94a25.44,25.44,0,0,1-5.66-.61,31,31,0,0,1-5-1.59,24,24,0,0,1-4.17-2.19,17.06,17.06,0,0,1-3-2.45l-3.1,5.47a31.49,31.49,0,0,0,9.62,5.37,33.93,33.93,0,0,0,11.19,1.83,31,31,0,0,0,7.35-.83,16.84,16.84,0,0,0,5.86-2.59A12.68,12.68,0,0,0,211.48,57a13.37,13.37,0,0,0,1.44-6.37,13,13,0,0,0-1.19-5.84A11.09,11.09,0,0,0,208.27,40.77Z"/>
                            <path className="cls-2" fill="#000" d="M244,60.31a17.41,17.41,0,0,1-6.93-1.4A17.92,17.92,0,0,1,231.38,55a21.32,21.32,0,0,1-6-13.48H253.8l1.41-5h-30A22,22,0,0,1,227,29.08a18.62,18.62,0,0,1,4-5.82,17.72,17.72,0,0,1,5.77-3.78,18.62,18.62,0,0,1,14,0,17.72,17.72,0,0,1,5.77,3.78,19.87,19.87,0,0,1,1.81,2.07L260.06,19a25.26,25.26,0,0,0-26.45-4,25.37,25.37,0,0,0-13.29,13.87,26.72,26.72,0,0,0-1.89,10,27.31,27.31,0,0,0,1.89,10.19,26.64,26.64,0,0,0,5.28,8.39,24.62,24.62,0,0,0,18.24,7.81,26.86,26.86,0,0,0,3.37-.22l1.52-5.44A18.59,18.59,0,0,1,244,60.31Z"/>
                        </g>
                        <g id="Citron">
                            <path className="cls-2" fill="#000" d="M260.16,38.94a27.34,27.34,0,0,1,1.62-9.18,25.58,25.58,0,0,1,4.71-8.17,24.38,24.38,0,0,1,7.6-5.87,22.51,22.51,0,0,1,10.26-2.27A20.92,20.92,0,0,1,296,16.59a19.2,19.2,0,0,1,7.13,8l-3,1.73A16,16,0,0,0,297,21.88,16.87,16.87,0,0,0,293,19a17.8,17.8,0,0,0-4.42-1.62,21.62,21.62,0,0,0-4.54-.5,18.23,18.23,0,0,0-8.64,2A20.31,20.31,0,0,0,269.08,24a22.57,22.57,0,0,0-3.92,7.16,25.17,25.17,0,0,0-1.33,8A24.18,24.18,0,0,0,269.73,55a21.14,21.14,0,0,0,6.48,5,17.79,17.79,0,0,0,8.07,1.87,20,20,0,0,0,4.71-.58,18.85,18.85,0,0,0,4.68-1.8,18.13,18.13,0,0,0,4.21-3.13,16.49,16.49,0,0,0,3.24-4.5l3.1,1.51a17.35,17.35,0,0,1-3.49,5.12,21.6,21.6,0,0,1-4.93,3.74,24,24,0,0,1-5.8,2.27,25.17,25.17,0,0,1-6,.75,20.15,20.15,0,0,1-9.61-2.3,25.31,25.31,0,0,1-7.53-6,28,28,0,0,1-4.93-8.42A27.18,27.18,0,0,1,260.16,38.94Z"/>
                            <path className="cls-2" fill="#000" d="M313.51,64.86v-51h3.67V64.86Z"/>
                            <path className="cls-2" fill="#000" d="M366.57,17.05H347.85V64.86h-3.67V17.05H325.46V13.74h41.11Z"/>
                            <path className="cls-2" fill="#000" d="M398.76,17a20.33,20.33,0,0,0-12.25,4.46,21.79,21.79,0,0,0-7.26,11.32v32h-3.33v-51h3.24V26.84a24.83,24.83,0,0,1,7-8.82,18.71,18.71,0,0,1,9.41-4c.65,0,1.24,0,1.76-.05s1,0,1.38,0Z"/>
                            <path className="cls-2" fill="#000" d="M426.61,65.22A21.07,21.07,0,0,1,416.89,63a25.1,25.1,0,0,1-7.56-5.83,25.9,25.9,0,0,1-4.9-8.28,27.49,27.49,0,0,1-1.73-9.58,26.48,26.48,0,0,1,1.84-9.79,27.21,27.21,0,0,1,5-8.28,24,24,0,0,1,7.59-5.72,21.52,21.52,0,0,1,9.51-2.13,20.9,20.9,0,0,1,9.72,2.27,24.56,24.56,0,0,1,7.52,5.94,27.37,27.37,0,0,1,4.86,8.32,27.06,27.06,0,0,1-5.15,27.5,24.37,24.37,0,0,1-7.56,5.69A21.23,21.23,0,0,1,426.61,65.22ZM406.37,39.3a24.7,24.7,0,0,0,1.48,8.46A22.72,22.72,0,0,0,412,55a20.7,20.7,0,0,0,6.4,5,17.89,17.89,0,0,0,8.18,1.87,17.68,17.68,0,0,0,8.31-1.94,20.81,20.81,0,0,0,6.37-5.15,23.65,23.65,0,0,0,4.11-7.24,24.29,24.29,0,0,0-.07-16.67,23.51,23.51,0,0,0-4.22-7.2,20.67,20.67,0,0,0-6.4-5,18.73,18.73,0,0,0-16.46.07,20.21,20.21,0,0,0-6.37,5.15,24.64,24.64,0,0,0-5.51,15.44Z"/>
                            <path className="cls-2" fill="#000" d="M500.26,64.86h-3.33V36.44q0-10.48-2.94-15.33t-9.41-4.86a19.48,19.48,0,0,0-6.91,1.28,23.71,23.71,0,0,0-6.27,3.53,25.83,25.83,0,0,0-5.09,5.29A20.19,20.19,0,0,0,463.12,33V64.86h-3.33v-51h3.14V26.64a23.32,23.32,0,0,1,4-5.53,25.82,25.82,0,0,1,5.35-4.27,27.19,27.19,0,0,1,6.22-2.74,23.43,23.43,0,0,1,6.71-1q8,0,11.57,5.73t3.52,17.2Z"/>
                        </g>
                        <path id="feuille_droite" data-name="feuille droite" className="cls-3" fill="#fbea00" d="M453.31,9.75s-23.21-5.39-26,21C427.29,30.77,450.74,34,453.31,9.75Z"/>
                        <path id="feuille_gauche" data-name="feuille gauche" className="cls-2" fill="#000" d="M440.41,0s-23,6.24-13,30.83C427.44,30.83,449.61,22.57,440.41,0Z"/>
                    </g>
                </g>
            </svg> */}
            
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/presse-citron-nav.svg"
              alt="Presse Citron"
            />

            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/fidealis-logo.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/tf1-logo.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/kastel-co-logo.png"
              alt="Statamic"
              width={158}
              height={48}
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
          <h2 className="mt-16 text-center text-lg font-semibold leading-8 text-gray-900">
                These companies have expressed their interest in our product
            </h2>
        </div>




          


                {/* Feature section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Stop using black box algorithms</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Unlock a new level of customer experience
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            A verifiable draw is like a regular random draw, except that it is 100% decentralized, transparent, and verifiable by the participants.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                        </dl>
                    </div>
                </div>



                {/* Powered By  */}
                <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div style={{boxSizing: 'border-box', margin: '0px auto', maxWidth: '1200px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                        <h2 data-main-heading="true" className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
                            Built on a foundation of decentralized,
                            <br />
                            battle-tested technologies
                        </h2>
                        <div data-version="v1" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 1 auto', gap: '0px', position: 'relative', height: '264px', overflow: 'hidden', width: 'calc(100% + 16px * 2)', left: '-16px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                            <svg fill="none" height="264" role="img" viewBox="0 0 891 264" width="891" data-lines="true" aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center." style={{boxSizing: 'border-box', transform: 'matrix(1, 0, 0, 1, -2.5, 0)', position: 'absolute', top: '0px', outlineColor: 'rgb(37, 99, 235)', display: 'block', verticalAlign: 'middle', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                <path d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <g style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <path d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                    <path d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264" stroke="url(#orange-pulse-1)" strokeWidth="2" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                </g>
                                <g>
                                    <path d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                                    <path d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264" stroke="url(#blue-pulse-1)" strokeLinecap="round" strokeWidth="2"></path>
                                </g>
                                <g style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                    <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" stroke="url(#pink-pulse-2)" strokeLinecap="round" strokeWidth="2" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                </g>
                                <g style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                    <path d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264" stroke="url(#blue-pulse-2)" strokeLinecap="round" strokeWidth="2" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                </g>
                                <path d="M412 96L412 0" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <g style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <path d="M412 263.5L412 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{transform: 'scale(-1)', transformOrigin: '412px 223.75px', boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                    <path d="M412 263.5L412 184" stroke="url(#pink-pulse-1)" strokeLinecap="round" strokeWidth="2" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                </g>
                                <g style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <path d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                    <path d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264" stroke="url(#orange-pulse-2)" strokeWidth="2" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                </g>
                                <path d="M436 96L436 0" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M436 214L436 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{transform: 'scale(-1)', transformOrigin: '436px 199px', boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M460 96L460 64" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M460 239L460 184" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{transform: 'scale(-1)', transformOrigin: '460px 211.5px', boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197" stroke="var(--geist-foreground)" strokeOpacity="0.1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <circle cx="460" cy="64" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="460" cy="64" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="308" cy="64" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="308" cy="64" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="69" cy="173" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="69" cy="173" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="436" cy="214" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="436" cy="214" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="460" cy="240" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="460" cy="240" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="560" cy="214" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="560" cy="214" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="560" cy="197" fill="var(--geist-background)" r="4" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <circle cx="560" cy="197" r="3.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" opacity="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></circle>
                                <defs style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
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
                            <svg fill="none" height="312" viewBox="0 0 400 312" width="400" data-mobile-lines="true" style={{boxSizing: 'border-box', top: '30px', display: 'none', position: 'absolute', outlineColor: 'rgb(37, 99, 235)', verticalAlign: 'middle', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                <path d="M140 36L140 23C140 20.7909 138.209 19 136 19L62.0001 19" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M116 62L16.0001 62" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M284 62.0076L559 62.0076C561.209 62.0076 563 63.7985 563 66.0076L563 195.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M116 81.9318L-160 81.9318C-162.209 81.9318 -164 83.7226 -164 85.9317L-164 105.841" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M284.5 82L370 82C372.209 82 374 83.7909 374 86L374 301.883C374 304.092 372.209 305.883 370 305.883L240 305.883C237.791 305.883 236 307.674 236 309.883L236 312" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M140 108L140 117.825C140 120.034 138.209 121.825 136 121.825L67.0001 121.825" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M164 36L164 4" stroke="url(#paint0_linear_114_9407)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M164 172.5L164 108" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M188 36L188 4" stroke="url(#paint1_linear_114_9407)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M188 137.689L188 107.803" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M212 36.1364L212 4.25757" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M212 138L212 108" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M236 36L236 8C236 5.79086 237.791 4 240 4L306 4" stroke="url(#paint2_linear_114_9407)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M236 107.803L236 133.689C236 135.898 237.791 137.689 240 137.689L312 137.689" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M260 36.1364L260 28.1819C260 25.9727 261.791 24.1819 264 24.1819L638 24.1819C640.209 24.1819 642 25.9727 642 28.1819L642 203.5" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <path d="M260 107.803L260 116.754C260 118.963 261.791 120.754 264 120.754L312 120.754" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="212" cy="4.25755" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M215.5 4.25755C215.5 6.18039 213.935 7.7424 212 7.7424C210.065 7.7424 208.5 6.18039 208.5 4.25755C208.5 2.33471 210.065 0.772705 212 0.772705C213.935 0.772705 215.5 2.33471 215.5 4.25755Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="60.0001" cy="18.9848" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M63.5001 18.9848C63.5001 20.9077 61.9349 22.4697 60.0001 22.4697C58.0653 22.4697 56.5001 20.9077 56.5001 18.9848C56.5001 17.062 58.0653 15.5 60.0001 15.5C61.9349 15.5 63.5001 17.062 63.5001 18.9848Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="20.0001" cy="61.9848" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M23.5001 61.9848C23.5001 63.9077 21.9349 65.4697 20.0001 65.4697C18.0653 65.4697 16.5001 63.9077 16.5001 61.9848C16.5001 60.062 18.0653 58.5 20.0001 58.5C21.9349 58.5 23.5001 60.062 23.5001 61.9848Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="188" cy="137.985" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M191.5 137.985C191.5 139.908 189.935 141.47 188 141.47C186.065 141.47 184.5 139.908 184.5 137.985C184.5 136.062 186.065 134.5 188 134.5C189.935 134.5 191.5 136.062 191.5 137.985Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="66.0001" cy="121.985" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M69.5001 121.985C69.5001 123.908 67.9349 125.47 66.0001 125.47C64.0653 125.47 62.5001 123.908 62.5001 121.985C62.5001 120.062 64.0653 118.5 66.0001 118.5C67.9349 118.5 69.5001 120.062 69.5001 121.985Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="212" cy="137.985" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M215.5 137.985C215.5 139.908 213.935 141.47 212 141.47C210.065 141.47 208.5 139.908 208.5 137.985C208.5 136.062 210.065 134.5 212 134.5C213.935 134.5 215.5 136.062 215.5 137.985Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="312" cy="137.689" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M315.5 137.689C315.5 139.612 313.935 141.174 312 141.174C310.065 141.174 308.5 139.612 308.5 137.689C308.5 135.767 310.065 134.205 312 134.205C313.935 134.205 315.5 135.767 315.5 137.689Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <ellipse cx="312" cy="120.754" fill="var(--geist-background)" rx="4" ry="3.98485" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></ellipse>
                                <path d="M315.5 120.754C315.5 122.677 313.935 124.239 312 124.239C310.065 124.239 308.5 122.677 308.5 120.754C308.5 118.831 310.065 117.269 312 117.269C313.935 117.269 315.5 118.831 315.5 120.754Z" stroke="var(--geist-foreground)" strokeOpacity="0.1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></path>
                                <rect fill="url(#paint3_linear_114_9407)" height="60" rx="0.996212" transform="rotate(90 368 61)" width="1.99242" x="368" y="61" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></rect>
                                <rect fill="url(#paint4_linear_114_9407)" height="60" rx="0.996212" transform="matrix(0 1 1 0 38 81)" width="1.99242" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></rect>
                                <rect fill="url(#paint5_linear_114_9407)" height="28" rx="1" transform="matrix(1 0 0 -1 163 148)" width="2" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></rect>
                                <defs style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="164.5" x2="164.5" y1="4" y2="36" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        <stop stopOpacity="0" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                    </linearGradient>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="188.5" x2="188.5" y1="4" y2="36" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        <stop stopOpacity="0" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                    </linearGradient>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="306" x2="286.061" y1="4" y2="55.4142" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        <stop stopOpacity="0" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="1" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                    </linearGradient>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="369.799" x2="369.797" y1="121.239" y2="58.4805" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        <stop stopColor="#FF4A81" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="0.21875" stopColor="#DF6CF7" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="1" stopColor="#0196FF" stopOpacity="0" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                    </linearGradient>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="1.79948" x2="1.79741" y1="60.2391" y2="-2.51953" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        <stop stopColor="#FF7432" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="0.21875" stopColor="#F7CC4B" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                    </linearGradient>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="1.80632" x2="1.80587" y1="28.1116" y2="-1.17578" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        <stop stopColor="#2EB9DF" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="0.21875" stopColor="#61DAFB" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                        <stop offset="1" stopColor="#61DAFB" stopOpacity="0" style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="foundation_cpu" data-version="v1" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 1 auto', gap: '0px', userSelect: 'none', width: 'fit-content', padding: '21px 25px', borderRadius: '8px', fontSize: '24px', lineHeight: '26.4px', letterSpacing: '-0.96px', fontWeight: 700, color: 'rgb(255, 255, 255)', position: 'relative', background: 'linear-gradient(rgb(68, 68, 68) 0px, rgb(51, 51, 51) 100%) repeat scroll 0% 0% / auto padding-box border-box, rgba(0, 0, 0, 0) linear-gradient(rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 26.56%, rgba(0, 0, 0, 0.1) 51.56%, rgba(0, 0, 0, 0.1) 100%) repeat scroll 0% 0% / auto padding-box border-box', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.15) 0px 6px 4px -2px, rgba(0, 0, 0, 0.25) 0px -3px 1px -1px inset', transform: 'matrix(1, 0, 0, 1, 0, 8)', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}} aria-hidden="true">
                                <div data-cpu-shine="true" style={{boxSizing: 'border-box', overflow: 'hidden', width: '100%', height: '68.3984px', position: 'absolute', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></div>
                                <div data-connectors="true" data-side="left" style={{boxSizing: 'border-box', flexDirection: 'column', left: '-10px', gap: '14px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 1px 0px 1px 1px inset, rgb(221, 221, 221) 1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 1px 0px 1px 1px inset, rgb(221, 221, 221) 1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span></div>
                                <div data-connectors="true" data-side="top" style={{boxSizing: 'border-box', top: '-10px', gap: '18px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span></div><span data-text="true" style={{boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) linear-gradient(92.66deg, rgb(174, 174, 174), rgb(234, 234, 234) 19.79%, rgb(157, 155, 155) 33.33%, rgb(239, 236, 236) 70.31%, rgb(132, 132, 132)) repeat scroll 0% 0% / auto padding-box', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'rgba(0, 0, 0, 0)', textShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 10px, rgba(0, 0, 0, 0.1) 0px -1px 0px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>Powered By</span>
                                <div data-connectors="true" data-side="bottom" style={{boxSizing: 'border-box', bottom: '-10px', gap: '18px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) 0px -1px 1px 1px inset, rgb(221, 221, 221) 0px -1px 1px 0px inset', width: '6px', height: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span></div>
                                <div data-connectors="true" data-side="right" style={{boxSizing: 'border-box', flexDirection: 'column', right: '-10px', gap: '14px', position: 'absolute', display: 'flex', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) -1px 0px 1px 1px inset, rgb(221, 221, 221) -1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span><span data-connector="true" style={{boxSizing: 'border-box', borderRadius: '1px 1px 0px 0px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 1px, rgba(0, 0, 0, 0.1) -1px 0px 1px 1px inset, rgb(221, 221, 221) -1px 0px 1px 0px inset', background: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255), rgb(217, 217, 217) 33.33%, rgb(255, 255, 255) 66.67%, rgb(188, 188, 188)) repeat scroll 0% 0% / auto padding-box border-box', height: '6px', width: '10px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}></span></div>
                            </div>
                        </div>
                        <div data-version="v1" className="flex flex-row flex-wrap sm:flex-nowrap gap-8 items-center justify-center">
                            <Link data-version="v1" className="foundation_card" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 116, 222)', textDecoration: 'none solid rgb(0, 116, 222)', transition: 'background 0.15s ease 0s', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '0px', width: '100%', minHeight: '240px', borderRadius: '12px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgb(250, 250, 250) 0px 0px 0px 6px inset', background: '#fff', position: 'relative', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)', touchAction: 'pan-y'}} data-variant="react" href="https://ipfs.tech/" rel="noopener" target="_blank">
                                <div data-icon="true" style={{boxSizing: 'border-box', height: '40px', display: 'flex', alignItems: 'center', marginBottom: 'auto', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <Image
                                        className="h-14 w-auto"
                                        src="/ipfs-logo-without-text.svg"
                                        alt=""
                                    />
                                </div>
                                <div data-version="v1" style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <span data-version="v1" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', fontSize: '20px', lineHeight: '30px', letterSpacing: '-0.8px', color: 'rgb(0, 0, 0)', margin: '0px', fontWeight: 600, outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}} data-title="true">
                                        <span style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>IPFS</span>
                                        <svg viewBox="0 0 20 20" fill="rgb(150, 150, 150)" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span data-subtitle="true" style={{boxSizing: 'border-box', fontSize: '14px', lineHeight: '21px', letterSpacing: '-0.14px', color: 'rgb(102, 102, 102)', margin: '0px', maxWidth: '440.918px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        The webpage of the draw is stored on IPFS which guarantees that the draw parameters cannot be modified once the draw is published.
                                        {/* A distributed file storage protocol that allows computers all over the globe to store and serve files as part of a giant peer-to-peer network. */}
                                    </span>
                                </div>
                            </Link>
                            <Link data-version="v1" className="foundation_card" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 116, 222)', textDecoration: 'none solid rgb(0, 116, 222)', transition: 'background 0.15s ease 0s', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '0px', width: '100%', minHeight: '240px', borderRadius: '12px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgb(250, 250, 250) 0px 0px 0px 6px inset', background: '#fff', position: 'relative', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)', touchAction: 'pan-y'}} data-variant="turbo" href="https://ethereum.org/" rel="noopener" target="_blank">
                                <div data-icon="true" style={{boxSizing: 'border-box', height: '40px', display: 'flex', alignItems: 'center', marginBottom: 'auto', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                <Image
                                    className="h-14 w-auto"
                                    src="/ethereum-logo.png"
                                    alt=""
                                />
                                </div>
                                <div data-version="v1" style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <span data-version="v1" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', fontSize: '20px', lineHeight: '30px', letterSpacing: '-0.8px', color: 'rgb(0, 0, 0)', margin: '0px', fontWeight: 600, outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}} data-title="true">
                                        <span style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>Ethereum</span>
                                        <svg viewBox="0 0 20 20" fill="rgb(150, 150, 150)" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span data-subtitle="true" style={{boxSizing: 'border-box', fontSize: '14px', lineHeight: '21px', letterSpacing: '-0.14px', color: 'rgb(102, 102, 102)', margin: '0px', maxWidth: '440.918px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        A random number is associated to the draw in our smart contract, which is a verifiable software running on the Ethereum blockchain.
                                    </span>
                                </div>
                            </Link>
                            <Link data-version="v1" className="foundation_card" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 116, 222)', textDecoration: 'none solid rgb(0, 116, 222)', transition: 'background 0.15s ease 0s', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '0px', width: '100%', minHeight: '240px', borderRadius: '12px', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgb(250, 250, 250) 0px 0px 0px 6px inset', background: '#fff', position: 'relative', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)', touchAction: 'pan-y'}} data-variant="swc" href="https://chain.link/vrf" rel="noopener" target="_blank">
                                <div data-icon="true" style={{boxSizing: 'border-box', height: '40px', display: 'flex', alignItems: 'center', marginBottom: 'auto', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                <Image
                                    className="h-14 w-auto"
                                    src="/chainlink-logo.png"
                                    alt=""
                                />
                                </div>
                                <div data-version="v1" style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                    <span data-version="v1" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: '0 1 auto', gap: '4px', fontSize: '20px', lineHeight: '30px', letterSpacing: '-0.8px', color: 'rgb(0, 0, 0)', margin: '0px', fontWeight: 600, outlineColor: 'rgb(37, 99, 235)', boxSizing: 'border-box', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}} data-title="true">
                                        <span style={{boxSizing: 'border-box', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>Chainlink VRF</span>
                                        <svg viewBox="0 0 20 20" fill="rgb(150, 150, 150)" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span data-subtitle="true" style={{boxSizing: 'border-box', fontSize: '14px', lineHeight: '21px', letterSpacing: '-0.14px', color: 'rgb(102, 102, 102)', margin: '0px', maxWidth: '440.918px', outlineColor: 'rgb(37, 99, 235)', borderWidth: '0px', borderStyle: 'solid', borderColor: 'rgb(234, 234, 234)'}}>
                                        The random numbers are provided by Chainlink VRF which is currently the most secure random number generator on Ethereum.
                                        {/* A provably fair and verifiable random number generator that enables smart contracts to access random values without compromising security. */}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>



{/* Pricing section */}
<div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Simple pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                The more you buy, the cheaper it gets
              </p>
            </div>
            {/* <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                The more you buy, the cheaper it gets
            </p> */}
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                    tierIdx === 1 ? 'lg:rounded-none' : '',
                    tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                    'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          (tier.mostPopular || tier.bestValue) ? 'text-indigo-600' : 'text-gray-900',
                          'text-lg font-semibold leading-8'
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                          Most popular
                        </p>
                      ) : null}

                    {tier.bestValue ? (
                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                          Best value
                        </p>
                    ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6">&nbsp;</p>
                    {/* <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p> */}
                    <p className="mt-6 flex items-center justify-between gap-x-1">
                      <span>
                        <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.packagePrice}€</span>
                        <span className="text-sm font-semibold leading-6 text-gray-600">
                            {tierIdx > 0 ? '/draw' : null}
                        </span>
                      </span>

                      {tier.savePercentage ? (
                        <span className="rounded-full bg-orange-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-orange-600">
                          Save {tier.savePercentage}%
                        </span>
                      ) : null}
                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    // disabled={tier.availableSoon}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                      'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    {/* <button type="button" disabled={tier.availableSoon}
                    className={classNames(
                        tier.mostPopular
                          ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                          : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                          tier.availableSoon ? 'cursor-not-allowed' : '',
                        'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      )}> */}
                    {tier.availableSoon ? (
                        'Available soon'
                      ) : (
                        'Launch draw'
                      )}
                      {/* </button> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>



                

                {/* CTA section */}
                <div id="join-community" className="relative -z-10 mx-auto py-32 max-w-7xl px-6 sm:py-40 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-72 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:right-[calc(50%-6rem)] sm:translate-y-0 sm:transform-gpu sm:justify-end"
                        aria-hidden="true"
                    >
                        <div
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
                        style={{
                            clipPath:
                            'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
                        }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Looking for more ?
                            <br />
                            Join our community.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Whether you have a question, want to ask for a partnership, or you are just curious about the project, we invite you to join our Discord community where we will be able to assist you.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="https://discord.gg/3YjqW9MP7H"
                                rel="noopener"
                                target="_blank"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Open Discord
                            </Link>
                        </div>
                    </div>
                    <div
                        className="absolute left-1/2 right-0 top-1/2 -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
                        aria-hidden="true"
                    >
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }} />
                    </div>
                </div>
        

            </div>

            
    )
}
