import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";

export default function CollegeParkDetailing() {
    return (
        <>
            <ServiceHero header="Revive Your Ride's Shine with College Park Mobile Detailing!" subheader="Welcome to College Park Mobile Detailing, your one-stop shop for professional and meticulous car detailing services in College Park, Maryland! We are passionate about exceeding your expectations and transforming the appearance of your car, all at the comfort of your driveway." url="https://placehold.co/1920x1080" />
            <section className="py-16 px-4 max-w-6xl mx-auto text-center">
                <Helmet>
                    <title>About College Park Mobile Detailing | Wellness Detailing</title>
                    <meta name="description" content="Learn more about our experienced team and high-quality mobile detailing services in College Park, MD." />
                </Helmet>

                <h2 className="text-3xl font-bold mb-6">About College Park Mobile Detailing</h2>

                <p className="mb-6">
                    College Park Mobile Detailing is a locally owned and operated business with a passion for car care. We understand that your car is a valuable investment, and we take pride in providing the highest quality detailing services to restore its shine and protect it for years to come.
                </p>

                <p className="mb-6">
                    Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use only the best car care products and equipment to achieve exceptional, long-lasting results.
                </p>

                <p className="mb-10">
                    We are committed to providing our customers with exceptional service, convenience, and competitive pricing. Let us help you keep your car looking its best!
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
                    <div className="w-[300px] h-[200px] bg-gray-200 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-500">
                        Image Placeholder 1
                    </div>
                    <div className="w-[300px] h-[200px] bg-gray-200 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-500">
                        Image Placeholder 2
                    </div>
                </div>

                <Link
                    to="/contact"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded transition"
                >
                    Get A Free Quote
                </Link>
            </section>
            <section className="py-16 px-4 max-w-6xl mx-auto text-center">
                <Helmet>
                    <title>Mobile Detailing Services in College Park | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Explore our comprehensive mobile detailing services in College Park, MD including interior, exterior, paint protection, and more!"
                    />
                </Helmet>

                <h2 className="text-3xl font-bold mb-8">Our Mobile Detailing Services in College Park</h2>

                <p className="mb-6 text-left">
                    At College Park Mobile Detailing, we offer a comprehensive menu of mobile detailing services to cater to your car's specific needs and your budget. Here's a glimpse into what we can do for you:
                </p>

                <ul className="text-left space-y-4 mb-10">
                    <li><strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning included), hard surfaces, and windows, and remove any unwanted trash.</li>
                    <li><strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules, including vacuuming, surface wiping, window cleaning, and trash removal.</li>
                    <li><strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your car's interior with our professional smoke odor removal service.</li>
                    <li><strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.</li>
                    <li><strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash and high-quality wax application.</li>
                    <li><strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step paint correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.</li>
                    <li><strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating, offering superior gloss, scratch resistance, and easier maintenance for years to come.</li>
                    <li><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional headlight restoration service.</li>
                    <li><strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's exterior, returning it to its original condition.</li>
                    <li><strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road debris with a virtually invisible paint protection film.</li>
                    <li><strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from a variety of colors, designs, and finishes to express your unique style.</li>
                </ul>

                <p className="text-left mb-6">
                    Columbia Mobile Detailing: Let us make your car shine!
                </p>

                <p className="text-left mb-10">
                    Contact us today to request a free quote and experience the Columbia Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Columbia, MD.
                </p>

                <Link
                    to="/contact"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded transition"
                >
                    Get A Free Quote
                </Link>
            </section>

            <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">College Park Mobile Detailing Service Areas</h2>
                    <p className="mb-4">
                        College Park Mobile Detailing proudly serves College Park, Maryland, and the surrounding areas. We bring the convenience of mobile detailing to your driveway, saving you time and hassle. Let us know your location in College Park and we'll be happy to detail your car there!
                    </p>
                    <p>Our Service Area List:</p>
                    <div className="space-y-2 mb-4">
                        {[
                            'Poolesville MD Mobile Detailing',
                            'Columbia Mobile Detailing',
                            'College Park Mobile Detailing',
                            'Damascus MD Mobile Detailing',
                            'Laurel MD Mobile Detailing',
                            'Beltsville MD Mobile Detailing',
                            'Silver Spring MD Mobile Detailing',
                            'Bethesda MD Mobile Detailing',
                            'Potomac MD Mobile Detailing',
                            'Clarksburg mobile detailing',
                            'Gaithersburg Mobile Detailing',
                            'Rockville MD Mobile Detailing',
                            'Olney Md Mobile Detailing'
                        ].map((location) => {
                            const path = `/${location.toLowerCase().replace(/\s+/g, '')}`;
                            const isCurrent = location === 'College Park Mobile Detailing';
                            return (
                                <Link
                                    key={location}
                                    to={path}
                                    className={`block font-medium transition-colors ${isCurrent ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                                        }`}
                                >
                                    {location}
                                </Link>
                            );
                        })}
                    </div>

                    <p className="mb-2">
                        <strong>Not sure if we service your specific area?</strong>
                    </p>
                    <p className="mb-4">
                        Contact us today! We are always expanding our service coverage in Poolesville, MD and surrounding areas. We'd be happy to discuss your detailing needs and answer any questions you may have.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="w-full h-[300px] bg-gray-200 border border-gray-300 rounded-lg" />
                </div>
            </section>

            <section className="py-16 px-4 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    College Park Mobile Detailing FAQs: Your Questions Answered!
                </h2>
                <p className="mb-6 text-center">
                    We understand you might have questions about our College Park Mobile Detailing services. Here are some frequently asked questions to help you decide if we're the right fit for you:
                </p>

                <div className="space-y-6 text-left">
                    <div>
                        <h3 className="font-bold">What is the difference between mobile detailing and a car wash?</h3>
                        <p>
                            A mobile detail is significantly more comprehensive than a car wash. We provide a meticulous
                            cleaning, polishing, and protection process for both the interior and exterior of your car,
                            unlike a car wash that focuses primarily on exterior cleaning.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold">How often should I get my car detailed in College Park?</h3>
                        <p>
                            The frequency depends on your driving habits and how well you maintain your car. Generally, a
                            professional detail is recommended every 6-12 months.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold">Do you offer different mobile detailing packages in College Park?</h3>
                        <p>
                            Absolutely! We offer a variety of packages to suit your needs and budget. Browse our options
                            online or contact us for a free quote.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold">Can you remove smoke odors from my car's interior in College Park?</h3>
                        <p>
                            Yes! We offer professional smoke odor removal services to eliminate lingering odors and
                            restore a fresh scent.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold">Is College Park Mobile Detailing just as effective as shop detailing?</h3>
                        <p>
                            Yes! Our mobile detailing services utilize top-of-the-line equipment and high-quality
                            products to achieve exceptional results, no matter your location in College Park.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition-colors"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    College Park, MD Mobile Detailing Gallery
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-full h-[200px] bg-gray-200 border border-gray-300 rounded-lg"
                        >
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition-colors"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}