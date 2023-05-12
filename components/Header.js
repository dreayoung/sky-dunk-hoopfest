import Image from "next/image";
import logo from '../public/NEWdwe3.png';

export default function Header() {
  return (
    <div className="navbar bg-transparent top-0 px-20 pt-10 shadow-md">
    <div className="flex-1">
      <Image src={logo} className="w-24" />
    </div>
    <div className="flex-none">
      <ul className="fj menu menu-horizontal px-1 text-2xl tracking-wide">
        <li>
          <a>How To</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  </div>
  );
}
