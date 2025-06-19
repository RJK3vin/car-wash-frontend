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
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Experience the Rockville Mobile Detailing difference - convenience meets unparalleled service!
                            </h2>
                            <p className="text-lg">
                                Our certified detailers are passionate car care specialists wielding top-of-the-line equipment and premium products.
                                We'll leave your car gleaming, protected, and ready to impress wherever your Rockville adventures take you.
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                                Rockville Mobile Detailing: Your Trusted Partner in Automotive Elegance
                            </h3>
                            <p className="text-lg">
                                Rockville Mobile Detailing is a Rockville-based business, proudly serving our community for years.
                                We understand the unique challenges Rockville cars face, from the relentless summer sun to the harsh winter salt on the roads.
                                That's why we provide the highest quality detailing services specifically designed to revive your car's brilliance,
                                shield it from the elements, and keep it looking like a Rockville rockstar year-round.
                            </p>
                            <p className="text-lg">
                                Our team of certified detailers is highly trained and experienced in all aspects of car detailing.
                                We use only the finest car care products and equipment to achieve exceptional, long-lasting results.
                                We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Rockville.
                                Let Rockville Mobile Detailing become your trusted partner in keeping your car looking its absolute best!
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src="https://placehold.co/1920x1080" alt="Rockville Detailing 1" className="rounded shadow-lg border border-gray-200" />
                            <img src="https://placehold.co/1920x1080" alt="Rockville Detailing 2" className="rounded shadow-lg border border-gray-200" />
                        </div>
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition"
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

                    <ul className="space-y-3 list-disc list-inside mb-6">
                        <li><strong>Full Interior Cleaning:</strong> Deep cleaning of carpets, upholstery, leather seats (with conditioning), hard surfaces, windows, and trash removal.</li>
                        <li><strong>Mini-Interior Detail:</strong> A quick refresh including vacuuming, wiping surfaces, window cleaning, and trash removal.</li>
                        <li><strong>Smoke Odor Removal:</strong> Remove lingering odors and refresh your interior with our professional techniques.</li>
                        <li><strong>Restorative Interior Cleaning:</strong> Revive neglected interiors by tackling embedded dirt, grime, and stains.</li>
                        <li><strong>Wash and Wax:</strong> A classic exterior cleanse and wax for shine and protection.</li>
                        <li><strong>Paint Correction:</strong> Multi-step process to remove scratches, swirl marks, and oxidation for a flawless finish.</li>
                        <li><strong>Ceramic Coating (Optional Add-On):</strong> Long-term paint protection with high gloss and scratch resistance.</li>
                        <li><strong>Headlight Restoration:</strong> Enhance clarity and night visibility with expert restoration.</li>
                        <li><strong>Paint Overspray Removal:</strong> Precise removal of overspray to restore your car's clean finish.</li>
                        <li><strong>Paint Protection Film (PPF):</strong> Defend against chips and scratches with a clear, durable film.</li>
                        <li><strong>Vehicle Wraps:</strong> Customize your car with a wide selection of colors and designs for a bold new look.</li>
                    </ul>

                    <p className="mb-4">Rockville Mobile Detailing: Let us make your car shine!</p>
                    <p className="mb-8">Contact us today to request a free quote and experience the Rockville Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Rockville, MD.</p>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
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
                                                    ? 'text-orange-500 font-semibold'
                                                    : 'text-black hover:text-orange-500'
                                                }`}
                                        >
                                            {location}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <p>
                            Not sure if we service your specific area? Not to worry! Contact us today! We'd be happy to discuss your detailing needs and answer any questions you may have. We're always looking for ways to expand our service coverage in Potomac and surrounding areas, so there's a good chance we can brighten your car's day!
                        </p>
                    </div>
                    <div className="w-full h-auto">
                        <img
                            src="https://placehold.co/1920x1080"
                            alt="Rockville Detailing Service Area Map"
                            className="rounded shadow-lg w-full h-auto object-cover"
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

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Rockville Mobile Detailing FAQs: Your Rockville Car Detailing Questions Answered!
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We understand you might have questions about our mobile detailing services in Rockville, MD. Here are some frequently asked questions to help you decide if Rockville Mobile Detailing is right for you:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">What sets Rockville Mobile Detailing apart from a car wash?</h3>
                                <p className="text-gray-700">
                                    Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">How often should I get my car detailed in Rockville?</h3>
                                <p className="text-gray-700">
                                    The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Rockville, MD to maintain a fresh look and protect your car's finish.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Do you offer mobile detailing packages in Rockville?</h3>
                                <p className="text-gray-700">
                                    Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages in Rockville, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Can you restore the leather seats in my car's interior?</h3>
                                <p className="text-gray-700">
                                    Yes! We offer leather conditioning services using proven techniques to revitalize your leather seats and restore their original luster. We use only high-quality, eco-friendly leather conditioners that nourish and protect your car's leather interior.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition"
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
                            <img src={src} alt={`Rockville detailing ${index + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}