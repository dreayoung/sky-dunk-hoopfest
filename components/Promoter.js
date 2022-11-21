import Image from 'next/image';
import React from 'react';
import juju from '../public/juju.png';
import flyer from '../public/flyer.png';

import { ImCross } from 'react-icons/im';
import { GiClothes } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { FaRegFrownOpen } from 'react-icons/fa';

function Promoter({ quantity }) {
  async function getTickets() {
    const response = await fetch(
      'https://apis.ticket-generator.com/client/v1/ticket/data/?eventId=637a3be36d72432799b07da4&width=300',
      {
        headers: {
          Accept: 'application/json',
          'X-Api-Key': '2c68e8708fb32bf8a14211aaaf947dc1acbd7b1e197a6b7e',
        },
        method: 'POST',
      }
    );
    alert(await response.json());
  }

  const imgg =
    'data:image/png;base64,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';

  const numOf = ['ticket1', 'ticket2'];

  return (
    <div className="px-8 py-2">
      <div className="flex space-x-4 items-center mt-4">
        {/* <Image
          className="flex-shrink-0 object-cover w-14 h-14 rounded-full sm:mx-4 ring-2 ring-gray-300"
          src={juju}
          width="auto"
          height="auto"
          alt="juju the promoter"
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl  text-gray-300 capitalize md:text-2xl ">
            JuJu The Promoter
          </h1>

          <p className="mt-2 text-lg text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            host
          </p>
        </div> */}
      </div>
      {numOf.map((tix, x) => {
        return (
          <button
            className="p-4 text-white bg-blue-600 w-80 h-10 mb-20"
            onClick={getTickets}
            key={tix + x}
          >
            {tix}
          </button>
        );
      })}

      {/* <Image src={imgg} width={400} height={400} className='w-20 h-20' /> */}

      {/* <section className="px-6 mt-8 uppercase">
        <div className="flex items-center space-x-2">
          <ImCross color="red" />
          <p className=" capitalize text-gray-300 text-2xl whitespace-nowrap">
            No work no school next day
          </p>
          <ImCross color="red" />
        </div>
        <div className="flex items-center space-x-2 text-2xl mt-4">
          <GiClothes color="silver" />
          <p className="text-gray-300 ">Dress Code: All BLACK</p>
        </div>
        <div className="flex items-center space-x-2 text-2xl mt-4">
          <MdLocationOn color="silver" />
          <p className="text-gray-300 ">Baller Club</p>
        </div>
        <div className="flex items-center space-x-2 text-2xl mt-4">
          <FaRegFrownOpen color="silver" />
          <p className="text-gray-300 ">No refunds. all sales final</p>
        </div>
      </section> */}
    </div>
  );
}

export default Promoter;
