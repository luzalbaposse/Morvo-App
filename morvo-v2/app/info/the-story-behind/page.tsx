import Image from 'next/image';
import Head from 'next/head';

export default function Story() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-[#FDF6EE] bg-[url('/bg-2.png')]" >
    <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
      </div>
    <div className="flex-col justify-start items-start gap-[17px] inline-flex">
    <div className="text-center text-neutral-700 text-[150px] font-medium font-poppins">THE STORY</div>
     <div className="w-[1141px] h-[259px] relative">
     <div className="text-red-500 text-3xl font-normal font-poppins">1,668 journalists killed in past 20 years, average of 80 per year. (And this are the registered statistics,  could be more)

Behind the figures, there are the faces, personalities, talent and commitment of those who have paid with their lives for their information gathering, their search for the truth and their passion for journalism.

According to the recent index, fake content online is hurting press freedom in 118 countries, with political figures often spreading misinformation. AI is making things worse, generating realistic fake images and spreading manipulative content, undermining reliable journalism globally.

In the face of challenges, Morvo emerges as a beacon of hope—an on-chain identity abstraction tool empowering journalists against press suppression. As we mourn truth-speakers, Morvo stands as a digital fortress, shielding journalists from AI-generated threats and government propaganda. 

With blockchain technology, Morvo ensures journalistic integrity—a practical solution to risks., a sign of resilience and a digital guardian empowering those uncovering hidden realities.</div>
   
    </div>
</div>

    </main>
  );
}