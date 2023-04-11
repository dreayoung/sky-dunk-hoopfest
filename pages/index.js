import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import backg from '../public/backg.jpg';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="flex justify-center items-center min-h-screen p-24 bg-[url('https://images.pexels.com/photos/4261764/pexels-photo-4261764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover bg-blend-overlay bg-zinc-700">
        <div className="text-center text-zinc-50">
          <p className="">
            The BIGGEST tournament for the BEST players in the WORLD
          </p>
          <h1 className="hidden lg:block lg:text-[5.8rem] whitespace-nowrap uppercase py-8">
            Sky Dunk Hoopfest
          </h1>
          <h1 className="block lg:hidden text-6xl py-8 uppercase">
            Sky Dunk <br /> Hoopfest
          </h1>
          <div
            className="text-[0.83rem] my-8 p-3 bg-zinc-50 text-zinc-500 rounded-2xl w-40 m-auto cursor-pointer"
            onClick={() => router.push('/tix')}
          >
            <p>Get Tickets</p>
          </div>
          {/* <div
            className="text-[0.83rem] my-8 p-3 bg-zinc-50 text-zinc-500 rounded-2xl w-40 m-auto cursor-pointer"
            onClick={() => router.push('/tix')}
          >
            <p>Teams &amp; Players</p>
          </div> */}
          <h2></h2>
        </div>
      </main>
    </>
  );
}
