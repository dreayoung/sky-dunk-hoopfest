import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Pricing({ admTix, userName }) {
  const router = useRouter();
  const [selectedTix, setSelectedTix] = useState(null);
  const [selectedSlug, setSlug] = useState(null);

  const [qty, setQty] = useState(1);

  return (
    <div className="">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="mb-4 text-2xl tracking-wide font-semibold text-center text-gray-800 uppercase lg:text-3xl dark:text-white">
          Admission
        </h1>
        <p className="font-mono text-3xl capitalize text-center text-gray-500 dark:text-gray-300">
          Hey <span className="uppercase">{userName}, </span>Choose your ticket
        </p>

        <div className="mt-6 space-y-8 xl:mt-12">
          {admTix?.map((tix, x) => {
            const checked = selectedTix == tix;
            return (
              <div
                className={`flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl ${
                  checked ? 'border-zinc-200' : 'border-zinc-700'
                }`}
                key={tix._id + Math.random()}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name={`option-${tix.name}`}
                    className="radio"
                    value={tix.name}
                    onChange={() => {
                      setSelectedTix(tix);
                      setSlug(tix._id);
                    }}
                    checked={checked}
                  />

                  <div className="flex flex-col mx-5 space-y-1">
                    <h2 className="lg:text-4xl text-xl sm:text-xl text-gray-200">
                      {tix.name}
                    </h2>

                    <div className="lg:text-xs text-[0.63rem] text-red-500 rounded-full sm:py-1">
                      tickets available
                    </div>
                  </div>
                </div>

                <h2 className="lg:text-2xl text-[1rem] font-thin font-mono text-zinc-300">
                  ${tix.total_price}
                </h2>
              </div>
            );
          })}

          <div className="flex justify-center">
            <button
              onClick={() => router.push(`/tix/${selectedSlug}`)}
              disabled={selectedSlug == null}
              className="px-8 py-2 tracking-wide text-white capitalize hover:ring-2 hover:ring-white rounded-lg"
            >
              Confirm &amp; Pay
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="w-[85%] m-auto border-zinc-700" /> */}
    </div>
  );
}
