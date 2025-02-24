import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortner in the market
          </p>
          <p className="px-44 text-center">
            We are the most straightforward URL shortner in the world. Most of the url shortners would track you or ask you to give your persona details for login. We understand your needs and hence we have created this URL shortner which is completely free and doesn't track you.
          </p>
          <div className='flex gap-4'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg font-bold rounded-lg p-3 py-1 text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg font-bold rounded-lg p-3 py-1 text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
