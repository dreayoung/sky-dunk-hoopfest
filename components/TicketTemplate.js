import Image from 'next/image';
import React from 'react';

import juju from '../public/juju.png';

function TicketTemplate({ info, indx, name, quantity }) {
  const { base64EncodedUrl, ticketId } = info;

  return (
    <div className=" mx-2 bg-white text-black transition-colors duration-300 transform border cursor-pointer rounded-xl group border-gray-900 shadow-2xl hover:border-orange-700 p-4">
      <div className="flex space-x-4">
        <Image
          src={base64EncodedUrl}
          width={400}
          height={400}
          alt="flyer"
          className="w-[7rem] h-[7rem] rounded-md"
        />
        <div className="">
          <p className="text-lg font-bold fj text-black whitespace-nowrap">
            Return of The All Black Affair
          </p>
          <p className="text-xs mb-2 whitespace-nowrap">{`Baller club edition | Ticket #${indx}/${quantity}`}</p>
          <p className="fj text-sm">Date: December 26, 2023</p>
          <p className="fj text-sm">Time: 9:00 PM</p>
          <p className="fj text-sm">Dress Code: ALL BLACK</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-center px-2 py-1">
        <p className="pt-2 text-xs">
          <span className="fj text-md">Ticket Id</span> <br />
          {ticketId}
        </p>
        <div className="mt-2">
          <Image
            src={juju}
            width="auto"
            height="auto"
            alt="flyer"
            className="w-6 h-6 rounded-full ring-2 ring-orange-900 ml-10"
          />
          <span className="text-xs">JuJu The Promoter</span>
        </div>
        <p className="pt-2 text-xs capitalize">
          <span className="fj text-md">Ticket Holder</span> <br />
          {name}
        </p>
      </div>
    </div>
  );
}

export default TicketTemplate;
