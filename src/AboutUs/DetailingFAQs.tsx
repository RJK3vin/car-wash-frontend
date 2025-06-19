import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"
import { Link } from "react-router-dom"

export default function DetailingFAQs() {
    return (
        <>
            <GalleryHero header="Detailing FAQ" button="Get A Free Quote" url="https://placehold.co/1920x1080" loc="contact" />

            <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Detailing FAQs: Unveiling a Gleaming Ride
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg text-center">
                        At Wellness Detailing, we understand you might have questions about our professional car detailing services.
                        Here are answers to some of the most frequently asked questions to help you decide if detailing is right for
                        your car and to choose the service that best suits your needs:
                    </p>

                    <div className="space-y-6 text-gray-700 text-base">

                        <h3 className="text-xl font-semibold mt-8">General Detailing Services:</h3>

                        <div>
                            <p><strong>What is car detailing?</strong></p>
                            <p>Car detailing is a comprehensive cleaning, polishing, and protection process for both the interior and exterior of your car. It goes beyond a regular car wash and provides a much deeper clean and a flawless finish.</p>
                        </div>

                        <div>
                            <p><strong>What are the benefits of detailing my car?</strong></p>
                            <p>There are numerous benefits to detailing your car: * Enhanced Appearance: Detailing restores your car’s shine, removes imperfections, and makes it look brand new again. * Improved Value: A well-maintained car retains its resale value for longer. * Protection: Detailing services apply protective waxes and coatings that shield your car’s paint from harmful elements. * Clean and Healthy Interior: Interior detailing removes allergens, dust, and dirt, creating a healthier and more enjoyable driving experience.</p>
                        </div>

                        <div>
                            <p><strong>How often should I get my car detailed?</strong></p>
                            <p>The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail is recommended every 6-12 months. More frequent detailing might be needed if you park outdoors, drive on dusty roads, or have pets in your car.</p>
                        </div>

                        <div>
                            <p><strong>What is the difference between a full detail and an interior detail?</strong></p>
                            <p>A full detail includes cleaning, polishing, and protecting both the interior and exterior of your car. An interior detail focuses solely on the car’s inside, cleaning carpets, upholstery, dashboards, and other interior surfaces.</p>
                        </div>

                        <div>
                            <p><strong>Do you offer mobile detailing services?</strong></p>
                            <p>Absolutely! We conveniently bring our detailing expertise directly to your location, saving you valuable time.</p>
                        </div>

                        <h3 className="text-xl font-semibold mt-8">Exterior Detailing:</h3>

                        <div>
                            <p><strong>What does a typical exterior detail include?</strong></p>
                            <p>A typical exterior detail involves a thorough wash, decontamination (optional add-on), paint correction (optional add-on), waxing, wheel and tire cleaning, and window cleaning.</p>
                        </div>

                        <div>
                            <p><strong>What is paint correction?</strong></p>
                            <p>Paint correction is a multi-step process that removes minor scratches, swirl marks, and oxidation from the paintwork. This restores the paint’s clarity and achieves a mirror-like finish.</p>
                        </div>

                        <div>
                            <p><strong>Do you use scratch removers?</strong></p>
                            <p>We use a variety of polishing compounds and techniques to remove minor imperfections. In some cases, deeper scratches may require more advanced techniques or touch-up paint, which we can discuss during the pre-detailing inspection.</p>
                        </div>

                        <h3 className="text-xl font-semibold mt-8">Interior Detailing:</h3>

                        <div>
                            <p><strong>What does a typical interior detail include?</strong></p>
                            <p>A typical interior detail involves vacuuming carpets, upholstery, and crevices; cleaning and conditioning leather seats (if applicable); wiping down hard surfaces like dashboards and door panels; cleaning windows; and removing trash.</p>
                        </div>

                        <div>
                            <p><strong>Can you remove pet hair?</strong></p>
                            <p>Absolutely! We have specialized tools and techniques to effectively remove pet hair from your car’s interior.</p>
                        </div>

                        <div>
                            <p><strong>What if I have upholstery stains?</strong></p>
                            <p>Our detailers are experienced in removing common stains like coffee spills, food residue, and pet accidents. However, the success rate depends on the severity and age of the stain.</p>
                        </div>

                        <h3 className="text-xl font-semibold mt-8">Pricing and Appointments:</h3>

                        <div>
                            <p><strong>How much does a car detail cost?</strong></p>
                            <p>The cost depends on the size of your car, the level of service you choose (full detail vs. interior only), and any add-on services you select (paint correction, decontamination, etc.). We offer a variety of packages and a la carte services to fit your needs and budget.</p>
                        </div>

                        <div>
                            <p><strong>How can I schedule an appointment?</strong></p>
                            <p>You can conveniently schedule an appointment online through our website or by contacting Wellness Detailing directly.</p>
                        </div>
                        <div>
                            <p>We look forward to transforming your car’s appearance and making it shine like new!</p>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/contact"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded shadow "
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}