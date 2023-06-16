import React from 'react';

export default function Roster() {
  return (
    <main className="font-mono text-zinc-50 py-20 px-10 flex flex-col justify-center items-center  gap-10">
      <div className="">
        <h3 className="fj lg:text-6xl text-4xl font-bold">Teams</h3>
        <p className="py-3">Next Game: 2PM vs Ducks</p>

        <div className="grid grid-cols-4 gap-2">
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxFSw7rfByx6PD0yf65REkhz5fJwgFvGQUQ&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxFSw7rfByx6PD0yf65REkhz5fJwgFvGQUQ&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxFSw7rfByx6PD0yf65REkhz5fJwgFvGQUQ&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxFSw7rfByx6PD0yf65REkhz5fJwgFvGQUQ&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="fj lg:text-6xl text-4xl font-bold">Roster</h3>
        <p className="py-3">Starting 5: </p>

        <div className="grid grid-cols-4 gap-2">
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-60 rounded-lg"
              src="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
