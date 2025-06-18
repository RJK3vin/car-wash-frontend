import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center bg-gradient-to-br from-white to-slate-100 overflow-hidden px-4">
      <motion.div
        className="z-10 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="md:text-x4l font-bold text-orange-500 leading-tight">
          Elevate Your Drive with Wellness Detailing
        </h1>
        <p className="mt-3 text-4xl font-bold text-gray-900">
          Maryland&apos;s Best Mobile Car Detailing Service Comes to You
        </p>
        <p className="mt-4 text-md text-gray-600">
          At Wellness Detailing, we're dedicated to bringing professional-grade detailing right to your doorstep.
          Experience ultimate convenience and quality as we revitalize your car, inside and out.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              to="/about"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600"
            >
              Learn More
            </Link>
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

