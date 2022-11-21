import bottle from '../public/champagne.gif';
import title from '../public/title.png';
import date from '../public/date.png';
import Image from 'next/image';
import Link from 'next/link';


import Promoter from '../components/Promoter';
import flyer from '../public/flyer.png';

function Eventtickets() {
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
      <section className="mt-20 mx-8">
        <Promoter />
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
              <p className="text-2xl font-bold fj text-gray-300">Flash Sale </p>
              <span className="text-md">$30.00 tax included.</span>
              <br />
              <Link href="/event-tickets/flashsale">
                <div className="mt-1 border-transparent rounded-md bg-orange-900 p-2 text-center">
                  purchase
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eventtickets;
