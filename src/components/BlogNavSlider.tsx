import { Link } from "react-router-dom";

type BlogNavSliderProps = {
  currentIndex: number;
};

const blogRoutes = [
  { path: "/blogone", title: "6 Reasons Why Mobile Detailing is the Future of Car Care" },
  { path: "/blogtwo", title: "Why Regular Car Washes are Essential for Maintaining Your Car’s Health" },
  { path: "/blogthree", title: "Can Interior Car Cleaning Remove Stains and Odors?" },
  { path: "/blogfour", title: "What Does Auto Detailing Include?" },
  { path: "/blogfive", title: "7 Professional Detailing Tips to Keep Your Car Looking New" },
  { path: "/blogsix", title: "Mobile Car Wash: A Game-Changer in Preserving Your Car’s Aesthetics and Value" },
  { path: "/blogseven", title: "Can Interior Car Cleaning Remove Stains and Odors?" },
  { path: "/blogeight", title: "6 Reasons Why Mobile Detailing is the Future of Car Care" },
];

const BlogNavSlider = ({ currentIndex }: BlogNavSliderProps) => {
  const prev = currentIndex > 0 ? blogRoutes[currentIndex - 1] : null;
  const next = currentIndex < blogRoutes.length - 1 ? blogRoutes[currentIndex + 1] : null;

  return (
    <div className="mt-6 border-t border-gray-200 pt-4 mb-4 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center text-base font-medium text-gray-800">
      {prev ? (
        <Link to={prev.path} className="hover:text-blue-600 transition-colors duration-200">
          ← Previous: {prev.title}
        </Link>
      ) : <div />}

      {next ? (
        <Link to={next.path} className="hover:text-blue-600 transition-colors duration-200 text-right sm:ml-auto">
          Next: {next.title} →
        </Link>
      ) : <div />}
    </div>
  );
};

export default BlogNavSlider;

