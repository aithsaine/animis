import Nav from "@/components/nav";
import Popular from "@/components/Popular";
import Caroussel from "@/components/ui/carroussel";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Caroussel />
      <h1 className="mx-6 text-pretty text-white text-2xl">Most Popular Animes</h1>
      <Popular />
    </>
  );
}
