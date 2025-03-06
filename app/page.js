import Image from "next/image";
import FlashcardList from "./components/FlashCardList";

export default function Home() {
  return (
<div className="text-center">
      <h1 className="text-3xl font-bold text-blue-600">Leitner Box</h1>
      <p className="text-lg mt-4">Start memorizing words using spaced repetition!</p>
      <FlashcardList/>
    </div>
  );
}
