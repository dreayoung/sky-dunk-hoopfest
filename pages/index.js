// import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import bgi from '../public/upclose.jpg';
import { GiBasketballBall, GiBasketballBasket } from 'react-icons/gi';
import { LuVote } from 'react-icons/lu';

import grfk from '../public/cityball.png';
import bb from '../public/bb.png';
import Pricing from '../components/Pricing';

const links = [
  { name: 'Tickets', href: '#' },
  { name: 'Games & Stats', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];
const stats = [
  { name: 'Teams worldwide', value: '4' },
  { name: 'Attending', value: '99+' },
  { name: 'Players', value: '60' },
  { name: 'Teams worldwide', value: '4' },
  { name: 'Attending', value: '99+' },
  { name: 'Players', value: '60' },
  { name: 'Teams worldwide', value: '4' },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="text-zinc-700 lg:py-40 py-32 bg-zinc-400">
      <button
        className="z-10 absolute flex gap-2 flex-row items-center justify-center top-2 left-4 my-4 lg:text-sm text-xs text-center font-mono tracking-wide bg-transparent w-32 p-3 rounded-full ring-1 ring-zinc-500 text-zinc-500 hover:ring-zinc-200 hover:text-zinc-200 lg:ml-20"
        onClick={() => router.push('/')}
      >
        <LuVote />
        <span>vote now</span>
      </button>
      {/* <div className="absolute font-mono text-xs flex flex-row lg:flex-col items-end space-x-3 lg:space-y-3 lg:right-20 right-4 top-6 lg:top-14 z-10 text-zinc-500">
        <span>Date</span>
        <span className="">Time</span>
        <span className="">Location</span>
      </div> */}
      <div className="relative isolate lg:px-8">
        <div
          className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#eb8cb3] to-[#7c74ee] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <h1 className="hidden lg:block text-center text-[6.2rem] uppercase sd">
          Skydunk hoop fest
        </h1>
        <h1 className="block lg:hidden text-center text-[3.75rem] uppercase sd leading-[3.7rem] pb-3">
          Skydunk <br />
          hoop fest
        </h1>
        <div className="flex flex-row items-center justify-center gap-8 group">
          <button
            onClick={() => router.push('/tix')}
            className="lg:text-xl capitalize font-mono group-hover:text-zinc-900 hover:brightness-125 hover:underline hover:underline-offset-2"
          >
            tickets
          </button>
          <span className="group-hover:animate-spin">
            <GiBasketballBall className="w-6 h-6" />
          </span>
          <button
            onClick={() => router.push('/register')}
            className="lg:text-xl capitalize font-mono group-hover:text-zinc-900 hover:brightness-125  hover:underline hover:underline-offset-2"
          >
            register
          </button>
        </div>

        <div className="flex flex-col pt-20">
          <p className="fj text-right text-zinc-500 pr-2">
            <span className="font-mono italic text-xs">champions roster </span>
            2020-23
          </p>
          <div className="carousel carousel-center w-full p-4 space-x-4 bg-transparent">
            {stats.map((img, x) => {
              return (
                <div className="carousel-item" key={x}>
                  <img
                    src="https://basketball.realgm.com/images/nba/4.2/wiretap/photos/2006/James_LeBron_lal_211023.jpg"
                    className="rounded-box w-72 lg:w-full"
                    alt="roster"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="fj flex lg:flex-row py-14 flex-col items-center lg:items-end lg:gap-6 gap-2 text-left text-zinc-500 text-lg">
          <p>
            <span className="font-mono italic text-sm lg:pl-20">
              Teams &amp; schedules
            </span>{' '}
            2023
          </p>
          <button className="capitalize font-mono text-sm text-center tracking-wider bg-transparent w-64 p-3 rounded-full ring-1 ring-zinc-500 text-zinc-500 hover:ring-zinc-200 hover:text-zinc-200">
            register a team
          </button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:px-20 px-4 place-items-center lg:py-10 py-4 text-[1rem] tracking-wide">
          {stats.map((name, x) => {
            return (
              <p
                key={x}
                className="p-8 font-mono italic capitalize tracking-wide text-zinc-500 hover:text-zinc-900 border-b-zinc-500 border-b-[0.67px] border-opacity-40 whitespace-nowrap"
              >
                {name.name}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
}
