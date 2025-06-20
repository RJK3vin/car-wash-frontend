import { Phone, Clock, MapPin, Handshake, Car, PhoneCall, Users, Sparkles, Smile } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

const services = [
  {
    title: "Vinyl Car Wraps",
    href: "/vehiclewraps",
    description: [
      "Transform your vehicle’s appearance with our premium vinyl car wraps. Whether you desire a sleek matte finish or a vibrant color change, our expert team will bring your vision to life. With precise application and high-quality materials, our wraps enhance aesthetics while providing protection against scratches and abrasions.",
      "Discover the ultimate customization for your vehicle with our vinyl car wraps. From bold graphics to subtle accents, our expert team can create a look that’s uniquely yours. Using only the highest quality materials, we ensure long-lasting durability and a flawless finish that will turn heads wherever you go.",
    ],
    src: "placeholder"
  },
  {
    title: "Paint Correction",
    href: "/paintcorrection",
    description: [
      "Restore your car’s paintwork to perfection with our meticulous paint correction process. Using advanced techniques and professional-grade products, we eliminate imperfections such as swirl marks, water spots, and oxidation. This reveals a flawless finish that renews your car’s original brilliance.",
      "Experience the true potential of your car’s paint with our paint correction services. Our skilled technicians carefully restore the shine and clarity of your vehicle’s exterior, leaving it looking better than ever. Say goodbye to dull, damaged paint and hello to a showroom-quality finish that will make your car stand out from the crowd.",
    ],
    src: "placeholder",
  },
  {
    title: "Ceramic Coatings",
    href: "/ceramiccoatings",
    description: [
      "Experience superior protection and shine with our ceramic coatings. Unlike traditional waxes, they form a permanent bond with your vehicle’s paint, creating a hydrophobic barrier that repels water, dirt, and contaminants. Enjoy long-lasting results that maintain your car’s showroom shine.",
      "Give your car the ultimate protection with our ceramic coating treatments. Our advanced formulas create a durable shield that guards against the elements, keeping your paint looking like new for years to come. Say goodbye to frequent waxing and polishing – with ceramic coatings, your car will always be ready to impress.",
    ],
    src: "placeholder",
  },
  {
    title: "Paint Protection Film (PPF)",
    href: "/paintprotectionfilm",
    description: [
      "Preserve your car's paint in pristine condition with our industry-leading paint protection film. Made from transparent, self-healing polyurethane, PPF shields against rock chips, insect splatter, and road hazards without altering your vehicle's appearance.",
      "Ensure lasting protection for your investment with our paint protection film. Our high-quality materials provide an invisible barrier against damage, keeping your paint looking flawless for miles to come. Say goodbye to worries about scratches and chips – with PPF, your car will always look its best.",
    ],
    src: "placeholder"
  },
  {
    title: "Window Tinting",
    href: "/windowtinting",
    description: [
      "Enhance both style and functionality with our professional window tinting services. Our high-quality films add sophistication to your car's appearance, while providing UV protection, heat reduction, and increased privacy.",
      "Upgrade your driving experience with our window tinting solutions. Not only do our films give your car a sleek, custom look, but they also provide valuable benefits such as UV protection and glare reduction. Say hello to a cooler, more comfortable ride, all while protecting your privacy and preserving your interior.",
    ],
    src: "placeholder",
  },
];

const locations = [
  {
    title: "Olney, MD",
    loc: "olneymdmobiledetailing"
  },
  {
    title: "Rockville, MD",
    loc: "rockvillemdmobiledetailing"
  },
  {
    title: "Gaithersburg, MD",
    loc: "gaithersburgmobiledetailing"
  },
  {
    title: "Clarksburg, MD",
    loc: "clarksburgmobiledetailing"
  },
  {
    title: "Potomac, MD",
    loc: "potomacmdmobiledetailing"
  },
  {
    title: "Bethesda, MD",
    loc: "bethesdamdmobiledetailing"
  },
  {
    title: "Silver Spring, MD",
    loc: "silverspringmdmobiledetailing"
  },
  {
    title: "Beltsville, MD",
    loc: "beltsvillemdmobiledetailing"
  },
  {
    title: "Laurel, MD",
    loc: "laurelmdmobiledetailing"
  },
  {
    title: "Damascus, MD",
    loc: "damascusmdmobiledetailing"
  },
  {
    title: "College Park, MD",
    loc: "collegeparkmobiledetailing"
  },
  {
    title: "Columbia, MD",
    loc: "columbiamobiledetailing"
  },
  {
    title: "Poolesville, MD",
    loc: "poolesvillemdmobiledetailing"
  }
];

const FeaturedServices = () => {
  return (
    <section className="bg-white">
      <div className="bg-black text-white px-6 py-8 max-w-4xl mx-auto rounded-md">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="text-blue-600 w-8 h-8" />
            <div>
              <p className="text-sm font-semibold text-blue-600">Give Us A Call</p>
              <p className="text-2xl font-bold text-white">(240) 630-0211</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-sm font-semibold text-blue-600">Working Hours</p>
              <p className="text-sm text-white">Mon - Sat: 7 AM - 7 PM</p>
              <p className="text-sm text-white">Sun - Closed</p>
            </div>
            <Clock className="text-blue-600 w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center max-w-4xl mx-auto mt-8 px-6">
        <img
          src="https://placehold.co/1000x1000"
          alt="Placeholder 1"
          className="w-64 h-auto object-cover"
        />
        <img
          src="https://placehold.co/1000x1000"
          alt="Placeholder 2"
          className="w-64 h-auto object-cover"
        />
        <img
          src="https://placehold.co/1000x1000"
          alt="Placeholder 3"
          className="w-64 h-auto object-cover"
        />
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
              src={service.src}
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
                className="text-blue-600 hover:underline font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
        ))}

        <div className="text-center">
          <a
            href="/contact"
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
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>


        <div className="border-t pt-12">
          <h3 className="text-3xl font-bold text-center mb-10">
            Servicing The Maryland's Area - At Your Home, Apartment or Office Location
          </h3>
          <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto gap-8">
            <div className="md:w-1/2 flex flex-col justify-center">
              <img
                src="https://via.placeholder.com/400x600?text=Service+Area+Map"
                alt="Service area placeholder"
                className="rounded-md shadow-md object-cover h-full w-auto"
                style={{ minHeight: '500px' }} 
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <p className="text-center md:text-left max-w-3xl mx-auto md:mx-0 text-gray-600 mb-6">
                  At Wellness Detailing, we proudly serve a wide area across Maryland, bringing our professional mobile car detailing services directly to your doorstep. From bustling urban centers to scenic suburban neighborhoods, we cover a diverse range of locations to accommodate our valued customers.
                </p>
                <p className="text-center md:text-left max-w-3xl mx-auto md:mx-0 text-gray-600 mb-6">
                  Our service area includes Bethesda, Rockville, Silver Spring, Gaithersburg, and surrounding areas like Olney, Potomac, and Laurel. Whether you're located in the heart of the city or nestled in a quiet residential area, our dedicated team is committed to providing you with the highest level of confidence and quality.
                </p>
                <p className="text-center md:text-left max-w-3xl mx-auto md:mx-0 text-gray-600 mb-8">
                  No matter where you are in Maryland, you can trust Wellness Detailing to deliver exceptional service with a smile. Contact us today to schedule your appointment and experience the convenience of mobile car detailing at its finest.
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 max-w-5xl mx-auto md:mx-0">
                {locations.map(({ title, loc }) => (
                  <li key={title} className="flex items-center gap-2 text-gray-700">
                    <MapPin className="text-blue-600 w-4 h-4" />
                    <a href={loc} className="hover:underline">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <TestimonialSlider />
        <div className="text-center">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Get A Free Quote
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Handshake,
              title: "Exceptional Convenience",
              text: "From booking to service completion, we streamline every step to ensure a hassle-free experience for our customers.",
            },
            {
              icon: Car,
              title: "Personalized Attention",
              text: "Our team is dedicated to understanding your unique needs and preferences, delivering tailored solutions with care and precision.",
            },
            {
              icon: PhoneCall,
              title: "Transparent Communication",
              text: "We believe in keeping our customers informed every step of the way, providing clear and honest communication for peace of mind.",
            },
            {
              icon: Users,
              title: "Professional Expertise",
              text:
                "With years of experience and expertise in the industry, our skilled technicians strive to exceed expectations with every detail.",
            },
            {
              icon: Sparkles,
              title: "Attention to Detail",
              text: "We take pride in our meticulous approach, ensuring that every aspect of our service is carried out with the utmost precision and care.",
            },
            {
              icon: Smile,
              title: "Commitment to Satisfaction",
              text:
                "Customer satisfaction is our top priority, and we go above and beyond to ensure that every customer leaves with a smile on their face.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-blue-400 mx-auto mb-4 flex items-center justify-center">
                <Icon className="text-blue-600 w-8 h-8" />
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



