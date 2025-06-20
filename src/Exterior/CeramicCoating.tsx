import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function CeramicCoating() {
    return (
        <>
            <ServiceHero header="Ultimate Paint Protection: Ceramic Coating by Wellness Detailing" subheader="Safeguard your car's paintwork from everyday wear and tear with our professional ceramic coating installation. Maintain a showroom shine and unparalleled protection for years to come." url="https://placehold.co/1920x1080" />
            <section className="space-y-16 px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto text-gray-800">
                <Helmet>
                    <title>Ceramic Coating | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Learn about ceramic coating technology and how it protects your vehicle. Explore our expert services, benefits, and FAQs."
                    />
                </Helmet>
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    <img
                        src="/placeholder1.jpg"
                        alt="Ceramic coating demo"
                        className="w-full object-cover rounded-lg shadow md:h-[120%] md:self-start"
                    />
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">Unveiling the Magic: Ceramic Coating Explained</h1>
                        <p>
                        Ceramic coating isn't just a protectant; it's a marvel of nanotechnology. At its core lies a special blend of silicon dioxide (SiO2) nanoparticles, which are essentially microscopic building blocks. These tiny particles bond together to create a hard, ultra-thin layer of ceramic protection on your car's paintwork. Imagine an invisible suit of armor, meticulously crafted on a molecular level!
                        </p>
                    </div>
                </section>
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                        Get A Free Quote
                    </Link>
                </div>
                <section className="space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">
                        Benefits of Ceramic Coating: Invest in Unmatched Protection for Your Car
                    </h2>
                    <div>
                        <p>Traditional waxes and sealants offer a layer of protection, but they wear down quickly and require frequent reapplication. Ceramic coating, on the other hand, is a revolutionary technology that provides unparalleled benefits for your car's paintwork:</p>
                    </div>
                    <div className="space-y-4">
                        <p><strong>Ultimate Paint Protection:</strong> Ceramic coating creates a hard, ceramic shell that safeguards your car's paint from scratches, chips, and environmental contaminants. Think of it as an invisible shield deflecting flying rocks, road debris, and everyday wear and tear. This translates to a longer lifespan for your car's flawless finish.</p>
                        <p><strong>Preserves Showroom Shine:</strong> Sunlight's harsh UV rays can wreak havoc on your car's paint, causing fading and discoloration. Ceramic coating acts as a protective barrier, absorbing or reflecting UV rays. This not only preserves the vibrancy of your car's original paint color but also maintains that showroom shine for years to come.</p>
                        <p><strong>Enhanced Durability:</strong> Unlike waxes and sealants that break down over time, ceramic coating boasts exceptional longevity. With proper care, a single ceramic coating application can last for several years, offering long-lasting protection and saving you time and money on repeated applications.</p>
                        <p><strong>Hydrophobic Properties & Easier Maintenance:</strong> Ceramic coating creates a hydrophobic surface, meaning it repels water like magic! Rainwater beads up and rolls right off, minimizing water spots and simplifying car washing. Dirt and grime also have a harder time sticking to the surface, making maintenance significantly easier.</p>
                        <p><strong>Self-Healing Properties (Optional Feature):</strong> Certain advanced ceramic coatings boast self-healing properties. By applying moderate heat, these coatings can minimize the appearance of minor scratches, keeping your car's paint looking flawless for even longer.</p>
                        <p><strong>Chemical Resistance:</strong> Ceramic coating offers superior protection against harsh chemicals like bird droppings, insect splatter, and road salts. This added layer of defense helps prevent these contaminants from etching or staining your car's paint.</p>
                        <p><strong>Gloss Enhancement:</strong> High-quality ceramic coatings can actually enhance the gloss and shine of your car's paint, leaving a deeper, richer finish compared to traditional waxes.</p>
                        <p>By investing in ceramic coating, you're not just protecting your car's paint; you're also making a long-term investment that saves you time and money on car maintenance while preserving the beauty and value of your vehicle.</p>
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-8 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Why Choose Wellness Detailing for Ceramic Coating Installation?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        {[
                            {
                                title: "Expert Installation",
                                desc:
                                    "Our certified technicians are highly trained and experienced in applying ceramic coating with precision and care.",
                            },
                            {
                                title: "Premium Ceramic Coating Film",
                                desc:
                                    "We use only top-of-the-line ceramic coating products from trusted brands, ensuring superior protection and clarity.",
                            },
                            {
                                title: "Mobile Convenience",
                                desc:
                                    "We bring the ceramic coating installation service directly to you, saving you valuable time and effort.",
                            },
                            {
                                title: "Customer Satisfaction Guaranteed",
                                desc:
                                    "We stand behind our work and offer a satisfaction guarantee on all ceramic coating installations.",
                            },
                        ].map(({ title, desc }, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2 text-gray-800">
                                <CheckCircle className="text-blue-600 w-6 h-6" />
                                <p className="font-medium">{title}</p>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">
                        Ceramic Coating FAQs: Get Your Questions Answered!
                    </h2>
                    <p>Here at Wellness Detailing, we understand you might have questions about ceramic coating. We've compiled answers to some of the most frequently asked questions to help you make an informed decision:</p>
                    <div className="space-y-6">
                        <p>
                            <strong>1. What is ceramic coating?</strong>
                            <br />
                            <span className="mt-2 block">
                                Ceramic coating is a liquid applied to your car's paintwork that cures into a hard, ultra-thin layer of ceramic protection. It acts as a barrier against scratches, UV rays, and environmental contaminants.
                            </span>
                        </p>
                        <p>
                            <strong>2. How is ceramic coating different from wax or sealant?</strong>
                            <br />
                            <span className="mt-2 block">
                                Wax and sealant offer temporary protection that needs frequent reapplication. Ceramic coating, however, is a semi-permanent solution that can last for several years with proper care. It offers superior protection against scratches, UV rays, and chemicals.
                            </span>
                        </p>
                        <p>
                            <strong>3. What are the benefits of ceramic coating?</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-left">
                                <li>Ultimate paint protection from scratches, chips, and contaminants</li>
                                <li>Preserves showroom shine and protects against UV rays</li>
                                <li>Enhanced durability lasting for several years</li>
                                <li>Hydrophobic surface repels water and simplifies car washing</li>
                                <li>Self-healing properties (on certain coatings) minimize minor scratches</li>
                                <li>Chemical resistance against harsh chemicals and stains</li>
                                <li>Gloss enhancement for a deeper, richer finish</li>
                            </ul>
                        </p>
                        <p>
                            <strong>4. How long does ceramic coating last?</strong>
                            <br />
                            <span className="mt-2 block">
                                With proper care, ceramic coating can last anywhere from 3 to 7 years. Factors affecting longevity include the quality of the coating, proper installation, and maintenance practices.
                            </span>
                        </p>
                        <p>
                            <strong>5. How much does ceramic coating cost?</strong>
                            <br />
                            <span className="mt-2 block">
                                The cost of ceramic coating varies depending on the size of your car, the chosen ceramic coating product, and the number of coats applied. We offer free consultations to assess your needs and provide a transparent quote.
                            </span>
                        </p>
                        <p>
                            <strong>6. Will ceramic coating damage my car's paint?</strong>
                            <br />
                            <span className="mt-2 block">
                                No, professional ceramic coating application using high-quality products is safe for your car's paint. In fact, it provides a protective layer that shields the original paint from damage.
                            </span>
                        </p>
                        <p>
                            <strong>7. How do I care for my car after ceramic coating?</strong>
                            <br />
                            <span className="mt-2 block">
                                We'll provide detailed aftercare instructions to optimize the performance and longevity of your ceramic coating. Generally, hand washing with mild soap and water is recommended. Avoid using harsh chemicals or automated car washes.
                            </span>
                        </p>
                        <p>
                            <strong>8. Can I apply ceramic coating myself?</strong>
                            <br />
                            <span className="mt-2 block">
                                While ceramic coating kits are available, professional application is highly recommended. Our experienced technicians ensure proper surface preparation, even application, and optimal results.
                            </span>
                        </p>
                    </div>
                    <div className="text-center font-semibold">
                        Ready to experience the numerous benefits of ceramic coating? Schedule a Free Consultation with Wellness Detailing today!
                    </div>

                    <div className="text-center pt-2">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
            </section>
            <QuoteForm />
        </>
    )
}