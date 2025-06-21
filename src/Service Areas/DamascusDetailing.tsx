import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function DamascusDetailing() {
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
            <ServiceHero header="Damascus Mobile Detailing: Professional Car Detailing at Your Doorstep" subheader="Welcome to Damascus Mobile Detailing, your one-stop shop for professional and meticulous car detailing services in Damascus, Maryland! We are passionate about exceeding your expectations and transforming the appearance of your car, all from the comfort of your driveway." url="https://placehold.co/1920x1080" />
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <Helmet>
                    <title>Damascus Mobile Detailing | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Experience the best in mobile detailing in Damascus, MD. Wellness Detailing brings professional interior and exterior car care to your doorstep."
                    />
                </Helmet>

                <h1 className="text-3xl font-bold text-center mb-6">
                    About Damascus Mobile Detailing
                </h1>

                <p className="mb-6 text-left max-w-3xl mx-auto">
                    Damascus Mobile Detailing is a locally owned and operated business with a passion for car care. We understand that your car is a valuable investment, and we take pride in providing the highest quality detailing services in Damascus, MD to restore its shine and protect it for years to come.
                </p>

                <p className="mb-6 text-left max-w-3xl mx-auto">
                    Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use only the best car care products and equipment to achieve exceptional, long-lasting results.
                </p>

                <p className="mb-6 text-left max-w-3xl mx-auto">
                    We are committed to providing our customers in Damascus with exceptional service, convenience, and competitive pricing. Let us help you keep your car looking its best!
                </p>

                <p className="mb-10 text-left max-w-3xl mx-auto">
                    <strong>Skip the hassle of taking your car to a detail shop - we come to you!</strong> Our experienced and certified detailers utilize top-of-the-line equipment and premium products to deliver exceptional results, leaving your car gleaming and protected.
                </p>

                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    <div className="w-[350px] h-[400px] bg-gray-200 border border-gray-300 rounded-lg" />
                    <div className="w-[350px] h-[400px] bg-gray-200 border border-gray-300 rounded-lg" />
                </div>

                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-12">
                <Helmet>
                    <title>Our Mobile Detailing Services in Damascus, MD | Wellness Detailing</title>
                    <meta name="description" content="Explore comprehensive mobile detailing services in Damascus, MD. We bring exceptional car care to your driveway." />
                </Helmet>

                <section className="space-y-4">
                    <h1 className="text-3xl font-bold text-center">Our Mobile Detailing Services in Damascus, MD</h1>
                    <p>
                        At Damascus Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Damascus, MD to cater to your car's specific needs and your budget. Here's a glimpse into what we can do for you:
                    </p>

                    <ul className="space-y-3 list-disc pl-5">
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

                    <p className="pt-4">
                        <strong>Damascus Mobile Detailing:</strong> Let us make your car shine!
                    </p>

                    <p>
                        Contact us today to request a free quote and experience the Damascus Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Damascus, MD.
                    </p>

                    <div className="pt-6 text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
                <Helmet>
                    <title>Damascus Mobile Detailing Service Areas | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Explore the full list of locations we serve beyond Damascus, MD. Get mobile car detailing at your doorstep."
                    />
                </Helmet>

                <section className="px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-start gap-8">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold mb-6">
                                    Damascus Mobile Detailing Service Areas: Bringing the Shine to Damascus, MD and Beyond!
                                </h2>

                                <p className="mb-4">
                                    Damascus Mobile Detailing proudly serves Damascus, Maryland, and the surrounding areas. We bring the convenience of mobile detailing to your driveway, saving you time and hassle. Not in Damascus? Don’t worry, we can still help! We service a wide range of locations in Maryland. Contact us today to see if your area is included!
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
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-20">
                <Helmet>
                    <title>Damascus Mobile Detailing FAQs | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Have questions about mobile car detailing in Damascus, MD? Find answers to common questions and learn about our gallery of recent work."
                    />
                </Helmet>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">
                        Damascus Mobile Detailing FAQs: Your Questions Answered!
                    </h2>
                    <p>
                        We understand you might have questions about our mobile detailing services in Damascus, MD. Here are some
                        frequently asked questions specific to Damascus Mobile Detailing to help you decide if we're the right fit
                        for you:
                    </p>

                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold mb-2">
                                How can a mobile detailing service be just as good as a shop detail in Damascus?
                            </p>
                            <p>
                                Our experienced detailers use top-of-the-line equipment and proven techniques to deliver exceptional
                                results on-site at your location in Damascus, MD. We eliminate the risk of scratches or damage that can
                                sometimes occur during transportation to a detail shop.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">
                                What if my car needs extensive work in Damascus?
                            </p>
                            <p>
                                No problem! We offer a variety of detailing packages in Damascus, MD, including restorative services to
                                tackle neglected interiors and minor paint imperfections. We can assess your car's needs and recommend
                                the perfect service to bring it back to life.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">
                                Can I schedule a mobile detail in Damascus short notice?
                            </p>
                            <p>
                                We recommend booking an appointment in advance to secure your desired time slot. However, we do our best
                                to accommodate last-minute requests whenever possible in the Damascus, MD area. Contact us today to see
                                if we can fit you in!
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">
                                Do you offer any eco-friendly detailing options in Damascus?
                            </p>
                            <p>
                                We are committed to environmental responsibility in Damascus, MD. We use eco-conscious products whenever
                                possible and prioritize water conservation techniques during our detailing processes.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">
                                How can I keep my car looking great between details in Damascus?
                            </p>
                            <p>
                                We can provide tips and recommendations for proper car care maintenance routines to extend the life of
                                your detail in Damascus, MD. Simple things like regular vacuuming and washing can make a big difference!
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="font-semibold mb-2">
                            Ready to experience the Damascus Mobile Detailing difference?
                        </p>
                        <p>
                            Request a free quote today and let us make your car shine! We guarantee exceptional results delivered
                            conveniently at your location in Damascus, MD or the surrounding areas. Let's get your car looking its best
                            again!
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>

                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold text-center">
                        Damascus, MD Mobile detailing Gallery
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {Array.from({ length: 24 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full h-48 bg-gray-200 border border-gray-400 flex items-center justify-center text-gray-500"
                            >
                                [ Image Placeholder {index + 1} ]
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link
                            to="/contact"
                            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                        >
                            Get A Free Quote
                        </Link>
                    </div>

                </section>

            </div>
            <QuoteForm />
        </>
    )
}