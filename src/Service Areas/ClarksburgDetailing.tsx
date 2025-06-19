import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function ClarksburgDetailing() {

    const serviceAreas = [
        'Poolesville MD Mobile Detailing',
        'Columbia Mobile Detailing',
        'College Park Mobile Detailing',
        'Damascus MD Mobile Detailing',
        'Laurel MD Mobile Detailing',
        'Beltsville MD Mobile Detailing',
        'Silver Spring MD Mobile Detailing',
        'Bethesda MD Mobile Detailing',
        'Potomac MD Mobile Detailing',
        'Clarksburg Mobile Detailing',
        'Gaithersburg Mobile Detailing',
        'Rockville MD Mobile Detailing',
        'Olney MD Mobile Detailing',
    ];

    return (
        <>
            <ServiceHero header="Clarksburg Mobile Detailing: Mountain Shine for Your Ride in Clarksburg, MD" subheader="Welcome to Clarksburg Mobile Detailing, your one-stop shop for restoring the rugged good looks and pristine shine of your car in Clarksburg, WV. Whether you've been conquering off-road adventures or navigating city streets, we bring the detail shop to you, eliminating the hassle of traveling." url="https://placehold.co/1920x1080" />
            <Helmet>
                <title>Clarksburg Mobile Detailing | Your Local Car Care Champions</title>
                <meta
                    name="description"
                    content="Clarksburg Mobile Detailing provides high-quality car detailing services in Clarksburg, WV. Locally owned, certified experts, top-tier products, and mobile convenience!"
                />
            </Helmet>

            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                        Clarksburg Mobile Detailing: Your Local Car Care Champions
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Clarksburg Mobile Detailing is a local business, owned and operated right here in
                        Clarksburg, WV. We understand the unique challenges that Clarksburg cars endure,
                        from battling the elements on mountain roads to contending with winter road salt.
                        That's why we provide the highest quality detailing services specifically designed to
                        revive your car's rugged good looks, shield it from the elements, and keep it looking
                        its best year-round.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Our team of certified detailers is highly trained and experienced in all aspects of car
                        detailing. We use only the best car care products and equipment to achieve exceptional,
                        long-lasting results. We are committed to providing exceptional service, convenience,
                        and competitive pricing to our valued customers in Clarksburg. Let Clarksburg Mobile
                        Detailing become your trusted partner in keeping your car adventure-ready!
                    </p>
                    <p className="text-gray-700 mb-10">
                        Experience the convenience and quality of Clarksburg Mobile Detailing! Our certified
                        detailers are passionate car care specialists, wielding top-of-the-line equipment and
                        premium products specifically formulated to tackle the unique challenges of the
                        Clarksburg environment. We'll leave your car gleaming, protected, and ready to handle
                        whatever adventure awaits you next.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                        <img
                            src="/images/clarksburg-detail-1.jpg"
                            alt="Clarksburg Mobile Detailing Service 1"
                            className="rounded-lg w-full sm:w-1/2 object-cover"
                        />
                        <img
                            src="/images/clarksburg-detail-2.jpg"
                            alt="Clarksburg Mobile Detailing Service 2"
                            className="rounded-lg w-full sm:w-1/2 object-cover"
                        />
                    </div>

                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Services Offered: Personalized Detailing Solutions for Your Clarksburg Car
                    </h2>
                    <p className="text-gray-700 mb-6">
                        At Clarksburg Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Clarksburg, WV to cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-4">
                        <li>
                            <strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning included), hard surfaces, and windows, and remove any unwanted trash.
                        </li>
                        <li>
                            <strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules, including vacuuming, surface wiping, window cleaning, and trash removal.
                        </li>
                        <li>
                            <strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your car's interior with our professional smoke odor removal service.
                        </li>
                        <li>
                            <strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.
                        </li>
                        <li>
                            <strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash and high-quality wax application.
                        </li>
                        <li>
                            <strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step paint correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.
                        </li>
                        <li>
                            <strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating, offering superior gloss, scratch resistance, and easier maintenance for years to come.
                        </li>
                        <li>
                            <strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional headlight restoration service.
                        </li>
                        <li>
                            <strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's exterior, returning it to its original condition.
                        </li>
                        <li>
                            <strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road debris with a virtually invisible paint protection film.
                        </li>
                        <li>
                            <strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from a variety of colors, designs, and finishes to express your unique style.
                        </li>
                    </ul>
                    <p className="text-gray-700 mt-6">
                        <strong>Clarksburg Mobile Detailing: Let us make your car shine!</strong>
                    </p>
                    <p className="text-gray-700 mt-2">
                        Contact us today to request a free quote and experience the Clarksburg Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Clarksburg, MD.
                    </p>
                    <div className="mt-8 text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition-colors duration-300"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
                <Helmet>
                    <title>Clarksburg Mobile Detailing | Service Areas</title>
                    <meta
                        name="description"
                        content="Clarksburg Mobile Detailing proudly serves Clarksburg, West Virginia, and surrounding areas. Explore our service coverage today!"
                    />
                </Helmet>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Clarksburg Mobile Detailing Service Areas: Bringing the Shine Throughout Clarksburg
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Clarksburg Mobile Detailing proudly serves Clarksburg, West Virginia, and the surrounding areas.
                            We're constantly expanding our reach to bring the convenience of mobile detailing to more drivers!
                            Whether you're nestled in a quiet Clarksburg neighborhood or call a nearby community home, we can help you keep your car looking its best.
                        </p>

                        <ul className="space-y-2 text-base font-medium">
                            {serviceAreas.map((area) => {
                                const slug = area.replace(/\s+/g, '').toLowerCase(); 
                                const isCurrent = slug === 'clarksburgmobiledetailing';
                                return (
                                    <li key={slug}>
                                        <Link
                                            to={`/${slug}`}
                                            className={`transition-colors ${isCurrent
                                                    ? 'text-orange-500 pointer-events-none'
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
                            Not sure if we service your specific area? Not to worry! Contact us today! We'd be happy to discuss your detailing needs and answer any questions you may have.
                            We're always looking for ways to expand our service coverage in Bridgeport and surrounding areas, so there's a good chance we can make your car shine even brighter!
                        </p>
                    </div>

                    <div>
                        <img
                            src=""
                            alt="Clarksburg Mobile Detailing Service Area"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <Helmet>
                <title>Clarksburg Mobile Detailing FAQs | Wellness Detailing</title>
                <meta
                    name="description"
                    content="Frequently asked questions about Clarksburg Mobile Detailing. Learn how we compare to a car wash, how often to detail, and what packages we offer."
                />
            </Helmet>

            <section className="bg-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Clarksburg Mobile Detailing FAQs: Your Clarksburg Car Detailing Questions Answered!
                    </h2>

                    <div className="space-y-8 text-gray-800">
                        <p>We understand you might have questions about our mobile detailing services in Clarksburg, WV. Here are some frequently asked questions to help you decide if Clarksburg Mobile Detailing is right for you:</p>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                What sets Clarksburg Mobile Detailing apart from a car wash?
                            </h3>
                            <p>
                                Mobile detailing is significantly more comprehensive than a car wash. We provide a
                                meticulous cleaning, polishing, and protection process for both the interior and
                                exterior of your car, unlike a car wash that focuses primarily on a quick exterior
                                clean.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                How often should I get my car detailed in Clarksburg?
                            </h3>
                            <p>
                                The frequency depends on your driving habits and how well you maintain your car.
                                Generally, a professional detail every 6-12 months is recommended in Clarksburg, WV
                                to maintain a fresh look and protect your car's finish, especially after harsh
                                winter months.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Do you offer mobile detailing packages in Clarksburg?
                            </h3>
                            <p>
                                Absolutely! We understand that every car has unique needs. That's why we offer a
                                variety of mobile detailing packages in Clarksburg, WV to fit your specific budget
                                and requirements. Browse our options online or contact us for a free quote.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <Helmet>
                <title>Clarksburg, MD Mobile Detailing Gallery | Wellness Detailing</title>
                <meta name="description" content="View our mobile detailing gallery showcasing professional interior and exterior car detailing in Clarksburg, WV." />
            </Helmet>

            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Clarksburg, MD Mobile Detailing Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Array.from({ length: 24 }, (_, i) => (
                            <div key={i} className="w-full h-64 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">Image {i + 1}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </div>
            <QuoteForm />
        </>
    )
}