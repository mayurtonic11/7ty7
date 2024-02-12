import Image from "next/image";
import ClienteleHeading from "@/components/Clientele/clienteleheading";import ClienteleContent from "@/components/Clientele/clientelecontent";
import "@/styles/clientele/clientele.css";
export default function Clientele() {
  return (
    <main>
      <ClienteleHeading />
      <ClienteleContent />
    </main>
  );
}
