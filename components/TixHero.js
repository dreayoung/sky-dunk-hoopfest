import Image from 'next/image';
import { GiBasketballJersey } from 'react-icons/gi';

import ball from '../public/basketball.jpg';

export default function TixHero() {
  return (
    <section className="py-8">
      <GiBasketballJersey className="w-14 h-14 m-auto" />
      <div className="px-10 py-10 lg:mx-20">
        <h1 className="text-center lg:text-left text-2xl font-semibold text-zinc-50 lg:text-3xl uppercase">
          Sky dunk hoopfest
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <Image
            className="object-cover object-bottom w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={ball}
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-zinc-50 uppercase">What to Expect</p>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-zinc-200"
            >
              A day full of fun &amp; excitement
            </a>

            <p className="mt-3 text-sm text-zinc-200 md:text-sm">
              The highly anticipated event of the year is finally here! NEW YORK
              GET READY! We have some of the best players both men and women
              playing from around the world.{' '}
              <span className="text-[#996AA0]">Purchase a ticket below</span>{' '}
              and enjoy the day with us! Food will be available, merch, games, a
              live performance &amp; more!
            </p>

            <p className="inline-block mt-8 text-zinc-50 text-xl">
              Special Guests
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-14 h-14 rounded-full"
                src="https://pbs.twimg.com/profile_images/1043325528525045760/KKhIupPQ_400x400.jpg"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-lg text-zinc-200">Maya Moore</h1>
                <p className="text-sm text-zinc-500 ">
                  professional basketball player
                </p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-14 h-14 rounded-full"
                src="https://www.billboard.com/wp-content/uploads/2022/11/cover-future-billboard-2022-bb15-david-needleman-01-1240.jpg?w=683"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-lg text-zinc-200">Future</h1>
                <p className="text-sm text-zinc-500 ">Grammy winning Rapper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
