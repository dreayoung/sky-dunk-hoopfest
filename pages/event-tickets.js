import React, { useEffect, useState } from 'react';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-11-21`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

function eventtickets() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const { days, hours, minutes, seconds } = timeLeft;
  // console.log(timeLeft)

  return (
    <div className="bg-[url('/flyer.png')] min-h-screen bg-center bg-contain bg-no-repeat">
        <div className="absolute top-0 bg-black bg-opacity-40 w-full h-screen" />
      <div className="border-1 glassf rounded-2xl py-4 text-center absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <h1>Tickets Available in</h1>
        <div className="grid grid-flow-col gap-3 text-center auto-cols-max justify-center pt-2">
          <div className="flex flex-col p-2 bg-transparent rounded-box text-white">
            <span className="countdown font-mono text-4xl">
              <span style={{ '--value': days }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-transparent rounded-box text-white">
            <span className="countdown font-mono text-4xl">
              <span style={{ '--value': hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-transparent rounded-box text-white">
            <span className="countdown font-mono text-4xl">
              <span style={{ '--value': minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-transparent rounded-box text-white">
            <span className="countdown font-mono text-4xl">
              <span style={{ '--value': seconds }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventtickets;
