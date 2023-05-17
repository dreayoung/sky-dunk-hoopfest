import Image from 'next/image';
import Link from 'next/link';
// import logo from '../public/NEWdwe3.png';

import { CgMenuGridO } from 'react-icons/cg';

export default function Header() {
  return (
    <div className="navbar bg-transparent top-0 lg:px-20 px-10 py-8 shadow-md text-zinc-50">
      <Link
        href="/"
        className="lg:flex-1 lg:flex-row flex-col m-auto capitalize fj lg:text-4xl text-2xl"
      >
        <div>Sky dunk Hoopfest</div>
      </Link>
      <div className="block lg:hidden">
        <button>
          <CgMenuGridO className="w-8 h-8" />
        </button>
      </div>
      <div className="lg:block hidden flex-none">
        <ul className="fj menu menu-horizontal px-1 text-xl tracking-wide">
          <li>
            <a>Teams &amp; Schedules</a>
          </li>
          <li>
            <a>Tickets</a>
          </li>
          <li>
            <a>Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
