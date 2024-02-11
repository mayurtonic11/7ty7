import Image from "next/image";
import ShowcaseContent from "@/components/Showcase/showcase";
import ShowcaseTab from "@/components/Showcase/showcasetab";
import "@/styles/showcase/showcase.css";
export default function Showcase() {
  return (
    <main>
      <ShowcaseContent />
      <ShowcaseTab />
    </main>
  );
}
