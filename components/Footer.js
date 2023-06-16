import Image from 'next/image';
import Link from 'next/link';
import { GiBasketballBasket } from 'react-icons/gi';
import logo from '../public/NEWdwe3.PNG';

function Footer() {
  return (
    <footer className="fj bg-zinc-800 rounded-lg shadow m-4 text-zinc-50">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src={logo}
              className="lg:w-full w-20 h-8 mr-3"
              alt="Createdbydwe Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Teams &amp; Schedules
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Tickets
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Register
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-zinc-700 sm:mx-auto lg:my-8" />
        <span className="block text-lg sm:text-center">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            CreatedByDwe™
          </a>
          . All Rights Reserved. This is a Demo Project
        </span>
      </div>
    </footer>
  );
}

export default Footer;
