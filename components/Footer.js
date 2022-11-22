import Link from 'next/link';

function Footer() {
  return (
    <div className="text-xs flex justify-evenly items-center py-14 px-10 bg-transparent text-white">
      <p className="">Secured by Square</p>
      <hr className="rotate-90 bg-white text-red-500 w-4" />
      <Link href="https://www.instagram.com/askdwe/" target="_blank">
        <p className="text-red-500 fj uppercase">createdbydwe</p>
      </Link>
    </div>
  );
}

export default Footer;
