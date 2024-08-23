import Image from "next/image";
import FormWithText from "../components/FormWithText/FormWithText";
import DevelopmentTestList from "@/components/DevelopmentTextList/DevelopmentTestList";
import { RankSection } from "@/components/RankSection/RankSection";
import Faqs from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <div>
      <FormWithText />
      <DevelopmentTestList/>
      <RankSection/>
      <Faqs/>
    </div>
  );
}
