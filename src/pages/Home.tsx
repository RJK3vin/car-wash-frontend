import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import QuoteForm from "../components/QuoteForm";
import { useRef } from "react";

export default function Home() {
  const featuredRef = useRef<HTMLDivElement | null>(null);
  return (
    <main className="space-y-20">
      <Hero scrollToRef={featuredRef}/>
      <div ref={featuredRef}>
        <FeaturedServices />
      </div>
      <QuoteForm />
    </main>
  );
}


