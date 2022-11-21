import bottle from '../public/champagne.gif';
import title from '../public/title.png';
import date from '../public/date.png';
import Image from 'next/image';
import Link from 'next/link';

// import steppers from '../public/audio/steppers.mp3';
// import useSound from 'use-sound';
import Promoter from '../components/Promoter';
import flyer from '../public/flyer.png';

function Eventtickets() {
  // const [play, { stop }] = useSound(steppers);

  return (
    <div className="overflow-hidden min-h-screen">
      {/* <div className="absolute top-0 bg-black bg-opacity-60 w-full h-screen" /> */}
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
      <section className="mt-20 mx-4">
        {/* <Promoter /> */}
        <div className="transition-colors duration-300 transform border cursor-pointer rounded-xl group border-gray-900 shadow-2xl hover:border-white p-4">
          <div className="flex items-center space-x-4">
            <Image
              src={flyer}
              width="auto"
              height="auto"
              alt="flyer"
              className="w-[8rem] h-[8rem] rounded-md"
            />
            <div className="">
              <p className="text-xl font-bold fj text-gray-300">Flash Sale </p>
              <span className="text-lg">$30.00 incl. $1.99 Fee</span>
              <br />
              <p className="text-md whitespace-nowrap">
                All sales final. No refunds
              </p>
              <div className="mt-1 border-transparent rounded-md bg-orange-900 p-2 text-center">
                purchase
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 transition-colors duration-300 transform border cursor-pointer rounded-xl group border-gray-900 shadow-2xl hover:border-white p-4">
          <div className="flex items-center space-x-4">
            <Image
              src={flyer}
              width="auto"
              height="auto"
              alt="flyer"
              className="w-[8rem] h-[8rem] rounded-md"
            />
            <div className="">
              <p className="text-xl font-bold fj text-gray-300">
                General Adm.{' '}
              </p>
              <span className="text-lg">$40.00 incl. $1.99 Fee</span>
              <br />
              <p className="text-md whitespace-nowrap">
                All sales final. No refunds
              </p>
              <Link href="/event-tickets/flashsale">
                <div className="mt-1 border-transparent rounded-md bg-orange-900 p-2 text-center">
                  purchase
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <button onClick={() => play()} onMouseLeave={() => stop()}>Boop!</button> */}
        {/* <h2 className="text-center">This how we gonna start off wrapping the year up</h2> */}
      </section>
      <Promoter />
      {/* <div className="btm-nav bg-[#030303] shadow-2xl">
        <audio controls>
          <source src={steppers} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div> */}
    </div>
  );
}

export default Eventtickets;
