import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function OlneyDetailing() {
    const serviceAreas = [
        "Poolesville MD Mobile Detailing",
        "Columbia Mobile Detailing",
        "College Park Mobile Detailing",
        "Damascus MD Mobile Detailing",
        "Laurel MD Mobile Detailing",
        "Beltsville MD Mobile Detailing",
        "Silver Spring MD Mobile Detailing",
        "Bethesda MD Mobile Detailing",
        "Potomac MD Mobile Detailing",
        "Clarksburg mobile detailing",
        "Gaithersburg Mobile Detailing",
        "Rockville MD Mobile Detailing",
        "Olney Md Mobile Detailing"
    ];


    return (
        <>
            <ServiceHero header="Olney Auto Oasis: Transform Your Car's Appearance Without Leaving Your Driveway" subheader="Welcome to Olney Auto Oasis, your one-stop shop for transforming your car from everyday driver to showroom showstopper, all within the comfort of your Olney, MD driveway! Say goodbye to the hassle of appointments and congested car washes." url="https://placehold.co/1920x1080" />
            <section className="bg-white py-12">
                <Helmet>
                    <title>Olney Auto Oasis | Mobile Detailing in Olney, MD</title>
                    <meta name="description" content="Olney Auto Oasis offers top-tier mobile detailing in Olney, MD. Experience high-quality services from certified car care experts today." />
                </Helmet>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Olney Auto Oasis: Your Local Partner in Car Care Excellence</h1>
                        <p className="text-lg text-gray-700">
                            Olney Auto Oasis is a local business, owned and operated right here in Olney, MD. We understand the unique challenges faced by Olney cars, from enduring hot summer days to navigating occasional winter snow. That’s why we provide the highest quality detailing services specifically designed to revive your car’s shine, shield it from the elements, and keep it looking amazing year-round.
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use only the finest car care products and equipment to achieve exceptional, long-lasting results. We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Olney. Let Olney Auto Oasis become your trusted partner in keeping your car looking its absolute best!
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            Experience the Olney Auto Oasis difference – it’s all about exceeding expectations! Our certified detailers are passionate car care specialists wielding top-of-the-line equipment and premium products. We go the extra mile to ensure your car gleams, boasts superior protection, and turns heads as you navigate the charming streets of Olney.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                        <div className="w-full md:w-1/2 h-64 bg-gray-200 border border-gray-300">Image 1 Placeholder</div>
                        <div className="w-full md:w-1/2 h-64 bg-gray-200 border border-gray-300">Image 2 Placeholder</div>
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Personalized Detailing Solutions for Your Olney Car
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        At Olney Auto Oasis, we offer a comprehensive menu of mobile detailing services in Olney, MD to cater to your specific car’s needs and your budget. Here’s a glimpse into what we can do for you:
                    </p>
                </div>
                <ul className="text-gray-700 space-y-4 max-w-4xl mx-auto mb-10">
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
                <div className="text-center">
                    <p className="text-lg font-medium text-gray-800 mb-4">
                        Olney, MD Mobile Detailing: Let us make your car shine!
                    </p>
                    <p className="text-gray-600 mb-6">
                        Contact us today to request a free quote and experience the Olney, MD Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Olney, MD.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            <section className="bg-white py-16 px-4 md:px-10" id="service-areas">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            Olney Auto Oasis Service Areas: Bringing the Shine Throughout Olney (and Beyond!)
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Olney Auto Oasis proudly serves Olney, Maryland, and the surrounding areas. We’re constantly expanding our reach to bring the convenience of mobile detailing to more drivers! Whether you reside in a peaceful Olney neighborhood or call a nearby community home, we can help you keep your car looking its best.
                        </p>
                        <ul className="space-y-2">
                            {serviceAreas.map((area) => {
                                const route = area.toLowerCase().replace(/\s+/g, '');
                                const isCurrent = route === "olneymdmobiledetailing";
                                return (
                                    <li key={area}>
                                        <Link
                                            to={`/${route}`}
                                            className={`text-sm font-medium ${isCurrent
                                                    ? 'text-orange-500'
                                                    : 'text-black hover:text-orange-500'
                                                }`}
                                        >
                                            {area}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <p className="text-gray-700 mt-6">
                            Not sure if we service your specific area? Not to worry! Contact us today! We’d be happy to discuss your detailing needs and answer any questions you may have. We’re always looking for ways to expand our service coverage in Ashton and surrounding areas, so there’s a good chance we can brighten your car’s day!
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            src="https://placehold.co/1920x1080"
                            alt="Service Areas in Olney"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Olney Auto Oasis: Keeping Your Car Protected Between Details
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        At Olney Auto Oasis, we understand that a detailed car deserves lasting protection. That’s why we offer a variety of car care products available for purchase, allowing you to maintain that showroom shine long after our detail service.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We stock only the highest quality car care products, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li>
                            <strong>High-performance car washes and waxes</strong> to maintain a clean and glossy exterior.
                        </li>
                        <li>
                            <strong>Interior cleaners and protectants</strong> specifically formulated for different interior surfaces, like leather conditioners and fabric protectants.
                        </li>
                        <li>
                            <strong>Tire care products</strong> to keep your tires looking black and healthy.
                        </li>
                        <li>
                            <strong>Wheel cleaners and protectants</strong> to maintain the shine and luster of your wheels.
                        </li>
                    </ul>
                    <p className="text-lg text-gray-700">
                        Our knowledgeable staff can help you choose the right car care products to fit your specific needs and budget. By following a simple maintenance routine with these products, you can extend the life of your detail and keep your Olney car looking amazing in between our professional detailing services.
                    </p>
                </div>
            </section>
            <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-20">

                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                        Olney Auto Oasis FAQs: Your Olney Car Detailing Questions Answered!
                    </h2>
                    <div className="space-y-6 text-gray-700 text-lg">
                        <p>We understand you might have questions about our mobile detailing services in Olney, MD. Here are some frequently asked questions to help you decide if Olney Auto Oasis is right for you:</p>
                        <div>
                            <p>
                                <strong>What sets Olney Auto Oasis apart from a car wash?</strong>
                            </p>
                            <p>
                                Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                            </p>
                        </div>
                        <div>
                            <p>
                                <strong>How often should I get my car detailed in Olney?</strong>
                            </p>
                            <p>
                                The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Olney, MD to maintain a fresh look and protect your car’s finish.
                            </p>
                        </div>
                        <div>
                            <p>
                                <strong>Do you offer mobile detailing packages in Olney?</strong>
                            </p>
                            <p>
                                Absolutely! We understand that every car has unique needs. That’s why we offer a variety of mobile detailing packages in Olney, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/contact"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded shadow"
                        >
                            Get a free quote
                        </Link>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                        Olney Mobile Detailing Gallery
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Array.from({ length: 24 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="w-full h-40 bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-400"
                            >
                                image placeholder
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/contact"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded shadow "
                        >
                            Get a free quote
                        </Link>
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}