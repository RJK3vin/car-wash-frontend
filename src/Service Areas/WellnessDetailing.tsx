import TestimonialSlider from "../components/TestimonialSlider";
import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"
import { FaHandshake, FaCar, FaPhoneAlt, FaHardHat, FaCarAlt, FaSmile } from "react-icons/fa";

export default function WellnessDetailing() {


    return (
        <>
            <ServiceHero header="Wellness Detailing MD: Rejuvenate Your Car & Yourself in Maryland" subheader="Wellness Detailing MD isn't your average Maryland car detailing shop. We believe your car deserves the same level of care and attention as you do." url="https://placehold.co/1920x1080" />
            <div className="bg-white text-black">
                <Helmet>
                    <title>Seamless Experience | Wellness Detailing MD</title>
                    <meta
                    name="description"
                    content="Enjoy exceptional convenience, personalized attention, and professional detailing service with Wellness Detailing MD."
                    />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Eco Detailing"
                        className="w-full h-auto rounded shadow"
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-6">The Wellness Detailing MD Difference:</h2>
                        <ul className="space-y-4 text-black list-disc pl-5">
                            <li><strong>Eco-Conscious Cleaning:</strong> We use only eco-friendly, biodegradable products that are gentle on your car and the environment - a perfect choice for the Maryland environment.</li>
                            <li><strong>Specialized Services:</strong> From deep interior cleaning to paint correction and ceramic coating, we offer a variety of services to meet your car's unique needs.</li>
                            <li><strong>Relaxing Atmosphere:</strong> Our waiting area is designed to provide a tranquil escape, allowing you to unwind while your car is transformed.</li>
                            <li><strong>Mobile Detailing Convenience:</strong> Can't make it to us? No problem! We bring the detail shop to you - mobile detailing throughout Maryland for your convenience.</li>
                        </ul>
                    </div>
                    
                </section>
                <div className="pt-4 text-center">
                    <Link to="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
                        Get A Free Quote
                    </Link>
                </div>

                <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get a Free Quote & Breathe Easy with Eco-Friendly Detailing!</h2>
                        <p className="text-gray-700 mb-6">
                            Concerned about the environment? At Wellness Detailing MD, we use only eco-friendly cleaning products that are tough on dirt but gentle on your car and the planet. Get a free quote today and discover how our meticulous detailing process can leave your car sparkling while protecting the environment.
                        </p>
                    </div>
                    <img
                        src="https://placehold.co/600x400"
                        alt="Eco Detailing"
                        className="w-full h-auto rounded shadow"
                    />
                </section>
                <div className="pt-2 text-center">
                    <Link to="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
                            Get A Free Quote
                    </Link>
                </div>
                <TestimonialSlider />

                <section className="max-w-5xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-video bg-gray-200 rounded shadow overflow-hidden w-[250px] h-[250px]">
                                <img src={`https://placehold.co/600x400?text=Photo+${i}`} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold max-w-2xl mx-auto mb-4">We aim to provide a seamless experience for all our customers.</h2>
                        <p className="font-bold">Our goal is to cultivate a stress-free environment.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        {[
                            {
                                icon: <FaHandshake className="text-orange-500 w-10 h-10 mx-auto mb-4" />,
                                title: "Exceptional Convenience",
                                desc: "From booking to service completion, we streamline every step to ensure a hassle-free experience for our customers."
                            },
                            {
                                icon: <FaCar className="text-orange-500 w-10 h-10 mx-auto mb-4" />,
                                title: "Personalized Attention",
                                desc: "Our team is dedicated to understanding your unique needs and preferences, delivering tailored solutions with care and precision."
                            },
                            {
                                icon: <FaPhoneAlt className="text-orange-500 w-10 h-10 mx-auto mb-4" />,
                                title: "Transparent Communication",
                                desc: "We believe in keeping our customers informed every step of the way, providing clear and honest communication for peace of mind."
                            },
                            {
                                icon: <FaHardHat className="text-orange-500 w-10 h-10 mx-auto mb-4" />,
                                title: "Professional Expertise",
                                desc: "With years of experience and expertise in the industry, our skilled technicians strive to exceed expectations with every detail."
                            },
                            {
                                icon: <FaCarAlt className="text-orange-500 w-10 h-10 mx-auto mb-4" />,
                                title: "Attention to Detail",
                                desc: "We take pride in our meticulous approach, ensuring that every aspect of our service is carried out with the utmost precision and care."
                            },
                            {
                                icon: <FaSmile className="text-orange-500 w-10 h-10 mx-auto mb-4" />,
                                title: "Commitment to Satisfaction",
                                desc: "Customer satisfaction is our top priority, and we go above and beyond to ensure that every customer leaves with a smile on their face."
                            }
                        ].map(({ title, desc, icon }) => (
                            <div key={title} className="bg-gray-50 rounded shadow p-6">
                                {icon}
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-gray-600 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Other Detailing Services</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        {[
                            "Wash and Wax",
                            "Premium Wash",
                            "Full Interior Cleaning",
                            "Mini-Interior Detail",
                            "Smoke Odor Removal",
                            "Overspray Removal"
                        ].map((title) => (
                            <div key={title} className="bg-gray-50 rounded shadow p-6">
                                <h3 className="text-xl font-bold mb-4">{title}</h3>
                                <p className="text-gray-700 text-sm mb-4">
                                    {title === "Wash and Wax" && "Revitalize your car with our thorough wash and wax service, ensuring a pristine finish that shields against the elements."}
                                    {title === "Premium Wash" && "Experience a top-tier clean with our premium wash service, leaving your vehicle gleaming with meticulous attention to detail."}
                                    {title === "Full Interior Cleaning" && "Restore your car's interior to like-new condition with our comprehensive cleaning service, covering every nook and cranny for a fresh feel."}
                                    {title === "Mini-Interior Detail" && "Maintain a tidy interior with our quick yet effective mini-detail service, focusing on key areas to keep your car looking its best."}
                                    {title === "Smoke Odor Removal" && "Eliminate stubborn smoke odors with our specialized treatment, leaving your car smelling clean and fresh."}
                                    {title === "Overspray Removal" && "Remove unwanted contaminants from your car's exterior with our gentle yet effective overspray removal service, preserving its original finish."}
                                </p>
                                <Link
                                    to={`/${title.toLowerCase().replace(/\s+/g, '')}`}
                                    className="bg-orange-500 text-white px-5 py-2 rounded-md font-medium hover:bg-orange-600"
                                >
                                    Read more
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Wellness Detailing MD FAQs</h2>

          <div className="text-left space-y-8 text-gray-700 text-base leading-relaxed">
            <div>
              <h3 className="font-semibold text-lg text-black">What sets you apart from a car wash?</h3>
              <p>
                Car washes typically focus on a quick exterior clean. We provide a more comprehensive detailing experience, including a meticulous cleaning and polishing of both the interior and exterior of your car, using eco-friendly products.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-black">How often should I get my car detailed?</h3>
              <p>
                We recommend a professional detail every 6-12 months, depending on your driving habits and how well you maintain your car.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-black">Do you offer mobile detailing services?</h3>
              <p>
                Yes! We offer mobile detailing services throughout Maryland for your convenience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-black">What amenities do you have in your waiting area?</h3>
              <p>
                Our waiting area features comfortable seating, complimentary beverages, Wi-Fi, and a massage chair area (additional fee may apply).
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl font-semibold text-black mb-4">
              Let Wellness Detailing MD Rejuvenate Your Car and Your Spirit. Schedule an Appointment Today!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded shadow"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>
            <QuoteForm />
        </>
    )
}