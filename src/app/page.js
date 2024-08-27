import Banner from "@/Components/Banner";
import AboutUs from "@/Components/HomeComponents/AboutUs";
import Services from "@/Components/HomeComponents/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mx-auto">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services/>
    </main>
  );
}
