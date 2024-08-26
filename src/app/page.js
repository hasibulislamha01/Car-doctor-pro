import Banner from "@/Components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mx-auto">
      <Banner></Banner>
      <button className="btn btn-block bg-rose-400 text-black">btn</button>
    </main>
  );
}
