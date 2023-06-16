import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import VoteModal from '../components/VoteModal';

import { MdOutlineHowToVote } from 'react-icons/md';
import { AiFillFire, AiOutlineLoading } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/teams')
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setLoading(false);
      });
  }, []);

  console.log(teams);

  const schedule = [
    {
      team: [teams[0]?.name, teams[1]?.name],
      time: '1:30PM',
      court: 'Court 1',
    },
    {
      team: [teams[2]?.name, teams[3]?.name],
      time: '2:30PM',
      court: 'Court 2',
    },
    {
      team: [teams[4]?.name, teams[5]?.name],
      time: '3:30PM',
      court: 'Court 3',
    },
    {
      team: [teams[6]?.name, teams[7]?.name],
      time: '4:00PM',
      court: 'Court 4',
    },
  ];

  return (
    <main className="font-mono lg:pt-14 lg:px-24 px-4 text-zinc-50 flex flex-col justify-center lg:text-left text-center">
      <div>
        <h1 className="text-6xl">TEAMS &amp; SCHEDULES</h1>
        <p className="font-mono text-[0.85rem] py-1">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {!loading ? (
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin text-xl">
            <AiOutlineLoading />
          </div>
        </div>
      ) : (
        <div className="grid my-8 border rounded-lg shadow-sm border-zinc-800 md:mb-12 md:grid-cols-2">
          {schedule &&
            schedule?.map((sch, x) => {
              return (
                <figure
                  key={x}
                  className="flex flex-col justify-center text-sm py-12 px-8 bg-transparent border-b rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r border-zinc-800"
                >
                  <div className="flex justify-around items-center text-center">
                    <div className="flex flex-col space-y-3">
                      <div className="">{sch.team[0]}</div>
                      <span className="font-bold text-zinc-500">vs</span>
                      <div className="">{sch.team[1]}</div>
                    </div>
                    <hr className="w-20 rotate-90 border-zinc-700" />
                    <div>
                      {sch.court} <br /> {sch.time}
                    </div>
                  </div>
                </figure>
              );
            })}
        </div>
      )}

      <section className="flex flex-col justify-center my-8">
        <div className="bg-transparent border-[1px] border-zinc-800 rounded-lg p-8 md:p-12 mb-8">
          <p className="bg-pink-700 text-pink-400 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
            <AiFillFire className="w-3 h-3 mr-1" />
            hot
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">
            Pick your best team
          </h1>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-6">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-pink-700 text-pink-400 inline-flex justify-center items-center py-2.5 px-5 font-medium text-center rounded-lg hover:bg-transparent hover:border-[1px] hover:border-pink-500 focus:ring-4 focus:ring-pink-800"
          >
            Vote Here
            <MdOutlineHowToVote className="ml-2 -mr-1 w-4 h-4" />
          </button>
          <VoteModal
            open={open}
            setOpen={setOpen}
            cancelButtonRef={cancelButtonRef}
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 my-10">
        {teams.map((team, x) => {
          return (
            <div key={x} className="py-5">
              {/* <div className="w-96 rounded-lg">
                <Image
                  src={team.logo}
                  width={500}
                  height={450}
                  alt="team photo"
                  className="object-cover rounded-lg"
                />
              </div> */}
              <div className="py-3">
                <div className="fj text-4xl pb-2 uppercase">{team.name}</div>
                <div className="flex space-x-2 items-center">
                  <BsPersonCircle className="text-zinc-400" />
                  <p className="font-thin">
                    <span className="font-bold capitalize text-zinc-400">
                      Coach
                    </span>{' '}
                    {team.coach}
                  </p>
                </div>
              </div>
              <button className="mt-4 w-full border-[1px] border-zinc-500 rounded-2xl p-3 text-sm capitalize hover:font-bold hover:bg-white hover:text-red-500/50 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/50">
                Roster
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}
