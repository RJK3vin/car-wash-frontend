import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function FullInteriorCleaning() {
    return (
        <>
            <ServiceHero header="Refresh Your Ride from the Inside Out: Interior Detailing by Wellness Detailing" subheader="Restore your car's interior to its original luster with out meticulous detailing service. We banish dirt, grime, and stains, leaving your car feeling fresh, clean, and sanitized." url="https://placehold.co/1920x1080" />
            <section className="px-4 py-12 md:px-12 lg:px-20 space-y-12">
                <Helmet>
                    <title>Interior Detailing | Wellness Detailing</title>
                    <meta name="description" content="Transform your car's interior with Wellness Detailing's comprehensive and professional interior detailing services." />
                </Helmet>
                <div className="text-center">
                    <h1 className="text-3xl font-bold">More Than Just a Vacuum: The Wellness Detailing Difference</h1>
                </div>
                <p className="text-center max-w-3xl mx-auto">A clean car interior is essential for comfort and hygiene. But a simple vacuuming doesn't suffice. Our comprehensive interior detailing service tackles every nook and cranny, reviving your car's interior to its former glory.</p>
                <div className="max-w-4xl mx-auto space-y-4 text-left">
                    <li><strong>Deep Cleaning:</strong> We meticulously vacuum every surface, removing dust, crumbs, and debris from carpets, upholstery, and crevices.</li>
                    <li><strong>Stain Removal:</strong> Our cleaning process targets and removes common stains like coffee spills, food residue, and pet accidents.</li>
                    <li><strong>Surface Revitalization:</strong> We clean and condition upholstery, leather seats, plastic surfaces, and trim, restoring their original shine and suppleness.</li>
                    <li><strong>Glass Clarity:</strong> Interior windows are thoroughly cleaned, ensuring a clear and streak-free view.</li>
                    <li><strong>Fresh Scent:</strong> Our service eliminates unpleasant odors and leaves your car smelling fresh and clean.</li>
                    <li><strong>Steam Sterilization (Optional):</strong> For an extra layer of sanitation, we offer optional steam sterilization to eliminate bacteria and allergens.</li>
                </div>

                <div className="flex justify-center gap-6 pt-6">
                    {[1, 2].map((num) => (
                        <div
                            key={num}
                            className="w-[400px] h-[500px] border-2 border-gray-300 rounded-md overflow-hidden flex items-center justify-center bg-gray-100"
                        >
                            <img
                                src={`https://placehold.co/256x160?text=Image+${num}`}
                                alt={`Interior Detail ${num}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Get A Free Quote</Link>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold">Interior Deluxe Package: A Deep Clean for a Luxurious Feel</h2>
                </div>
                <p className="text-center max-w-2xl mx-auto">Our most popular package, the Interior Deluxe, provides a comprehensive clean that leaves your car's interior feeling brand new. Here's what's included:</p>
                <div className="max-w-4xl mx-auto space-y-4 text-left">
                    <li><strong>Full Interior & Trunk Vacuum:</strong> We meticulously vacuum every surface, removing even the most stubborn dirt and debris.</li>
                    <li><strong>Cleaning & Conditioning:</strong> Steering wheel, console, plastics, upholstery - everything is thoroughly cleaned and conditioned to restore shine and protect against future wear.</li>
                    <li><strong>Interior Glass Cleaning:</strong> Crystal-clear windows ensure optimal visibility and a polished look.</li>
                    <li><strong>Floor Pedals Cleaned:</strong> We don't forget the often-neglected pedals!</li>
                    <li><strong>Leather Treatment (if applicable):</strong> Leather seats are cleaned and conditioned with premium leather care products to maintain their suppleness and prevent cracking.</li>
                    <li><strong>Cloth Seats Deep Clean:</strong> Cloth seats are shampooed, steam cleaned, and extracted for a deep and thorough clean.</li>
                    <li><strong>Carpet Revival:</strong> Carpets receive the same deep-cleaning treatment as cloth seats, removing dirt, stains, and allergens.</li>
                    <li><strong>Mat Treatment:</strong> Protecting rubber mats are cleaned and conditioned to maintain their appearance.</li>
                    <li><strong>Seat Rail Cleaning:</strong> We clean those hard-to-reach seat rails for a truly comprehensive clean.</li>
                    <li><strong>Headliner Spot Removal:</strong> We target and remove minor stains from the headliner.</li>
                    <br></br>
                    <h2 className="text-3xl font-bold">Upgrade Your Clean with Optional Add-Ons</h2>
                    <p className="text-left max-w-1xl mx-auto">We offer various add-on services to tailor the detailing experience to your specific needs:</p>
                    <li><strong>Basic Wash:</strong> Enhance the interior detailing with a comprehensive exterior wash.</li>
                    <li><strong>Engine Detail:</strong> Restore your engine's appearance and performance with a professional cleaning.</li>
                    <li><strong>Pet Hair Removal:</strong> Our specialized techniques effectively remove pet hair from your car's interior.</li>
                    <li><strong>Headlight Restoration:</strong> Improve nighttime visibility and safety with restored headlights.</li>
                </div>

                <div className="text-center">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Get A Free Quote</Link>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold">The Art of Interior Transformation: Our Interior Detailing Process at Wellness Detailing</h2>
                    <br></br>
                    <p className="max-w-3xl mx-auto">At Wellness Detailing, we take pride in restoring car interiors to their pristine condition. Here's a detailed look at our meticulous process, ensuring a clean, fresh, and healthy environment inside your car:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">1</div>
                        <p>Pre-Cleaning Inspection</p>
                    </div>
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">2</div>
                        <p>Thorough Vacuuming</p>
                    </div>
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">3</div>
                        <p>Stain Removal & Spot Treatment</p>
                    </div>
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">4</div>
                        <p>Deep Cleaning & Surface Revitalization</p>
                    </div>
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">5</div>
                        <p>Optional Steam Sterilization</p>
                    </div>
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">6</div>
                        <p>Final Touches & Quality Check</p>
                    </div>
                    <div>
                        <div className="text-orange-500 font-bold text-xl mb-2">7</div>
                        <p>Delighting You with a Fresh & Clean Interior</p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Get A Free Quote</Link>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold">Interior Detailing FAQs: Unveiling the Clean</h2>
                    <br></br>
                    <p className="max-w-4xl mx-auto">At Wellness Detailing, we understand you might have questions about our comprehensive interior detailing service. Here are answers to some of the most frequently asked questions to help you make an informed decision:</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 text-left">
                    <div>
                        <p className="font-semibold text-lg mb-2">1. What’s included in the Interior Deluxe package?</p>
                        <p className="mb-2">Our Interior Deluxe package is our most popular option and includes a deep clean of all interior surfaces:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Full interior and trunk vacuuming</li>
                            <li>Cleaning and conditioning of upholstery, leather seats (if applicable), plastic surfaces, and trim</li>
                            <li>Interior window cleaning</li>
                            <li>Floor pedal cleaning</li>
                            <li>Leather treatment (for leather seats)</li>
                            <li>Cloth seat shampooing, steam cleaning, and extraction</li>
                            <li>Carpet shampooing, steam cleaning, and extraction</li>
                            <li>Protecting rubber mat cleaning and conditioning</li>
                            <li>Seat rail cleaning</li>
                            <li>Headliner spot removal</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">2. Can I customize the interior detailing service?</p>
                        <p>
                            Absolutely! We understand that every car and its cleaning needs are unique. You can choose from our pre-designed packages or create a custom service to fit your specific requirements. We offer various add-on services like basic wash, engine detail, pet hair removal, and headlight restoration.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">3. How long does an interior detailing service take?</p>
                        <p>
                            The duration depends on the size and condition of your car’s interior. A typical Interior Deluxe service takes 2-4 hours, while a more comprehensive service with add-ons may take longer.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">4. What kind of cleaning products do you use?</p>
                        <p>
                            We use only high-quality, professional-grade cleaning products that are safe and effective for various interior materials like leather, cloth, and plastics.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">5. Do you offer mobile detailing services?</p>
                        <p>
                            Yes! We conveniently bring our interior detailing services directly to your location, saving you valuable time.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">6. What if I have stubborn stains or pet hair in my car?</p>
                        <p>
                            We have specialized cleaning techniques and products to tackle even tough stains and remove pet hair effectively.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">7. Is interior detailing good for my car’s health?</p>
                        <p>
                            Absolutely! Regular interior detailing removes dust, allergens, and bacteria, creating a cleaner and healthier environment for you and your passengers.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg mb-2">8. How often should I get my car’s interior detailed?</p>
                        <p>
                            The frequency depends on your usage habits. For most drivers, we recommend interior detailing every 3–6 months, or more frequently if you have pets or tend to spill things in your car.
                        </p>
                    </div>
                </div>


                <div className="text-center mt-8">
                    <p className="font-semibold text-lg max-w-2xl mx-auto">Ready to transform your car's interior into a fresh and clean haven? Schedule Your Interior Detailing Appointment Today!</p>
                    <br></br>
                    <Link to="/contact" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Get A Free Quote</Link>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold">Interior Detailing Gallery</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {[...Array(14)].map((_, i) => (
                        <div key={i} className="border h-[200px] w-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                            Image {i + 1}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link to="/contact" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Get A Free Quote</Link>
                </div>
            </section>

            <QuoteForm />
        </>
    )
}