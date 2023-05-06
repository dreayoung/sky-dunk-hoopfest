// import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import flyer from '../public/skydunk.png';

const attendees = [
  'https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/15001887/pexels-photo-15001887.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/15029139/pexels-photo-15029139.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/14998090/pexels-photo-14998090.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="font-mono px-8 min-h-screen text-zinc-50 flex flex-col justify-center items-center bg-gradient-to-r from-orange-500 to-red-500">
        <h1 className="lg:text-4xl text-2xl capitalize absolute top-8">
          #1 basketball tournament
        </h1>
        {/* <h2 className="font-mono">this is a demo project</h2> */}
        <section className="flex lg:flex-row flex-col justify-center pb-10 lg:pb-0 my-24 items-center lg:space-x-8 lg:space-y-0 space-y-8 backdrop-blur-2xl rounded-xl bg-slate-100 bg-opacity-10 shadow-lg w-full lg:h-[30rem]">
          <div className="">
            <Image
              src={flyer}
              className="rounded-lg w-full  lg:w-[23rem] lg:h-[25rem]"
              alt="flyer"
            />
          </div>
          <div className="space-y-4 lg:px-0 px-8">
            <div className="fj lg:text-6xl text-4xl capitalize font-bold">
              Skydunk Hoop Fest 2023
            </div>
            <div className="lg:text-xl text-[1rem]">
              123 Anywhere St., Any City, ST 12345
            </div>
            <div className="lg:text-xl text-[1rem]">
              Monday August 5th, 1:00PM
            </div>
            <p className="text-zinc-200">Attending</p>
            {/* <hr/> */}
            <div className="avatar-group -space-x-6 pb-2">
              {attendees.map((att, x) => {
                return (
                  <div
                    className="avatar border-1[px] border-transparent"
                    key={x}
                  >
                    <div className="lg:w-12 w-10">
                      <img src={att} alt="avatars" />
                    </div>
                  </div>
                );
              })}
              <div className="avatar placeholder border-1[px] border-transparent">
                <div className="w-12 bg-bigy text-zinc-900">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:space-x-8 space-y-6 lg:space-y-0">
              <button
                onClick={() => router.push('/tix')}
                className="lg:w-52 w-full border-[1px] rounded-2xl p-3 text-lg capitalize"
              >
                get tickets
              </button>
              <button
                disabled
                className="lg:w-52 w-full border-[1px] rounded-2xl p-3 text-lg capitalize"
              >
                register here
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
