import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>CodesWear.com</title>
        <meta name="description" content="CodesWear.com - Wear the Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      hey This is Wahi 
      <div className="mx-4">Hey This is Me !</div>
          
    </>
  );
}
