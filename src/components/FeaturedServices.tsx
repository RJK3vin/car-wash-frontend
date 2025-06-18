import { Phone, Clock, MapPin, Handshake, Car, PhoneCall, Users, Sparkles, Smile } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

const services = [
  {
    title: "Vinyl Car Wraps",
    href: "/vehiclewraps",
    description: [
      "Transform your vehicle's appearance with our premium vinyl car wraps. Whether you desire a sleek matte finish or a vibrant color change, our expert team will bring your vision to life.",
      "Discover the ultimate customization for your vehicle with our vinyl car wraps. From bold graphics to subtle accents, our expert team can create a look that's uniquely yours.",
    ],
    imageAlt: "A bright blue car hood showcases vinyl wrap and samples.",
  },
  {
    title: "Paint Correction",
    href: "/paintcorrection",
    description: [
      "Restore your car's paintwork to perfection with our meticulous paint correction process.",
      "Say goodbye to dull, damaged paint and hello to a showroom-quality finish that will make your car stand out from the crowd.",
    ],
    imageAlt: "Polishing a black car with a blue pad.",
  },
  {
    title: "Ceramic Coatings",
    href: "/ceramiccoatings",
    description: [
      "Experience superior protection and shine with our ceramic coatings.",
      "Our advanced formulas create a durable shield that guards against the elements.",
    ],
    imageAlt: "A black Ford SUV on a driveway.",
  },
  {
    title: "Paint Protection Film (PPF)",
    href: "/paintprotectionfilm",
    description: [
      "Preserve your car's paint with our industry-leading paint protection film.",
      "Say goodbye to scratches and chips – with PPF, your car will always look its best.",
    ],
    imageAlt: "Applying clear PPF with a pink squeegee.",
  },
  {
    title: "Window Tinting",
    href: "/windowtinting",
    description: [
      "Enhance both style and functionality with our professional window tinting services.",
      "Say hello to a cooler, more comfortable ride while protecting your privacy.",
    ],
    imageAlt: "Installing window tint on a car.",
  },
];

const locations = [
  "Olney, MD",
  "Rockville, MD",
  "Gaithersburg, MD",
  "Clarksburg, MD",
  "Potomac, MD",
  "Bethesda, MD",
  "Silver Spring, MD",
  "Beltsville, MD",
  "Laurel, MD",
  "Damascus, MD",
  "Collage Park, MD",
  "Columbia, MD",
  "Poolesville, MD",
];

const FeaturedServices = () => {
  return (
    <section className="bg-white">
      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center px-6 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Phone className="text-orange-500 w-8 h-8" />
          <div>
            <p className="text-sm font-semibold text-orange-500">
              Give Us A Call
            </p>
            <p className="text-2xl font-bold text-white">(240) 630-0211</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-semibold text-orange-500">
              Working Hours
            </p>
            <p className="text-sm text-white">Mon - Sat: 7 AM - 7 PM</p>
            <p className="text-sm text-white">Sun - Closed</p>
          </div>
          <Clock className="text-orange-500 w-8 h-8" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Our Featured Detailing and Film Services
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 space-y-16">

        {services.map((service) => (
          <div
            key={service.title}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt={service.imageAlt}
              className="rounded shadow w-full h-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              {service.description.map((para, idx) => (
                <p key={idx} className="mb-4 text-gray-700">
                  {para}
                </p>
              ))}
              <a
                href={service.href}
                className="text-orange-500 hover:underline font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
        ))}

        <div className="text-center">
          <a
            href="/quote"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Get A Free Quote
          </a>
        </div>

        <div className="py-16 border-t">
          <h3 className="text-3xl font-bold text-center mb-10">Our Other Detailing Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wash and Wax",
                desc: "Revitalize your car with our thorough wash and wax service, ensuring a pristine finish that shields against the elements.",
                href: "/washandwax",
              },
              {
                title: "Premium Wash",
                desc: "Experience a top-tier clean with our premium wash service, leaving your vehicle gleaming with meticulous attention to detail.",
                href: "/premiumwash",
              },
              {
                title: "Full Interior Cleaning",
                desc: "Restore your car's interior to like-new condition with our comprehensive cleaning service, covering every nook and cranny for a fresh feel.",
                href: "/fullinteriorcleaning",
              },
              {
                title: "Mini-Interior Detail",
                desc: "Maintain a tidy interior with our quick yet effective mini-detail service, focusing on key areas to keep your car looking its best.",
                href: "/miniinteriordetail",
              },
              {
                title: "Smoke Odor Removal",
                desc: "Eliminate stubborn smoke odors with our specialized treatment, leaving your car smelling clean and fresh.",
                href: "/smokeodorremoval",
              },
              {
                title: "Overspray Removal",
                desc: "Remove unwanted contaminants from your car's exterior with our gentle yet effective overspray removal service, preserving its original finish.",
                href: "/oversprayremoval",
              },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-white shadow-md rounded p-6 text-center">
                <h4 className="text-lg font-bold mb-3">{title}</h4>
                <p className="text-sm text-gray-700 mb-4">{desc}</p>
                <a
                  href={href}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2 rounded"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>


        <div className="border-t pt-12">
          <h3 className="text-xl font-bold mb-4 text-center">
            Servicing The Maryland's Area - At Your Home, Apartment or Office
            Location
          </h3>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-8">
            At Wellness Detailing, we proudly serve a wide area across Maryland, bringing our professional mobile car detailing services directly to your doorstep.
          </p>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-8">
            Our service area includes Bethesda, Rockville, Silver Spring, Gaithersburg, and surrounding areas like Olney, Potomac, and Laurel.
          </p>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-8">
            No matter where you are in Maryland, you can trust Wellness Detailing to deliver exceptional service with a smile.
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <li key={loc} className="flex items-center gap-2 text-gray-700">
                <MapPin className="text-orange-500 w-4 h-4" />
                <a
                  href={`/${loc.toLowerCase().replace(/\s+/g, '').replace(/,/g, '')}`}
                  className="hover:underline"
                >
                  {loc}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <TestimonialSlider />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Handshake,
              title: "Exceptional Convenience",
              text: "We streamline every step to ensure a hassle-free experience.",
            },
            {
              icon: Car,
              title: "Personalized Attention",
              text: "We deliver tailored solutions with care and precision.",
            },
            {
              icon: PhoneCall,
              title: "Transparent Communication",
              text: "Clear and honest communication every step of the way.",
            },
            {
              icon: Users,
              title: "Professional Expertise",
              text:
                "Experienced technicians dedicated to exceeding expectations.",
            },
            {
              icon: Sparkles,
              title: "Attention to Detail",
              text: "Every aspect of service done with care and precision.",
            },
            {
              icon: Smile,
              title: "Commitment to Satisfaction",
              text:
                "We go above and beyond to ensure customers leave smiling.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-orange-400 mx-auto mb-4 flex items-center justify-center">
                <Icon className="text-orange-500 w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

