/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Head from 'next/head';

export default function Team() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-[#FDF6EE] bg-[url('/bg-2.png')]" >
    <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
      </div>
    <div className="flex-col justify-start items-start gap-[17px] inline-flex">
    <div className="text-center text-neutral-700 text-[150px] font-medium font-poppins">ABOUT US</div>
    <div className="text-red-500 text-3xl font-normal font-poppins">Some of us are Talent Protocol Scholars, all of us are builders<br/>Project made on ETH Global Istanbul by</div>
    <div className="w-[1141px] h-[259px] relative">
        <div className="w-[200px] h-[259px] left-[236px] top-0 absolute">
            <div className="left-[2px] top-[214px] absolute text-center text-red-500 text-3xl font-normal font-poppins">Camellia Yang</div>
            <img className="w-[200px] h-[200px] left-0 top-0 absolute" src="https://via.placeholder.com/200x200" />
        </div>
        <div className="w-[200px] h-[258px] left-[471px] top-[1px] absolute">
            <div className="left-[5px] top-[213px] absolute text-center text-red-500 text-3xl font-normal font-poppins">Luz Alba Posse</div>
            <img className="w-[200px] h-[200px] left-0 top-0 absolute" src="https://via.placeholder.com/200x200" />
        </div>
        <div className="w-[200px] h-[259px] left-[706px] top-0 absolute">
            <div className="left-[18px] top-[214px] absolute text-center text-red-500 text-3xl font-normal font-poppins">Santi Nihany</div>
            <img className="w-[200px] h-[200px] left-0 top-0 absolute" src="https://via.placeholder.com/200x200" />
        </div>
        <div className="w-[200px] h-[258px] left-[941px] top-[1px] absolute">
            <div className="left-[25px] top-[213px] absolute text-center text-red-500 text-3xl font-normal font-poppins">Ali Can Sag</div>
            <img className="w-[200px] h-[200px] left-0 top-0 absolute" src="https://via.placeholder.com/200x200" />
        </div>
        <div className="w-[201px] h-[259px] left-0 top-0 absolute">
            <div className="left-[9px] top-[214px] absolute text-center text-red-500 text-3xl font-normal font-poppins">Simon Puebla</div>
            <div className="w-[200px] h-[200px] left-[1px] top-0 absolute bg-red-500" />
            <img className="w-[201px] h-[200px] left-0 top-0 absolute" src="https://via.placeholder.com/201x200" />
        </div>
    </div>
</div>

    </main>
  );
}