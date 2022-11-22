import Link from 'next/link';
import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import Confirmed from './Confirmed';
import Payment from './Payment';
import Promoter from './Promoter';

function FlashSale() {
  const [generatepay, setGeneratepay] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('1');

  const [approved, setApproved] = useState(null);

  return (
    <section className="bg-transparent lg:py-12 lg:flex lg:justify-center">
      <div className="bg-transparent lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:rounded-lg lg:h-full bg-[url('/flyer.png')]"></div>
        </div>

        <div className={`px-6 max-w-xl py-4 lg:max-w-5xl lg:w-1/2`}>
          <p className="mt-4 text-gray-400">
            All ticket holders will recieve the address to the venue at the
            night of the event via email
          </p>
          <Promoter />
          <Link
            href="https://www.instagram.com/unavailable_juju/"
            target="_blank"
          >
            <p> For bottle packages contact: </p>
            <div className="flex items-center space-x-2">
              <FaInstagram />
              <span>unavailable_juju</span>
            </div>
          </Link>
          <hr className="mt-6" />
          <div
            className={`${generatepay ? 'hidden' : 'block '} mt-4 text-white`}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              Flash Sale{' '}
              <span className="text-orange-700 font-bold text-4xl pl-2">
                $30
              </span>
            </h2>
            <span className="text-xs">tax included.</span>
            <form
              onSubmit={(e) => {
                setGeneratepay(true);
                e.preventDefault();
              }}
            >
              <label className="label mt-4">
                <span className="label-text"># of tickets</span>
              </label>
              <label className="">
                <input
                  required
                  id="number"
                  type="number"
                  max="4"
                  min="1"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="input input-bordered bg-transparent"
                />
              </label>
              <label className="label mt-2">
                <span className="label-text">Your Name</span>
              </label>
              <label className="">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full bg-transparent"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label className="label mt-2">
                <span className="label-text">Your Email</span>
              </label>
              <label className="">
                <input
                  required
                  type="text"
                  placeholder="info@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input input-bordered w-full bg-transparent"
                />
              </label>
              <button
                type="submit"
                className="w-full text-lg mt-8 px-4 py-2 font-semibold text-gray-100 transition-colors duration-300 transform bg-orange-700 rounded-md hover:bg-gray-700"
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
        {approved ? (
          <Confirmed
            quantity={quantity}
            name={name}
            email={email}
            approved={approved}
          />
        ) : null}
      </div>
    </section>
  );
}

export default FlashSale;
