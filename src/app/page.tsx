import Image from "next/image";
import Banner from "@/components/home/banner";
import OurStory from "@/components/home/ourstory";
import OurWord from "@/components/home/ourword";
import Expertise from "@/components/home/expertise";
import Star from "@/components/home/star";
import Game from "@/components/home/game";
import Eventology from "@/components/home/eventology";
import Ourcrew from "@/components/home/ourcrew";
import "@/styles/home/home.css";
export default function Home() {
  return (
    <main>
      <Banner />
      <OurStory />
      <OurWord />
      <Expertise />
      <Star />
      <Game />
      <Eventology />
      <Ourcrew />
    </main>
  );
}
