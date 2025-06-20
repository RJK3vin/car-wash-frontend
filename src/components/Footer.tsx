import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">FILM SERVICE</h3>
            <ul className="space-y-1 text-gray-300">
              {["Window Tinting", "Paint Protection Film", "Vehicle Wraps"].map((item) => (
                <li key={item} className="relative group">
                  <div className="inline-block">
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                      className="block py-1 hover:text-blue-400 transition"
                    >
                      {item}
                    </a>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                      {item}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-1 text-gray-300">
              {["Home", "About Us", "Review", "Contact"].map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '')}`;
                return (
                  <li key={item} className="relative group">
                    <div className="inline-block">
                      <a
                        href={href}
                        className="block py-1 hover:text-blue-400 transition"
                      >
                        {item}
                      </a>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                        {item}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">EXTERIOR</h3>
          <ul className="space-y-1 text-gray-300">
            {[
              "Paint Correction",
              "Ceramic Coating",
              "Paint Overspray Removal",
              "Wash and Wax",
              "Engine Cleaning",
              "Headlight Restoration",
              "Premium Wash"
            ].map((item) => (
              <li key={item} className="relative group">
                <div className="inline-block">
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="block py-1 hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">INTERIOR</h3>
          <ul className="space-y-1 text-gray-300">
            {[
              "Full Interior Cleaning",
              "Mini-Interior Detail",
              "Smoke Odor Removal",
              "Restorative Interior Cleaning"
            ].map((item) => (
              <li key={item} className="relative group">
                <div className="inline-block">
                  <a
                    href={`/${item.toLowerCase().replace(/[\s-]+/g, '')}`}
                    className="block py-1 hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">SERVICE AREA</h3>
          <ul className="space-y-1 text-gray-300">
            {[
              "Beltsville MD Mobile Detailing",
              "Silver Spring MD Mobile Detailing",
              "Clarksburg mobile detailing",
              "Gaithersburg Mobile Detailing",
              "Rockville MD Mobile Detailing",
              "Olney MD Mobile Detailing",
              "Columbia Mobile Detailing",
              "Potomac MD Mobile Detailing"
            ].map((item) => (
              <li key={item} className="relative group">
                <div className="inline-block">
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="block py-1 hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:WellnessDetailing@gmail.com" className="hover:text-blue-400 transition">
                WellnessDetailing@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:2406300211" className="hover:text-blue-400 transition">
                (240) 630-0211
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Copyright © 2024 Wellness Detailing – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
