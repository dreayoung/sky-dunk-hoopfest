import Link from 'next/link';
import { GiBasketballBasket } from 'react-icons/gi';

function Footer() {
  return (
    <div className="text-xs flex justify-evenly items-center py-8 px-10 bg-zinc-700 w-full bg-opacity-50 text-white">
      <p className="">Demo Project</p>
      <GiBasketballBasket className="w-4 h-4" />
      {/* <hr className="rotate-90 bg-white text-red-500 w-4" /> */}
      <Link href="https://www.instagram.com/askdwe/" target="_blank">
        <p className="text-zinc-50 fj uppercase">createdbydwe</p>
      </Link>
    </div>
  );
}

export default Footer;
