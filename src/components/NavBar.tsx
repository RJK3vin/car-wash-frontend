import { ChevronDown, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  const isDropdownActive = (items: string[]) => {
    return items.some(item => isActive(`/${slugify(item)}`));
  };

  const isFaqActive = () => {
    const faqItems = ["FAQs"];
    return faqItems.some(item => isActive(`/${slugify(item)}`));
  };

  const isAboutUsActive = () => {
    const aboutItems = ["Our Team", "Reviews", "Detailing Methodology", "Appointment Deposit Policy"];
    return aboutItems.some(item => isActive(`/${slugify(item)}`)) || isFaqActive();
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex items-center gap-6">
          <img
            src="/placeholder-logo.png"
            alt="Wellness Detailing"
            className="w-10 h-10 rounded-full object-cover bg-gray-200 shadow-inner"
          />

          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-tight">
            <a href="/" className={isActive('/') ? "text-blue-600 font-semibold" : ""}>Home</a>
            <Dropdown title="Film Service" items={["Window Tinting", "Paint Protection Film", "Vehicle Wraps"]} isActive={isDropdownActive(["Window Tinting", "Paint Protection Film", "Vehicle Wraps"])} currentPath={currentPath} />
            <Dropdown title="Exterior" items={["Paint Correction", "Ceramic Coating", "Paint Overspray Removal", "Wash and Wax", "Engine Cleaning", "Headlight Restoration", "Premium Wash"]} isActive={isDropdownActive(["Paint Correction", "Ceramic Coating", "Paint Overspray Removal", "Wash and Wax", "Engine Cleaning", "Headlight Restoration", "Premium Wash"])} currentPath={currentPath} />
            <Dropdown title="Interior" items={["Full Interior Cleaning", "Mini-Interior Detail", "Smoke Odor Removal", "Restorative Interior Cleaning"]} isActive={isDropdownActive(["Full Interior Cleaning", "Mini-Interior Detail", "Smoke Odor Removal", "Restorative Interior Cleaning"])} currentPath={currentPath} />
            <Dropdown title="Gallery" items={["Engine Cleaning Gallery", "Wash and Wax Gallery", "Full Interior Cleaning Gallery", "Paint Correction Gallery"]} isActive={isDropdownActive(["Engine Cleaning Gallery", "Wash and Wax Gallery", "Full Interior Cleaning Gallery", "Paint Correction Gallery"])} currentPath={currentPath} />
            <Dropdown title="Service Area" items={["Wellness Detailing Shop", "Poolesville MD Mobile Detailing", "Columbia Mobile Detailing", "College Park Mobile Detailing", "Damascus MD Mobile Detailing", "Laurel MD Mobile Detailing", "Beltsville MD Mobile Detailing", "Silver Spring MD Mobile Detailing", "Bethesda MD Mobile Detailing", "Potomac MD Mobile Detailing", "Clarksburg Mobile Detailing", "Gaithersburg Mobile Detailing", "Rockville MD Mobile Detailing", "Olney MD Mobile Detailing"]} isActive={isDropdownActive(["Wellness Detailing Shop", "Poolesville MD Mobile Detailing", "Columbia Mobile Detailing", "College Park Mobile Detailing", "Damascus MD Mobile Detailing", "Laurel MD Mobile Detailing", "Beltsville MD Mobile Detailing", "Silver Spring MD Mobile Detailing", "Bethesda MD Mobile Detailing", "Potomac MD Mobile Detailing", "Clarksburg Mobile Detailing", "Gaithersburg Mobile Detailing", "Rockville MD Mobile Detailing", "Olney MD Mobile Detailing"])} currentPath={currentPath} />

            <div className="relative group">

              <div className={`flex items-center gap-1 cursor-pointer py-2 ${isAboutUsActive() ? 'text-blue-600 font-semibold' : ''}`}>
                About Us <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="p-2 space-y-1">
                  <div className="relative group/faq">
                  </div>
                  {[
                    "FAQs",
                    "Our Team",
                    "Reviews",
                    "Detailing Methodology",
                    "Appointment Deposit Policy"
                  ].map((item) => (
                    <a
                      key={item}
                      href={`/${slugify(item)}`}
                      className={`block px-3 py-2 rounded hover:bg-blue-50 transition text-xs ${isActive(`/${slugify(item)}`) ? 'text-blue-700 font-semibold bg-blue-100' : ''}`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm font-semibold tracking-tight">
          <div className="hidden lg:flex items-center gap-1 text-blue-600">
            <a href="tel:2406300211" className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(240) 630-0211</span>
            </a>
          </div>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const Dropdown = ({ title, items, isActive, currentPath }: { title: string; items: string[]; isActive?: boolean; currentPath?: string }) => (
  <div className="relative group">
    <div className={`flex items-center gap-1 cursor-pointer py-2 ${isActive ? 'text-blue-600 font-semibold' : ''}`}>
      {title} <ChevronDown className="w-4 h-4" />
    </div>

    <div className="absolute left-0 top-full w-56 h-2 bg-transparent"></div>
    <div className="absolute left-0 top-full mt-2 w-56 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      <ul className="py-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href={`/${slugify(item)}`}
              className={`block px-4 py-2 hover:bg-blue-50 transition text-xs whitespace-nowrap ${currentPath === `/${slugify(item)}` ? 'text-blue-700 font-semibold bg-blue-100' : ''}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');