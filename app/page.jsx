import Image from "next/image";
import FlashcardList from "./components/FlashCardList";
import { Header, HowWorks, Features, ReviewCards } from "@/sections/home";
export default function Home() {
  return (
<div className="text-center">
      {/*<FlashcardList/>*/}
      <Header></Header>
      <HowWorks/>
      <Features/>
      <ReviewCards/>
    </div>
  );
}
