import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function LaurelDetailing() {
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
    const current = "Laurel MD Mobile Detailing"

    return (
        <>
            <ServiceHero header="Laurel Mobile Detailing: Revive Your Ride's Shine at Your Place" subheader="Welcome to Laurel Mobile Detailing, your one-stop shop for professional and meticulous car detailing in Laurel, MD! We combine a passion for exceeding expectations with the utmost convenience. Our mobile detailing services bring the shine directly to your driveway, transforming your car's appearance without the hassle of traveling to a detail shop." url="https://placehold.co/1920x1080" />
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-12">
                <Helmet>
                    <title>Laurel Mobile Detailing | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Laurel Mobile Detailing offers premium mobile car care services throughout Laurel, MD. Skip the stress—let us come to you!"
                    />
                </Helmet>

                <section className="space-y-6 text-center">
                    <h2 className="text-2xl font-bold">
                        Skip the wait and stress - Laurel Mobile Detailing comes to you!
                    </h2>
                    <p>
                        detailers are experts in their craft, wielding top-of-the-line equipment and premium products to deliver
                        exceptional results. We'll leave your car gleaming, protected, and ready to turn heads as you cruise through
                        Laurel
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-center">
                        About Laurel Mobile Detailing: Your Local Laurel Car Care Experts
                    </h2>
                    <p>
                        Laurel Mobile Detailing is a locally owned and operated business with deep roots in the Laurel community. We
                        understand the unique challenges Laurel drivers face, from harsh weather to relentless commutes. That's why
                        we're dedicated to providing the highest quality detailing services in Laurel, MD, tailored to restore your
                        car's shine and shield it from the elements, keeping it looking its best for years to come.
                    </p>
                    <p>
                        Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use
                        only the best car care products and equipment to achieve exceptional, long-lasting results. We are committed
                        to providing exceptional service, convenience, and competitive pricing to our valued customers in Laurel. Let
                        Laurel Mobile Detailing be your trusted partner in keeping your car looking amazing!
                    </p>
                </section>

                <section className="space-y-6 text-center">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <div className="w-full sm:w-1/2 h-48 bg-gray-200 border border-gray-400 flex items-center justify-center text-gray-500">
                            [ Image Placeholder 1 ]
                        </div>
                        <div className="w-full sm:w-1/2 h-48 bg-gray-200 border border-gray-400 flex items-center justify-center text-gray-500">
                            [ Image Placeholder 2 ]
                        </div>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors"
                    >
                        Get A Free Quote
                    </Link>
                </section>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-10">
                <h2 className="text-2xl font-bold text-center">
                    Services We Offer: Tailored Detailing Solutions for Your Laurel Car
                </h2>

                <div className="space-y-4">
                    <p>
                        At Laurel Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Laurel, MD to
                        cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's
                            interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning
                            included), hard surfaces, and windows, and remove any unwanted trash.
                        </li>
                        <li>
                            <strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy
                            schedules, including vacuuming, surface wiping, window cleaning, and trash removal.
                        </li>
                        <li>
                            <strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to
                            your car's interior with our professional smoke odor removal service.
                        </li>
                        <li>
                            <strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative
                            service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.
                        </li>
                        <li>
                            <strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash
                            and high-quality wax application.
                        </li>
                        <li>
                            <strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step
                            paint correction service. This process removes minor scratches, swirl marks, and oxidation for a
                            mirror-like finish.
                        </li>
                        <li>
                            <strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating,
                            offering superior gloss, scratch resistance, and easier maintenance for years to come.
                        </li>
                        <li>
                            <strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our
                            professional headlight restoration service.
                        </li>
                        <li>
                            <strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's
                            exterior, returning it to its original condition.
                        </li>
                        <li>
                            <strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road
                            debris with a virtually invisible paint protection film.
                        </li>
                        <li>
                            <strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap.
                            Choose from a variety of colors, designs, and finishes to express your unique style.
                        </li>
                    </ul>

                    <p>
                        <strong>Laurel Mobile Detailing: Let us make your car shine!</strong>
                    </p>
                    <p>
                        Contact us today to request a free quote and experience the Laurel Mobile Detailing difference. We guarantee
                        exceptional results, right at your convenience in Laurel, MD.
                    </p>
                </div>

                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Laurel Mobile Detailing Service Areas: Bringing the Shine Throughout Laurel, MD
                        </h2>
                        <p className="mb-4">
                            Laurel Mobile Detailing proudly serves Laurel, Maryland, and the surrounding areas. We understand your busy
                            lifestyle, and that's why we bring the convenience of mobile detailing to your driveway or workplace.
                            Whether you're in the heart of Laurel or call a nearby community home, we can help you keep your car looking
                            its best.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {locations.map((location) => {
                                const to = location.toLowerCase().replace(/\s+/g, '');
                                const isActive = location === current;
                                return (
                                    <li key={location}>
                                        <Link
                                            to={`/${to}`}
                                            className={`transition-colors ${isActive
                                                    ? 'text-orange-500 font-semibold'
                                                    : 'text-gray-700 hover:text-orange-500'
                                                }`}
                                        >
                                            {location}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <p className="mb-2">
                            Not sure if we service your specific area?
                        </p>
                        <p>
                            Contact us today! We are always expanding our service coverage in Laurel, MD and surrounding areas. We'd be
                            happy to discuss your detailing needs and answer any questions you may have.
                        </p>
                    </div>

                    <div className="w-full h-[300px] bg-gray-200 border rounded flex items-center justify-center text-gray-500">
                        Image Placeholder
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <h2 className="text-2xl font-bold mb-6">
                    Laurel Mobile Detailing FAQs: Your Laurel Car Detailing Questions Answered!
                </h2>

                <p className="mb-4">
                    We understand you might have questions about our mobile detailing services in Laurel, MD. Here are some frequently asked questions to help you decide if Laurel Mobile Detailing is right for you:
                </p>

                <div className="space-y-6">
                    <div>
                        <p className="font-semibold">What sets Laurel Mobile Detailing apart from a car wash?</p>
                        <p>
                            Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">How often should I get my car detailed in Laurel?</p>
                        <p>
                            The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Laurel, MD to maintain a fresh look and protect your car's finish.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">Do you offer mobile detailing packages in Laurel?</p>
                        <p>
                            Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages in Laurel, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">Can you remove smoke odors from my car's interior in Laurel?</p>
                        <p>
                            Yes! We offer professional smoke odor removal services using proven techniques to eliminate lingering odors and restore a fresh scent to your car's interior in Laurel, MD.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <h2 className="text-2xl font-bold mb-8">
                    Laurel, MD Mobile detailing Gallery
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 24 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full h-48 border bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
                        >
                            Image {index + 1}
                        </div>
                    ))}
                </div>

            </div>
            <div className="text-center">
                <Link
                    to="/contact"
                    className="inline-block mb-20 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors"
                >
                    Get A Free Quote
                </Link>
            </div>
            <QuoteForm />
        </>
    )
}