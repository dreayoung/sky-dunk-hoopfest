import React, { useState } from 'react';

import { ImCross } from 'react-icons/im';
import { GiClothes } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { FaRegFrownOpen } from 'react-icons/fa';
import { AiOutlinePlayCircle } from 'react-icons/ai';

import steppers from '../public/audio/steppers.mp3';
import useSound from 'use-sound';

function Promoter() {
  const [play] = useSound(steppers);
  const [disable, setDisable] = useState(false);

  return (
    <div className="py-2">
      <div className="px-8 flex justify-center items-center">
        {' '}
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
            } rounded-full w-20 text-orange-700 text-6xl`}
          />
        </button>
      </div>
      <section className="mt-8 uppercase">
        <div className="flex items-center space-x-2">
          <ImCross color="red" size={50} />
          <p className="  text-gray-300 text-xl whitespace-nowrap">
            No work no school next day
          </p>
          <ImCross color="red" size={50} />
        </div>
        <div className="flex items-center space-x-2 text-lg mt-4">
          <GiClothes color="silver" />
          <p className="text-gray-300 ">Dress Code: All BLACK</p>
        </div>
        <div className="flex items-center space-x-2 text-lg mt-4">
          <MdLocationOn color="silver" />
          <p className="text-gray-300 ">Baller Club</p>
        </div>
        <div className="flex items-center space-x-2 text-lg mt-4">
          <FaRegFrownOpen color="silver" />
          <p className="text-gray-300 ">No refunds. all sales final</p>
        </div>
      </section>
    </div>
  );
}

export default Promoter;
