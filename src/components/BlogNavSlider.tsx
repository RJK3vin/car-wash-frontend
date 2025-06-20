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
    <div className="mt-12 border-t pt-6 flex justify-between items-center text-sm md:text-base">
      {prev ? (
        <Link to={prev.path} className="text-blue-500 hover:underline">
          ← Previous: {prev.title}
        </Link>
      ) : <div />}

      {next ? (
        <Link to={next.path} className="text-blue-500 hover:underline text-right ml-auto">
          Next: {next.title} →
        </Link>
      ) : <div />}
    </div>
  );
};

export default BlogNavSlider;

