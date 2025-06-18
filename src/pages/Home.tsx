import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Seo
        title="Home | Wellness Detailing - Mobile Car Detailing in Maryland"
        description="Professional mobile car detailing services across Maryland. Paint protection, interior, exterior & more—book a mobile appointment today!"
      />

      <section className="relative h-[85vh] bg-black text-white flex items-center justify-center">
        <div className="absolute inset-0 z-0">
        </div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-semibold text-orange-500">
            Elevate Your Drive with Wellness Detailing
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Maryland's Best Mobile Car Detailing Service
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-200">
            At Wellness Detailing, we're dedicated to bringing professional-grade detailing right to your doorstep. Experience ultimate convenience and quality as we revitalize your car, inside and out.
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

      <section className="bg-white py-10 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Recent Detailing Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            View More Work
          </Link>
        </div>
      </section>
    </>
  );
}
