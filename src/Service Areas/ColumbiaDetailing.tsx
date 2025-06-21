import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function ColumbiaDetailing() {
    const currentPath = location.pathname.replace("/", "");
    const locations = [
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
        'Olney Md Mobile Detailing',
    ];

    return (
        <>
            <ServiceHero header="Columbia Mobile Detailing: Bringing Showroom Shine to Your Driveway" subheader="Welcome to Columbia Mobile Detailing, your trusted source for professional and meticulous car detailing services in Columbia, Maryland!" url="https://placehold.co/1920x1080" />
            <Helmet>
                <title>Columbia, MD Mobile Detailing | Wellness Detailing</title>
                <meta name="description" content="Wellness Detailing provides expert mobile car detailing services in Columbia, MD. Interior and exterior detailing, paint correction, odor removal, and more." />
            </Helmet>

            <section className="py-12 px-4 text-center space-y-6">
                <h1 className="text-3xl font-bold">Skip the hassle of taking your car to a detail shop - we come to you!</h1>
                <p className="max-w-2xl mx-auto text-lg text-left">
                    Our experienced and certified detailers utilize top-of-the-line equipment and premium products to deliver exceptional results, leaving your car gleaming and protected.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="w-[280px] h-[400px] border border-gray-300 bg-gray-100"></div>
                    <div className="w-[280px] h-[400px] border border-gray-300 bg-gray-100"></div>
                </div>

                <Link
                    to="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                >
                    Get A Free Quote
                </Link>
            </section>

            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Our Mobile Detailing Services in Columbia, MD
                </h2>
                <p className="text-lg text-left max-w-3xl mx-auto mb-12">
                    Columbia Mobile Detailing brings the showroom shine to you! We offer a variety of exceptional mobile detailing services in Columbia, MD to restore your car's beauty and value, all from the comfort of your driveway. Here's a glimpse of what our expert detailers can do for your car:
                </p>

                <div className="space-y-6 text-left max-w-3xl mx-auto">
                    <p><strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning included), hard surfaces, and windows, and remove any unwanted trash.</p>

                    <p><strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules, including vacuuming, surface wiping, window cleaning, and trash removal.</p>

                    <p><strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your car's interior with our professional smoke odor removal service.</p>

                    <p><strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.</p>

                    <p><strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash and high-quality wax application.</p>

                    <p><strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step paint correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.</p>

                    <p><strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating, offering superior gloss, scratch resistance, and easier maintenance for years to come.</p>

                    <p><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional headlight restoration service.</p>

                    <p><strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's exterior, returning it to its original condition.</p>

                    <p><strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road debris with a virtually invisible paint protection film.</p>

                    <p><strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from a variety of colors, designs, and finishes to express your unique style.</p>
                </div>

                <p className="text-center text-lg font-semibold mt-10">
                    Columbia Mobile Detailing: Let us make your car shine!
                </p>
                <p className="text-center text-base mt-2 mx-auto max-w-2xl">
                    Contact us today to request a free quote and experience the Columbia Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Columbia, MD.
                </p>

                <div className="mt-6 flex justify-center">
                    <Link
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <section className="px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-bold mb-6">
                                We Detail Throughout Columbia, MD and Bring the Shine to You!
                            </h2>

                            <p className="mb-4">
                                Looking for exceptional car detailing services near you in Columbia, Maryland? Look no further than Columbia Mobile Detailing! We conveniently provide mobile detailing services throughout Columbia, MD and the surrounding areas.
                            </p>

                            <ul className="mb-4 list-disc list-inside space-y-1">
                                {locations.map((area) => {
                                    const route = area.toLowerCase().replace(/\s+/g, "");
                                    const isCurrent = currentPath === route;

                                    return (
                                        <p key={route}>
                                            <Link
                                                to={`/${route}`}
                                                className={`${isCurrent
                                                    ? "text-blue-600 font-semibold"
                                                    : "text-black hover:text-blue-600 transition-colors"
                                                    }`}
                                            >
                                                {area}
                                            </Link>
                                        </p>
                                    );
                                })}
                            </ul>

                            <p className="mb-2">
                                <strong>Not sure if we service your specific area? Not to worry!</strong><br />
                                <span className="block mt-4">
                                    Contact us today! We are always expanding our service coverage in Poolesville, MD and surrounding areas. We'd be happy to discuss your detailing needs and answer any questions you may have.
                                </span>
                            </p>
                        </div>

                        <div className="lg:w-1/2 w-full h-[600px] aspect-video bg-gray-200 border flex items-center justify-center text-gray-500 text-sm">
                            Image Placeholder
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Columbia Mobile Detailing FAQs
                </h2>

                <div className="space-y-8 text-left">
                    <p>At Columbia Mobile Detailing, we understand you might have questions about our convenient and exceptional mobile detailing services in Columbia, MD. Here are some frequently asked questions to help you decide if our services are the perfect solution for your car's needs:</p>
                    <div>
                        <h3 className="font-bold text-lg mb-2">What is the difference between mobile detailing and a car wash?</h3>
                        <p>
                            A mobile detail is significantly more comprehensive than a car wash. We bring the detail shop to you, providing a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car. This restores its shine, removes imperfections, and creates a lasting, showroom-quality finish, unlike a basic car wash that focuses primarily on exterior cleaning.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">What are the benefits of choosing mobile detailing?</h3>
                        <p className="mb-2">There are numerous advantages to choosing mobile detailing over traditional car washes or detail shops:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Convenience:</strong> Skip the hassle of traveling and waiting! We come directly to your location in Columbia, MD, saving you valuable time and effort.</li>
                            <li><strong>Professional Results:</strong> Our certified detailers use top-of-the-line equipment and premium products to deliver exceptional cleaning and lasting protection for your car.</li>
                            <li><strong>Time-Saving:</strong> Get a professional detail while you relax at home or work, maximizing your time.</li>
                            <li><strong>Protection:</strong> Our detailing services include protective waxes and coatings that safeguard your car's paint from harmful elements like UV rays and environmental contaminants.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">How often should I get my car detailed?</h3>
                        <p>
                            The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail is recommended every 6-12 months. More frequent detailing might be needed if you park outdoors often, drive on dusty roads, or have pets in your car.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Do you offer different mobile detailing packages?</h3>
                        <p>
                            Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages to suit your specific needs and budget. Browse our options online or contact us for a free quote. Our detailing experts will be happy to recommend the perfect service to make your car shine again.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Can you remove smoke odors from my car's interior?</h3>
                        <p>
                            Yes! We offer professional smoke odor removal services using effective techniques to eliminate lingering odors and restore a fresh, clean scent to your car's interior.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Is mobile detailing just as effective as shop detailing?</h3>
                        <p>
                            Yes! Our mobile detailing services utilize top-of-the-line equipment and high-quality products to achieve exceptional results, no matter your location in Columbia, MD. You won't sacrifice quality by choosing the convenience of mobile detailing.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Ready to experience the Columbia Mobile Detailing difference?</h3>
                        <p>
                            Request a free quote today and let us make your car shine! We guarantee exceptional results delivered conveniently at your location. Let's get your car looking its best again!
                        </p>
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>

                </div>
            </section>

            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Columbia, MD Mobile Detailing Gallery
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full h-[200px] bg-gray-200 border border-gray-400 rounded flex items-center justify-center text-gray-500 text-sm"
                        >
                            Image Placeholder {index + 1}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}