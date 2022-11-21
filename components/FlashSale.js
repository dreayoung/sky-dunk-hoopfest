import React, { useState, useEffect } from 'react';
import Confirmed from './Confirmed';
// import { BsCheck2Circle } from 'react-icons/bs';
import Payment from './Payment';
// import flyer from '../public/flyer.png';
// import Image from 'next/image';

function FlashSale() {
  const [generatepay, setGeneratepay] = useState(false);
  //   const [hiddencomp, sethiddenComp] = useState('block');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');

  const [approved, setApproved] = useState(null);

  return (
    <section className="bg-transparent lg:py-12 lg:flex lg:justify-center">
      <div className="bg-transparent lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:rounded-lg lg:h-full bg-[url('/flyer.png')]"></div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            {approved ? <Confirmed quantity={quantity} /> : null}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Flash Sale <span className="text-orange-400 font-bold">$30</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Dress Code: All BLACK
            <br />
            No refunds. all sales final
            <br />
          </p>
          <div className={`${approved ? 'hidden' : 'block mt-4'}`}>
            <form
              onSubmit={(e) => {
                setGeneratepay(true);
                e.preventDefault();
              }}
            >
              <label className="label mt-4">
                <span className="label-text">Num of tickets</span>
              </label>
              <label className="input-group">
                <input
                  required
                  id="number"
                  type="number"
                  max="5"
                  min="1"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="input input-bordered"
                />
              </label>
              <label className="label mt-2">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label className="label mt-2">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  required
                  type="text"
                  placeholder="info@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input input-bordered"
                />
              </label>
              <button
                type="submit"
                className="w-20 text-xl mt-8 px-5 py-2 font-semibold text-gray-100 transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Confirm
              </button>
            </form>
          </div>
          {generatepay ? (
            <Payment
              email={email}
              name={name}
              quantity={quantity}
              approved={approved}
              setApproved={setApproved}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default FlashSale;
