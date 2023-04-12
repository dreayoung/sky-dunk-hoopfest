import { useState, useEffect } from 'react';
import Pricing from '../components/Pricing';
import TixHero from '../components/TixHero';

export default function Eventtickets() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/tickets')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main className="py-24 flex-col justify-center items-center bg-blend-overlay bg-zinc-800">
        <Pricing admTix={data} />
        <hr className="w-[85%] m-auto border-zinc-700" />
        <TixHero />
      </main>
    </>
  );
}
