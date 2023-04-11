import { useState } from 'react';

import front from '../public/black3.jpg';
import Image from 'next/image';
import Link from 'next/link';

import { GiBasketballJersey } from 'react-icons/gi';
import Pricing from '../components/Pricing';
import TixHero from '../components/TixHero';

function Eventtickets() {
  // const [play] = useSound(steppers);
  const [disable, setDisable] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    // #996AA0
    <>
      <main className="py-24 flex-col justify-center items-center bg-blend-overlay bg-zinc-800">
        <Pricing />
        <hr className="w-[85%] m-auto border-zinc-700" />
        <TixHero />
      </main>
    </>
  );
}

export default Eventtickets;
