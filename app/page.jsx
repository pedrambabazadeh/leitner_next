import Image from "next/image";
import FlashcardList from "./components/FlashCardList";
import { Header, HowWorks } from "@/sections/home";
import Features from "@/sections/home/features/Features";
export default function Home() {
  return (
<div className="text-center">
      {/*<FlashcardList/>*/}
      <Header></Header>
      <HowWorks/>
      <Features/>
    </div>
  );
}
