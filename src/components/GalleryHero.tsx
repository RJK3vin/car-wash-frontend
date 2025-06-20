import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props{
    header: string,
    button: string
    url: string
    loc: string
}

export default function GalleryHero({header, button, url, loc} : Props) {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden px-4 bg-cover bg-center" style={{
      backgroundImage: `url(${url})`
    }}>
      <motion.div
        className="z-10 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mt-3 text-4xl font-bold text-white">
          {header}
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            to= {`/${loc}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
          >
            {button}
          </Link>
        </div>
      </motion.div>
    </section>
    </>
  );
}