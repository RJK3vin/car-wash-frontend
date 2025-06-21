import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function RockvilleDetailing() {

    const locations = [
        "Poolesville MD Mobile Detailing",
        "Columbia Mobile Detailing",
        "College Park Mobile Detailing",
        "Damascus MD Mobile Detailing",
        "Laurel MD Mobile Detailing",
        "Beltsville MD Mobile Detailing",
        "Silver Spring MD Mobile Detailing",
        "Bethesda MD Mobile Detailing",
        "Potomac MD Mobile Detailing",
        "Clarksburg Mobile Detailing",
        "Gaithersburg Mobile Detailing",
        "Rockville MD Mobile Detailing",
        "Olney MD Mobile Detailing"
    ];
    const currentPage = "rockvillemdmobiledetailing";
    const galleryImages = Array.from({ length: 24 }, (_, i) => `/images/gallery/rockville/${i + 1}.webp`);

    return (
        <>
            <ServiceHero header="Rockville Mobile Detailing: Bringing the Showroom Shine to Your Doorstep" subheader="Welcome to Rockville Mobile Detailing, your one-stop shop for transforming your car from everyday commuter to head-turning masterpiece, all within the comfort of your Rockville, MD driveway! We ditch the hassle of taking your car to a detail shop and bring the meticulous care and exceptional results directly to you." url="https://placehold.co/1920x1080" />
            <section className="px-4 py-12 md:py-20 bg-white text-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Experience the Rockville Mobile Detailing difference — convenience meets unparalleled service!
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto text-left">
                            Our certified detailers are passionate car care specialists wielding top-of-the-line equipment and premium products.
                            We'll leave your car gleaming, protected, and ready to impress wherever your Rockville adventures take you.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-2 text-left max-w-3xl mx-auto">
                            Rockville Mobile Detailing: Your Trusted Partner in Automotive Elegance
                        </h3>
                        <div className="space-y-4 text-lg text-left max-w-3xl mx-auto">
                            <p>
                                Rockville Mobile Detailing is a Rockville-based business, proudly serving our community for years.
                                We understand the unique challenges Rockville cars face, from the relentless summer sun to the harsh winter salt on the roads.
                                That's why we provide the highest quality detailing services specifically designed to revive your car's brilliance,
                                shield it from the elements, and keep it looking like a Rockville rockstar year-round.
                            </p>
                            <p>
                                Our team of certified detailers is highly trained and experienced in all aspects of car detailing.
                                We use only the finest car care products and equipment to achieve exceptional, long-lasting results.
                                We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Rockville.
                                Let Rockville Mobile Detailing become your trusted partner in keeping your car looking its absolute best!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-4 max-w-4xl w-full justify-center">
                            <img
                                src="https://placehold.co/1920x1080"
                                alt="Rockville Detailing 1"
                                className="rounded shadow-lg border border-gray-200 w-1/2 object-cover"
                            />
                            <img
                                src="https://placehold.co/1920x1080"
                                alt="Rockville Detailing 2"
                                className="rounded shadow-lg border border-gray-200 w-1/2 object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <section className="px-4 py-12 bg-white text-gray-800">
                <Helmet>
                    <title>Rockville Mobile Detailing Services | Premium Car Care</title>
                    <meta name="description" content="Explore personalized mobile car detailing services in Rockville, MD. Interior and exterior care, paint correction, wraps, ceramic coatings, and more." />
                </Helmet>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Rockville's Finest Detailing Solutions: Tailored to Your Car's Needs</h2>
                    <p className="mb-4">At Rockville Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Rockville, MD to cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:</p>

                    <ul className="list-disc list-outside pl-6 space-y-3 mb-6">
                        <li><strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car’s interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning included), hard surfaces, and windows, and remove any unwanted trash.</li>
                        <li><strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules, including vacuuming, surface wiping, window cleaning, and trash removal.</li>
                        <li><strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your car’s interior with our professional smoke odor removal service.</li>
                        <li><strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative service tackles embedded dirt, grime, and stains, bringing your car’s inside back to life.</li>
                        <li><strong>Wash and Wax:</strong> Give your car’s exterior a classic clean and shine with our thorough wash and high-quality wax application.</li>
                        <li><strong>Paint Correction:</strong> Restore your car’s paintwork to its former glory with our multi-step paint correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.</li>
                        <li><strong>Ceramic Coating (Optional Add-On):</strong> Protect your car’s paint with a ceramic coating, offering superior gloss, scratch resistance, and easier maintenance for years to come.</li>
                        <li><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional headlight restoration service.</li>
                        <li><strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car’s exterior, returning it to its original condition.</li>
                        <li><strong>Paint Protection Film (PPF):</strong> Protect your car’s paint from scratches, chips, and road debris with a virtually invisible paint protection film.</li>
                        <li><strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from a variety of colors, designs, and finishes to express your unique style.</li>
                    </ul>

                    <p className="mb-4 font-bold">Rockville Mobile Detailing: Let us make your car shine!</p>
                    <p className="mb-8">Contact us today to request a free quote and experience the Rockville Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Rockville, MD.</p>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <section className="px-4 py-12 bg-white text-gray-800">
                <Helmet>
                    <title>Rockville Mobile Detailing Service Areas</title>
                    <meta
                        name="description"
                        content="Discover all the areas Rockville Mobile Detailing proudly serves across Maryland. We bring top-tier detailing directly to you!"
                    />
                </Helmet>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Rockville Mobile Detailing Service Areas: Bringing the Shine Throughout Rockville</h2>
                        <p className="mb-4">
                            Rockville Mobile Detailing proudly serves Rockville, Maryland, and the surrounding areas. We're constantly expanding our reach to bring the convenience of mobile detailing to more drivers! Whether you reside in a bustling Rockville neighborhood or call a nearby community home, we can help you keep your car looking its best.
                        </p>
                        <ul className="mb-4 space-y-2">
                            {locations.map((location) => {
                                const path = location.toLowerCase().replace(/ /g, '');
                                const isCurrent = path === currentPage;
                                return (
                                    <li key={path}>
                                        <Link
                                            to={`/${path}`}
                                            className={`transition-colors ${isCurrent
                                                ? 'text-blue-600 font-semibold'
                                                : 'text-black hover:text-blue-600'
                                                }`}
                                        >
                                            {location}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <p>
                            <strong>Not sure if we service your specific area? Not to worry!</strong> Contact us today! We'd be happy to discuss your detailing needs and answer any questions you may have. We're always looking for ways to expand our service coverage in Potomac and surrounding areas, so there's a good chance we can brighten your car's day!
                        </p>
                    </div>
                    <div className="w-full h-[700px]">
                        <img
                            src="https://placehold.co/1920x1080"
                            alt="Rockville Detailing Service Area Map"
                            className="rounded shadow-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="px-4 py-12 md:px-8 lg:px-20 max-w-6xl mx-auto">
                <div className="space-y-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Rockville's Eco-Conscious Detailing: Shine On While Saving the Planet!
                        </h2>
                        <p className="text-gray-700 mb-4">
                            At Rockville Mobile Detailing, we're passionate not only about keeping your car looking amazing but also about protecting the environment. That's why we use eco-friendly cleaning products whenever possible. These high-performance products are formulated to deliver exceptional results without harming the environment or your car's delicate finishes.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We also prioritize water conservation techniques throughout our detailing process. We use minimal water for rinsing and washing, maximizing efficiency without compromising quality. Additionally, we properly dispose of all used cleaning products and materials to minimize our environmental impact.
                        </p>
                        <p className="text-gray-700">
                            By choosing Rockville Mobile Detailing, you can feel good knowing you're getting a meticulous car detail while contributing to a greener Rockville. Let's keep Rockville's roads sparkling and our planet healthy, one detailed car at a time!
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            Rockville Mobile Detailing FAQs: Your Rockville Car Detailing Questions Answered!
                        </h2>
                        <p className="text-gray-700 mb-4 text-left">
                            We understand you might have questions about our mobile detailing services in Rockville, MD. Here are some frequently asked questions to help you decide if Rockville Mobile Detailing is right for you:
                        </p>
                        <div className="space-y-4 text-left">
                            <div>
                                <li className="font-semibold text-gray-800 mb-2">What sets Rockville Mobile Detailing apart from a car wash?</li>
                                <p className="text-gray-700">
                                    Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                                </p>
                            </div>
                            <div>
                                <li className="font-semibold text-gray-800 mb-2">How often should I get my car detailed in Rockville?</li>
                                <p className="text-gray-700">
                                    The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Rockville, MD to maintain a fresh look and protect your car's finish.
                                </p>
                            </div>
                            <div>
                                <li className="font-semibold text-gray-800 mb-2">Do you offer mobile detailing packages in Rockville?</li>
                                <p className="text-gray-700">
                                    Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages in Rockville, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                                </p>
                            </div>
                            <div>
                                <li className="font-semibold text-gray-800 mb-2">Can you restore the leather seats in my car's interior?</li>
                                <p className="text-gray-700">
                                    Yes! We offer leather conditioning services using proven techniques to revitalize your leather seats and restore their original luster. We use only high-quality, eco-friendly leather conditioners that nourish and protect your car's leather interior.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16">
                <h2 className="text-3xl font-bold mb-6 text-center">Rockville, MD Mobile Detailing Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="border rounded overflow-hidden">
                            <img src={src} alt={`Rockville detailing ${index + 1}`} className="w-full object-cover h-[200px]" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}