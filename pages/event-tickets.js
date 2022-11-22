import { useState } from 'react';

import bottle from '../public/champagne.gif';
import title from '../public/title.png';
import date from '../public/date.png';
import Image from 'next/image';
import Link from 'next/link';
import flyer from '../public/flyer.png';
// import pack from '../public/package.png';

import steppers from '../public/audio/steppers.mp3';
import useSound from 'use-sound';

import { AiOutlinePlayCircle } from 'react-icons/ai';

function Eventtickets() {
  const [play] = useSound(steppers);
  const [disable, setDisable] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <div className="overflow-hidden pb-20">
      <Image
        priority
        src={bottle}
        width={600}
        height={600}
        alt="hello"
        className="h-96"
      />
      <Image
        src={title}
        width={800}
        height={800}
        alt="hello"
        className="absolute top-96 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      />
      <Image
        src={date}
        width={400}
        height={400}
        alt="hello"
        className="absolute top-20 right-4 w-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      />
      <div className="py-8 flex justify-center items-center">
        <button
          onClick={() => {
            play();
            setDisable(true);
          }}
          disabled={disable}
        >
          <AiOutlinePlayCircle
            className={`${
              disable ? 'animate-spin' : 'animate-none'
            } text-gray-300 text-5xl`}
          />
        </button>
      </div>
      <section className="mt-10 mx-8">
        {loading ? (
          <div className="text-center text-white my-2">Loading....</div>
        ) : null}
        <Link
          href="/event-tickets/flashsale"
          onClick={() => setLoading(true)}
          className=""
        >
          <div className="mt-8 transition-colors duration-300 transform border cursor-pointer rounded-xl group border-gray-900 shadow-2xl hover:border-white p-4">
            <div className="flex items-center space-x-4">
              <Image
                src={flyer}
                width="auto"
                height="auto"
                alt="flyer"
                className="w-[8rem] h-[8rem] rounded-md"
              />
              <div className="">
                <p className="text-2xl font-bold fj text-gray-200">
                  Flash Sale{' '}
                </p>
                <span className="text-sm">$30 tax included.</span>
                <br />
                <div className="mt-8 border-transparent rounded-md bg-gray-300 text-black p-4 text-center">
                  Purchase
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Eventtickets;
