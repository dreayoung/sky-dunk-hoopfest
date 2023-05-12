// import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import flyer from '../public/skydunk.png';

const attendees = [
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
  'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="font-mono lg:px-14 px-8 text-zinc-50 flex flex-col justify-center items-center">
        <section className="flex lg:flex-row flex-col justify-center pb-10 lg:pb-0 mt-8 items-center lg:space-x-8 lg:space-y-0 space-y-8">
          <div className="rounded-lg">
            <Image
              src={flyer}
              className="rounded-lg w-96 lg:w-[20rem] lg:h-[23rem]"
              alt="flyer"
            />
          </div>
          <div className="space-y-4 lg:px-0 px-8">
            <div className="fj lg:text-7xl text-4xl capitalize font-bold">
              Skydunk Hoop Fest
            </div>
            <div className="lg:text-lg text-[1rem]">
              123 Anywhere St., Any City, ST 12345
            </div>
            <div className="lg:text-lg text-[1rem]">
              Monday August 5th, 1:00PM
            </div>
            <p className="text-zinc-200 underline text-xs">Attending</p>
            {/* <hr/> */}
            <div className="avatar-group -space-x-6 pb-2">
              {attendees.map((att, x) => {
                return (
                  <div
                    className="avatar border-1[px] border-zinc-200 bg-white lg:w-12 lg:h-12"
                    key={x}
                  >
                    <div className="lg:w-12 lg:h-12 w-8">
                      <img src={att} alt="avatars" />
                    </div>
                  </div>
                );
              })}
              <div className="avatar placeholder border-[1px] border-transparent">
                <div className="lg:w-12 lg:h-12 w-8 bg-bigy lg:text-sm text-xs text-zinc-900">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => router.push('/tix')}
                className="w-full border-2 border-white rounded-2xl p-3 lg:text-sm text-lg capitalize hover:font-bold hover:bg-white hover:text-red-500/50 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/50"
              >
                get tickets
              </button>
            </div>
          </div>
        </section>
        <hr className="border-zinc-700/50 lg:w-[50%] w-full my-20" />
        <section className="lg:px-14 px-3 mb-20 flex flex-col lg:flex-row justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div>
            <h2 className="text-5xl text-left lg:pb-4 pb-8">Overview</h2>
            <article className="text-sm">
              <p className="pb-3">
                Lorem ipsum dolor sit amet. Vel minus blanditiis aut eligendi
                expedita vel quam consequatur ut dolorum molestiae et
                repudiandae possimus. Nam maiores facere ea minima asperiores et
                dolor corrupti qui voluptas dolorem ut amet enim id numquam
                asperiores. Non sapiente quia a vero vero ut harum voluptatum
                eum quia impedit qui recusandae nihil ut quas voluptatem sit
                reprehenderit consequatur.
              </p>
              <p className="font-bold pb-3">
                Aut voluptas obcaecati et deleniti corrupti ut labore dolore ex
                quibusdam impedit!
              </p>
              <p className="pb-3">
                Ab omnis quia quo eius vitae qui cumque mollitia. Cum labore
                quisquam quo Quis mollitia in nemo ratione qui laudantium
                obcaecati! Qui cumque voluptatem ea placeat Quis id eaque
                molestiae.
              </p>
              <p className="border-[1px] text-xs text-zinc-900 bg-white border-white rounded-3xl px-4 py-3 lg:Py-1">
                For FAQ’s and more information about dwemos aka demos please
                visit www.createdbydwe.tech
              </p>
            </article>
          </div>
          <div>
            <h3 className="fj text-5xl text-left lg:pb-4 pb-8">
              How to buy tickets
            </h3>
            <article className="text-sm">
              <p className="pb-3">
                Lorem ipsum dolor sit amet. Vel minus blanditiis aut eligendi
                expedita vel quam consequatur ut dolorum molestiae et
                repudiandae possimus. Nam maiores facere ea minima asperiores et
                dolor corrupti qui voluptas dolorem ut amet enim id numquam
                asperiores. Non sapiente quia a vero vero ut harum voluptatum
                eum quia impedit qui recusandae nihil ut quas voluptatem sit
                reprehenderit consequatur.
              </p>
              <p className="font-bold pb-3">
                Aut voluptas obcaecati et deleniti corrupti ut labore dolore ex
                quibusdam impedit!
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
