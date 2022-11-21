import React from 'react';
import { BsCheck2Circle } from 'react';

function Confirmed({ quantity }) {
  console.log('quant', quantity);
  return (
    <div className="text-center text-green-400 text-2xl">
      <BsCheck2Circle className="flex justify-center items-center" />
      <span className="text-lg">
        Approved! Do not refresh the page. Download all your tickets below!
      </span>
    </div>
  );
}

export default Confirmed;
