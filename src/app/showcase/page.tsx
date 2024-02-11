import Image from "next/image";
import ShowcaseContent from "@/components/showcase/showcase";
import ShowcaseTab from "@/components/showcase/showcasetab";
import "@/styles/showcase/showcase.css";
export default function Showcase() {
  return (
    <main>
      <ShowcaseContent />
      <ShowcaseTab />
    </main>
  );
}
