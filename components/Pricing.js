import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

export default function Pricing({ admTix }) {
  console.log('inside', admTix);
  return (
    <div className="">
      <div className="container px-6 py-8 mx-auto">
        <p className="text-xl text-center text-gray-500 dark:text-gray-300">
          Choose your ticket
        </p>

        <h1 className="mt-4 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Admission
        </h1>

        <div className="mt-6 space-y-8 xl:mt-12">
          {admTix.map((tix, x) => {
            return (
              <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl border-zinc-700" key={tix._id}>
                <div className="flex items-center">
                  <AiFillCheckCircle className="w-5 h-5 text-gray-600 sm:h-9 sm:w-9" />

                  <div className="flex flex-col items-center mx-5 space-y-1">
                    <h2 className="text-lg sm:text-2xl text-gray-200">
                      {tix.name}
                    </h2>

                    <div className="px-2 lg:text-xs text-[0.63rem] text-purple-500 rounded-full sm:px-4 sm:py-1 bg-gray-700 ">
                      Sales end on March 31th, 2024
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-zinc-300 sm:text-4xl">
                  ${tix.total_price}{' '}
                  <span className="text-xs lg:block hidden">/ +tax incl.</span>
                </h2>
              </div>
            );
          })}
          {/* <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-zinc-700 cursor-pointer rounded-xl">
            <div className="flex items-center">
              <AiFillCloseCircle className="w-5 h-5 text-gray-600 sm:h-9 sm:w-9" />

              <div className="flex flex-col items-center mx-5 space-y-1">
                <h2 className="text-lg sm:text-2xl text-gray-200">
                  Regular Admission
                </h2>
                <div className="px-2 lg:text-xs text-[0.63rem] text-purple-500 rounded-full sm:px-4 sm:py-1 bg-gray-700 ">
                  Sales end on March 31th, 2024
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-300 sm:text-4xl">
              $99 <span className="text-xs lg:block hidden">/ +tax incl.</span>
            </h2>
          </div> */}

          <div className="flex justify-center">
            <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-80">
              Confirm &amp; Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
