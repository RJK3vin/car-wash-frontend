import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function PotomacDetailing() {

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
        'Olney MD Mobile Detailing',
    ];

    const currentLocation = 'Potomac MD Mobile Detailing';

    return (
        <>
            <ServiceHero header="Potomac Mobile Detailing: Rejuvenate Your Ride's Elegance in Potomac, MD" subheader="Welcome to Potomac Mobile Detailing, your premier destination for reviving the elegance and enhancing the value of your car in Potomac, MD. We bring the showroom shine directly to your driveway, eliminating the need to travel to a detail shop." url="https://placehold.co/1920x1080" />
            <div className="bg-white text-gray-800">
                <Helmet>
                    <title>Potomac Mobile Detailing | Expert Car Detailing in Potomac, MD</title>
                    <meta
                        name="description"
                        content="Potomac Mobile Detailing offers professional mobile car detailing services in Potomac, MD. Restore your car's shine today with expert service at your doorstep."
                    />
                </Helmet>

                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h1 className="text-3xl font-bold mb-6 text-center">Potomac Mobile Detailing: Your Local Authority in Car Care</h1>
                    <p className="mb-6">
                        Potomac Mobile Detailing is a Potomac-based, family-owned business with deep roots in the community. We
                        understand the unique challenges Potomac cars face, from the relentless summer sun to the abrasive winter salt.
                        That's why we provide the highest quality detailing services specifically designed to restore your car's brilliance,
                        shield it from the elements, and ensure it maintains its timeless elegance for years to come.
                    </p>
                    <p className="mb-6">
                        Our team of certified detailers is highly trained and experienced in all aspects of car restoration. We use only the
                        finest car care products and equipment to achieve exceptional, long-lasting results. We are committed to providing
                        exceptional service, convenience, and competitive pricing to our valued customers in Potomac. Let Potomac Mobile
                        Detailing become your trusted partner in keeping your car looking its absolute best!
                    </p>
                    <p className="mb-10">
                        <strong>Experience the Potomac Mobile Detailing difference - exceptional service at your doorstep!</strong> Our certified detailers are
                        passionate artisans, meticulously wielding cutting-edge equipment and premium products to achieve unparalleled
                        results. We'll leave your car gleaming, protected, and ready to turn heads as you navigate the prestigious streets of
                        Potomac.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                        <div className="w-full sm:w-1/2 bg-gray-300 rounded-md h-[400px]" />
                        <div className="w-full sm:w-1/2 bg-gray-300 rounded-md h-[400px]" />
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Services Offered: Personalized Detailing Solutions for Your Potomac Car
                        </h2>
                        <div className="space-y-5">
                            <p>
                                At Potomac Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Potomac, MD to cater
                                to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
                            </p>

                            <ul className="list-disc list-outside pl-6 space-y-3">
                                <li>
                                    <strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's
                                    interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning
                                    included), hard surfaces, and windows, and remove any unwanted trash.
                                </li>
                                <li>
                                    <strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules,
                                    including vacuuming, surface wiping, window cleaning, and trash removal.
                                </li>
                                <li>
                                    <strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your
                                    car's interior with our professional smoke odor removal service.
                                </li>
                                <li>
                                    <strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative
                                    service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.
                                </li>
                                <li>
                                    <strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash and
                                    high-quality wax application.
                                </li>
                                <li>
                                    <strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step paint
                                    correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.
                                </li>
                                <li>
                                    <strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating, offering
                                    superior gloss, scratch resistance, and easier maintenance for years to come.
                                </li>
                                <li>
                                    <strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional
                                    headlight restoration service.
                                </li>
                                <li>
                                    <strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's
                                    exterior, returning it to its original condition.
                                </li>
                                <li>
                                    <strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road debris
                                    with a virtually invisible paint protection film.
                                </li>
                                <li>
                                    <strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from
                                    a variety of colors, designs, and finishes to express your unique style.
                                </li>
                            </ul>

                            <p className="mt-6">
                                <strong>Potomac Mobile Detailing: Let us make your car shine!</strong>
                            </p>
                            <p>
                                Contact us today to request a free quote and experience the Potomac Mobile Detailing difference. We guarantee
                                exceptional results, right at your convenience in Potomac, MD.
                            </p>
                        </div>

                        <div className="text-center mt-10">
                            <Link
                                to="/contact"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold"
                            >
                                Get A Free Quote
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <section className="px-4 py-16 md:px-8 lg:px-24 bg-white">
                <Helmet>
                    <title>Potomac Mobile Detailing Service Areas</title>
                    <meta name="description" content="Explore the Potomac Mobile Detailing service areas. We bring expert car detailing to your driveway in Potomac and surrounding Maryland locations." />
                </Helmet>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Potomac Mobile Detailing Service Areas: Bringing the Shine Throughout Potomac
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Potomac Mobile Detailing proudly serves Potomac, Maryland, and the surrounding areas. We're constantly expanding our reach to bring the convenience of mobile detailing to more drivers! Whether you reside in a stately Potomac neighborhood or call a nearby community home, we can help you keep your car looking its best.
                        </p>

                        <ul className="space-y-2">
                            {locations.map((location) => {
                                const route = '/' + location.toLowerCase().replace(/[^a-z0-9]/g, '');
                                const isCurrent = location === currentLocation;

                                return (
                                    <li key={location}>
                                        <Link
                                            to={route}
                                            className={`text-sm md:text-base ${isCurrent ? 'text-blue-600 font-semibold' : 'text-black hover:text-blue-600 transition-colors'
                                                }`}
                                        >
                                            {location}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <p className="text-gray-700 mt-6">
                            <strong>Not sure if we service your specific area? Not to worry!</strong> Contact us today! We'd be happy to discuss your detailing needs and answer any questions you may have. We're always looking for ways to expand our service coverage in Bethesda, MD and surrounding areas, so there's a good chance we can brighten your car's day!
                        </p>
                    </div>

                    <div className="w-full h-64 md:h-full bg-gray-200 rounded-lg shadow-md" />
                </div>
            </section>
            <div className="max-w-3xl mx-auto text-left space-y-4">
                <p className="text-3xl font-bold">Potomac Mobile Detailing: Your Local Authority in Car Care</p>
                <p>
                    Potomac Mobile Detailing is a Potomac-based, family-owned business with deep roots in the community. We understand the unique challenges Potomac cars face, from the relentless summer sun to the abrasive winter salt. That’s why we provide the highest quality detailing services specifically designed to restore your car’s brilliance, shield it from the elements, and ensure it maintains its timeless elegance for years to come.
                </p>
                <p>
                    Our team of certified detailers is highly trained and experienced in all aspects of car restoration. We use only the finest car care products and equipment to achieve exceptional, long-lasting results. We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Potomac. Let Potomac Mobile Detailing become your trusted partner in keeping your car looking its absolute best!
                </p>
            </div>

            <section className="bg-white text-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold mb-8">Potomac Mobile Detailing FAQs: Your Potomac Car Detailing Questions Answered!</h2>
                    <p className="mb-4 text-left">
                        We understand you might have questions about our mobile detailing services in Rockville, MD. Here are some frequently asked questions to help you decide if Rockville Mobile Detailing is right for you:
                    </p>
                    <div className="space-y-6">
                        <li className="list-disc list-inside">
                            <span className="font-semibold">{`What sets Potomac Mobile Detailing apart from a car wash?`}</span><br />
                            <span className="block mt-1 ml-5">
                                Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                            </span>
                        </li>

                        <li className="list-disc list-inside">
                            <span className="font-semibold">{`How often should I get my car detailed in Potomac?`}</span><br />
                            <span className="block mt-1 ml-5">
                                The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6–12 months is recommended in Potomac, MD to maintain a fresh look and protect your car's finish.
                            </span>
                        </li>

                        <li className="list-disc list-inside">
                            <span className="font-semibold">{`Do you offer mobile detailing packages in Potomac?`}</span><br />
                            <span className="block mt-1 ml-5">
                                Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages in Potomac, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                            </span>
                        </li>

                        <li className="list-disc list-inside">
                            <span className="font-semibold">{`Can you restore leather seats in my car's interior?`}</span><br />
                            <span className="block mt-1 ml-5">
                                Yes! We offer leather conditioning services using proven techniques to revitalize your leather seats and restore their original luster.
                            </span>
                        </li>

                        <p className="font-semibold text-lg mb-1">
                            Let Potomac Mobile Detailing Rejuvenate the Elegance of Your Car!
                        </p>
                        <p>
                            We guarantee exceptional results delivered conveniently at your location.
                        </p>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold mt-4"
                        >
                            Get A Free Quote
                        </Link>
                    </div>

                    <div className="mt-20">
                        <h3 className="text-3xl font-bold mb-8 text-center">Potomac, MD Mobile Detailing Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-full h-48 bg-gray-200 rounded-lg shadow-md overflow-hidden"
                                >
                                    <img
                                        src={`/images/gallery/potomac-detailing-${(i + 1).toString().padStart(2, '0')}.jpg`}
                                        alt={`Potomac Detailing ${i + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold mt-4"
                        >
                            Get A Free Quote
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}