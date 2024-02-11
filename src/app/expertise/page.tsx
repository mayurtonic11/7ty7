import Image from "next/image";
import ImpeccableServicesHeading from "@/components/Expertise/impeccableservicesheading";
import ImpeccableServices from "@/components/Expertise/impeccableservices";
import ImpeccableServicesCta from "@/components/Expertise/impeccableservicescta";
import "@/styles/expertise/expertise.css";
export default function Expertise() {
  return (
    <main>
      <ImpeccableServicesHeading />
      <ImpeccableServices />
      <ImpeccableServicesCta />
    </main>
  );
}
