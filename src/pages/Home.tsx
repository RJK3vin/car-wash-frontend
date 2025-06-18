import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import QuoteForm from "../components/QuoteForm";
import { useRef } from "react";

export default function Home() {
  const featuredRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Hero scrollToRef={featuredRef}/>
      <div ref={featuredRef}>
        <FeaturedServices />
      </div>
      <QuoteForm />
    </>
  );
}
