import Button from '@/components/button';
export default function ZKverification() {
  return (
  <>
   <div className="w-[1611px] h-[499px] flex-col justify-end items-center gap-5 inline-flex">
    <div className="text-center text-neutral-700 text-[150px] font-medium font-poppins">TIME TO VERIFY</div>
    <div className="w-[700px] text-center"><span className="text-red-500 text-3xl font-normal font-poppins">You are about to start a journey that will allow you to </span><span className="text-red-500 text-3xl font-bold font-poppins">preserve your privacy</span><span className="text-red-500 text-3xl font-normal font-poppins"> while mantaning the </span><span className="text-red-500 text-3xl font-bold font-poppins">benefits</span><span className="text-red-500 text-3xl font-normal font-poppins"> of publishing in the most relevant newspapers in the world </span></div>
    <div className="w-[700px] text-center text-red-500 text-3xl font-normal font-poppins">What’s your role in this story?</div>
    <div className="justify-start items-start gap-[26px] inline-flex">
    <Button text={"I am a journalist"} redirectUrl={"/zk-verification/journalist"}></Button>
    <Button text={"I am a media"} redirectUrl={"/zk-verification/media"}></Button>
    </div>
</div>
  </>
   
  );
}