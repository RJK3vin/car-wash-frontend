import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";

export default function PoolesvilleDetailing() {
    return (
        <>
            <ServiceHero header="Professional Mobile Car Detailing in Poolesville, MD" subheader="Welcome to Wellness Detailing, your one-stop shop for professional car detailing services in Poolesville, MD! We are passionate about exceeding your expectations and transforming the appearance of your car." url="https://placehold.co/1920x1080" />
            <Helmet>
                <title>Poolesville MD Mobile Detailing | Wellness Detailing</title>
                <meta
                    name="description"
                    content="Professional mobile car detailing services in Poolesville, MD by Wellness Detailing. Interior & exterior detailing, odor removal, and more!"
                />
            </Helmet>

            <section className="px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-6">Our Services in Poolesville, MD</h1>
                <p className="max-w-3xl mx-auto mb-8 text-left">
                    We offer a wide range of car detailing services in Poolesville, MD, to cater to your specific needs and budget. Here's a glimpse into what we can do for your car:
                </p>
                <ul className="max-w-3xl mx-auto mb-12 list-disc list-inside text-left space-y-3">
                    <li><strong>Full Detail:</strong> Our most comprehensive service includes a thorough cleaning, polishing, and protection of both your car's interior and exterior. This service is ideal for restoring a neglected car or maintaining a showroom shine.</li>
                    <li><strong>Mini Detail:</strong> Short on time? Our mini detail is a perfect option for a quick interior refresh, including vacuuming, surface wiping, window cleaning, and trash removal.</li>
                    <li><strong>Interior Detail:</strong> Focus on the inside of your car with our meticulous interior detailing service. We clean carpets, upholstery, leather seats (conditioning included), hard surfaces, windows, and remove any unwanted trash.</li>
                    <li><strong>Exterior Detail:</strong> Give your car's exterior the TLC it deserves with our exterior detailing service. This service includes a thorough wash, decontamination (optional add-on), paint correction (optional add-on), waxing, wheel and tire cleaning, and window cleaning.</li>
                    <li><strong>Restorative Interior Cleaning:</strong> Deep down revival for neglected interiors! This comprehensive service tackles embedded dirt, grime, and stains, bringing your car's interior back to life.</li>
                    <li><strong>Smoke Odor Removal:</strong> Eliminate stubborn smoke odors and restore a fresh, clean scent to your car's interior with our professional smoke odor removal service.</li>
                    <li><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our headlight restoration service.</li>
                </ul>
                <div className="mb-12 flex justify-center gap-6">
                    <img
                        className="h-[300px] w-[500px] bg-gray-200 border"
                        alt="Service example"
                    />
                    <img
                        className="h-[300px] w-[500px] bg-gray-200 border"
                        alt="Service example"
                    />
                </div>
                <Link
                    to="/contact"
                    className="inline-block rounded bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
                >
                    Get A Free Quote
                </Link>
            </section>

            <section className="px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">We proudly serve Poolesville, MD and surrounding areas!</h2>
                <p className="max-w-3xl mx-auto mb-8 text-left">
                    Looking for exceptional car detailing services near you? Look no further than Wellness Detailing! We conveniently provide mobile detailing services throughout Poolesville, MD and the surrounding areas.
                </p>
                <p>Here are some of the nearby communities we frequently serve:</p>
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <ul className="space-y-3 text-left">
                        {[
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
                            "Olney MD Mobile Detailing",
                        ].map((location) => (
                            <li key={location}>
                                <Link
                                    to={`/${location.toLowerCase().replace(/\s+/g, "")}`}
                                    className={`transition ${location === "Poolesville MD Mobile Detailing"
                                        ? "text-orange-500 font-semibold"
                                        : "text-gray-700 hover:text-orange-500"
                                        }`}
                                >
                                    {location}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <img className="mx-auto h-[300px] w-[500px] bg-gray-200 border" alt="Service area map" />
                    </div>
                </div>
                <p className="mb-6">Not sure if we service your specific area?</p>
                <p className="mb-6">Contact us today! We are always expanding our service coverage in Poolesville, MD and surrounding areas. We'd be happy to discuss your detailing needs and answer any questions you may have.</p>
            </section>

            <section className="px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Poolesville, MD Detailing FAQs</h2>
                <p>At Wellness Detailing, we understand you might have questions about our professional car detailing services in Poolesville, MD. Here are answers to some of the most frequently asked questions to help you decide if detailing is right for your car and to choose the service that best suits your needs:</p>
                <div className="max-w-3xl mx-auto text-left space-y-6">
                    <div>
                        <h2>General Detailing Services:</h2>
                        <p className="font-bold">What is car detailing, and how is it different from a car wash?</p>
                        <p>
                            A car detail is a much more comprehensive cleaning process than a regular car wash. Detailing goes beyond just soap and water. Our detailers meticulously clean, polish, and protect both the interior and exterior of your car, restoring its shine, removing imperfections, and creating a flawless finish.
                        </p>
                        <p></p>
                    </div>
                    <div>
                        <p className="font-bold">What are the benefits of detailing my car?</p>
                        <p>There are numerous benefits to detailing your car: * Enhanced Appearance: Detailing revitalizes your car's look, removes blemishes, and makes it look brand new again. * Increased Value: A well-maintained car retains its resale value for longer. * Protection: Detailing services apply protective waxes and coatings that shield your car's paint from harmful elements like UV rays and environmental contaminants. * Clean and Healthy Interior: Interior detailing removes dust, allergens, and dirt, creating a healthier and more enjoyable driving experience.</p>
                    </div>
                    <div>
                        <p className="font-bold">How often should I get my car detailed in Poolesville, MD?</p>
                        <p>
                            The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail is recommended every 6-12 months. More frequent detailing might be needed if you park outdoors, drive on dusty roads, or have pets in your car.
                        </p>
                    </div>
                    <div>
                        <h2>Mobile Detailing Services:</h2>
                        <p className="font-bold">Do you offer mobile detailing services in Poolesville, MD?</p>
                        <p>
                            Absolutely! We conveniently bring our state-of-the-art detailing equipment and expertise directly to your location in Poolesville, MD, saving you valuable time.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Is mobile detailing just as effective as getting my car detailed at a shop?</p>
                        <p>
                            Yes! Our mobile detailing services in Poolesville, MD, are just as effective as shop-based detailing. We use top-of-the-line equipment and high-quality products to achieve exceptional results, no matter your location.
                        </p>
                    </div>
                    <div>
                        <h2>Detailing Packages & Services: </h2>
                        <p className="font-bold">What detail package should I choose?</p>
                        <p>
                            We offer a variety of detail packages in Poolesville, MD, to suit your specific needs and budget. Browse our packages online (link to detailing service packages page) or contact us for a free quote (link to quote request form) and our detailing experts will be happy to recommend the perfect service for your car.
                        </p>
                    </div>
                    <div>
                        <p>Still have questions? We're here to help!</p>
                        <p>Contact Wellness Detailing in Poolesville, MD today! We are happy to answer any questions you may have about our services or discuss your car's specific detailing needs.</p>
                        <p>Let's get your car looking its best!</p>
                    </div>
                </div>
                <div className="mt-8">
                    <Link
                        to="/contact"
                        className="inline-block rounded bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            <section className="px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Poolesville, MD Mobile Detailing Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-[200px] w-full bg-gray-200 border rounded" />
                    ))}
                </div>
                <div className="mt-8">
                    <Link
                        to="/contact"
                        className="inline-block rounded bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            <QuoteForm />
        </>
    )
}
