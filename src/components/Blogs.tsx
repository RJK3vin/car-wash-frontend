import { Link } from "react-router-dom";

const blogData = [
  {
    date: "March 28, 2025",
    title: "6 Reasons Why Mobile Detailing is the Future of Car Care",
    to: "/blogone",
  },
  {
    date: "March 26, 2025",
    title: "Why Regular Car Washes are Essential for Maintaining Your Car's Health",
    to: "/blogtwo",
  },
  {
    date: "March 24, 2025",
    title: "Can Interior Car Cleaning Remove Stains and Odors?",
    to: "/blogthree",
  },
  {
    date: "March 24, 2025",
    title: "What Does Auto Detailing Include?",
    to: "/blogfour",
  },
  {
    date: "March 21, 2025",
    title: "7 Professional Detailing Tips to Keep Your Car Looking New",
    to: "/blogfive",
  },
  {
    date: "March 17, 2025",
    title: "Mobile Car Wash: A Game-Changer in Preserving Your Car's Aesthetics and Value",
    to: "/blogsix",
  },
  {
    date: "March 13, 2025",
    title: "Can Interior Car Cleaning Remove Stains and Odors?",
    to: "/blogseven",
  },
  {
    date: "March 11, 2025",
    title: "6 Reasons Why Mobile Detailing is the Future of Car Care",
    to: "/blogeight",
  },
];

const Blogs = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((blog, index) => (
          <Link
            key={index}
            to={blog.to}
            className="bg-black text-white p-6 hover:opacity-90 transition-all duration-200"
          >
            <p className="text-sm text-gray-400 mb-2">{blog.date} | By</p>
            <h3 className="font-semibold text-lg leading-snug">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

