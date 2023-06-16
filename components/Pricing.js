import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillCreditCard,
  AiOutlineArrowLeft,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

import { BsFillPersonFill } from 'react-icons/bs';

import bb from '../public/bb.png';

import flyer from '../public/flyer2.png';

const attendees = [
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
];

export default function Pricing() {
  const router = useRouter();

  let [quantity, setQuantity] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [generatepay, setGeneratepay] = useState(false);

  return (
    <>
      <button
        className="z-10 absolute flex gap-2 flex-row items-center justify-center top-2 left-4 my-4 lg:text-sm text-xs text-center font-mono tracking-wide bg-transparent w-32 p-3 rounded-full ring-1 ring-zinc-500 text-zinc-500 hover:ring-zinc-200 hover:text-zinc-200 lg:ml-20"
        onClick={() => router.push('/')}
      >
        <AiOutlineArrowLeft />
        <span>back</span>
      </button>
      <div className="lg:px-8 text-zinc-900 py-28">
        {/* <div className="sd fj text-5xl text-center uppercase">
          Tickets
        </div> */}
        <div className="hover:border-[#7c74ee] rounded-2xl p-3 shadow-xl mt-8 w-3/4 m-auto">
          <div className="my-6 px-8 flex lg:flex-row flex-col justify-center items-center text-center gap-4">
            <h3 className="text-5xl">$20</h3>
            <div className="mb-4 fj flex flex-col justify-center gap-2">
              <p className="lg:text-2xl text-lg">General Admission</p>
              <span className="font-mono lg:text-sm text-xs lg:px-8 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity <= -1 || quantity >= 4}
              >
                <AiOutlinePlusCircle className="w-10 h-10 text-[#7c74ee]" />
              </button>
              <p className="text-[#7c74ee]">{quantity}</p>
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 0 || quantity >= 5}
              >
                <AiOutlineMinusCircle className="w-10 h-10 text-[#7c74ee]" />
              </button>
            </div>
          </div>
          {quantity <= 0 || quantity >= 4 ? null : (
            <div className="flex flex-col py-8 justify-center items-center px-4">
              <form
                onSubmit={(e) => {
                  setGeneratepay(true);
                  e.preventDefault();
                }}
                className=" w-full"
              >
                <div className="flex flex-col font-mono gap-2 pb-8">
                  <label
                    for="helper-text"
                    className="block mb-2 text-sm font-medium text-zinc-500"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    // aria-describedby="helper-text-explanation"
                    className="bg-transparent border border-zinc-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <label
                    for="helper-text"
                    className="block my-2 text-sm font-medium text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="text"
                    id="email"
                    placeholder="info@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    // aria-describedby="helper-text-explanation"
                    className="bg-transparent border border-zinc-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[#7c74ee] hover:bg-[#7c74ee]/80 focus:ring-4 focus:outline-none focus:ring-[#7c74ee]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
                >
                  Check out with Card
                  <AiFillCreditCard
                    className="w-5 h-5 ml-2 -mr-1"
                    aria-hidden="true"
                  />
                </button>
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-500"
                >
                  We’ll never share your details. Read our{' '}
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          )}
        </div>

        <div className="hover:border-[#7c74ee] rounded-2xl p-3 shadow-xl mt-8 w-3/4 m-auto">
          <div className="my-6 px-8 flex lg:flex-row flex-col justify-center items-center text-center gap-4">
            <h3 className="text-5xl">$50</h3>
            <div className="mb-4 fj flex flex-col justify-center gap-2">
              <p className="lg:text-2xl text-lg">VIP Package</p>
              <span className="font-mono lg:text-sm text-xs lg:px-8 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            <div className="flex flex-row items-center">
              <p className="ring-1 ring-red-800 text-red-800 p-3 rounded-lg w-40 font-mono">
                Sold out
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
