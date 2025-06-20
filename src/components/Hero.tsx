import { motion } from 'framer-motion';
import type { RefObject } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  scrollToRef: RefObject<HTMLDivElement | null>;
}

export default function Hero({ scrollToRef }: HeroProps) {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-4 bg-cover bg-center" style={{
      backgroundImage: `url('https://placehold.co/1920x1080')`
    }}>
      <motion.div
        className="z-10 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="md:text-4xl font-bold text-blue-600 leading-tight">
          Elevate Your Drive with Wellness Detailing
        </h1>
        <p className="mt-3 text-4xl font-bold text-gray-900">
          Maryland's Best Mobile Car Detailing Service Comes to You
        </p>
        <p className="mt-4 text-md text-gray-600">
          At Wellness Detailing, we're dedicated to bringing professional-grade detailing right to your doorstep.
          Experience ultimate convenience and quality as we revitalize your car, inside and out.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button
            onClick={handleScroll}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
          >
            Learn More
          </button>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
          >
            Get A Free Quote
          </Link>
        </div>
      </motion.div>
    </section>
  );
}



