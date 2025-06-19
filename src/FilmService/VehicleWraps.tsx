import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function VehicleWraps() {
    return (
        <>
            <ServiceHero
                header="Unleash Your Creativity: Custom Car Wraps by Wellness Detailing"
                subheader="Turn your car into a rolling masterpiece with out high-quality car wraps. From full vehicle wraps to partial accents, we offer nedless design possibilities and expert installation to bring your vision to life."
                url="https://placehold.co/1920x1080"
            />
            <div className="space-y-16 px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto">
                <Helmet>
                    <title>Car Wrap Services | Wellness Detailing</title>
                    <meta name="description" content="Personalize your car with Wellness Detailing's professional car wrap services. Explore full wraps, partial designs, fleet branding, and more." />
                </Helmet>
                <section className="space-y-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="text-3xl font-bold text-center">Unveiling the Power of Car Wraps: Express Yourself & Make a Statement</h1>
                        <p className="text-left">Car wraps are no longer just for company vehicles. They've become a popular way for car enthusiasts and individuals to personalize their cars and stand out from the crowd. Here at Wellness Detailing, we offer a variety of car wrap solutions to meet your unique needs:</p>
                        <ul className="list-disc pl-5 space-y-2 text-left">
                            <li><strong>Full Car Wraps:</strong> Transform your car's entire exterior with a complete custom design. Whether you envision a sleek solid color, a vibrant graphic design, or a realistic photo wrap, we can make it happen.</li>
                            <li><strong>Partial Car Wraps:</strong> Opt for a more subtle touch with partial wraps that cover specific areas like the hood, roof, or trunk. This is a great way to add accents, stripes, or logos.</li>
                            <li><strong>Fleet Branding:</strong> Enhance brand awareness and create a cohesive look for your company vehicles with professional fleet wraps.</li>
                        </ul>
                        <div className="pt-4 text-center">
                            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                                Get A Free Quote
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <img src="/car-wrap-intro.png" alt="Car wrap showcase" className="w-full h-[400px] object-cover rounded-lg shadow" />
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">Benefits of Car Wraps</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col items-center space-y-2">
                            <CheckCircle className="w-10 h-10 text-orange-500" />
                            <p className="font-semibold text-lg">Ultimate Customization</p>
                            <p>Car wraps offer endless design possibilities. Express your style, promote your brand, or simply create a one-of-a-kind car.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <CheckCircle className="w-10 h-10 text-orange-500" />
                            <p className="font-semibold text-lg">Paint Protection</p>
                            <p>High-quality car wrap vinyl acts as a shield, protecting your car's original paint from scratches, chips, and UV rays.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <CheckCircle className="w-10 h-10 text-orange-500" />
                            <p className="font-semibold text-lg">Removable & Changeable</p>
                            <p>Unlike permanent paint jobs, car wraps are removable and changeable without damaging the original paint.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <CheckCircle className="w-10 h-10 text-orange-500" />
                            <p className="font-semibold text-lg">Increased Resale Value</p>
                            <p>A well-designed car wrap can increase your resale value by making your vehicle stand out from similar models.</p>
                        </div>
                    </div>
                    <div className="text-center pt-2">
                        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">The Car Wrap Process at Wellness Detailing</h2>
                    <p className="text-center max-w-3xl mx-auto">Transforming your car with a car wrap is a collaborative and personalized process. Here's a glimpse into what you can expect when you choose Wellness Detailing:</p>
                    <ol className="list-decimal space-y-4 pl-5 max-w-4xl mx-auto text-left">
                        <li><strong>Free Design Consultation:</strong> Our design team will discuss your vision, understand your preferences, and explore various design options. We can even create mockups to help you visualize your dream car wrap.</li>
                        <li><strong>Design Approval:</strong> Once you're happy with the design, we'll finalize it and prepare the high-quality wrap vinyl for printing.</li>
                        <li><strong>Surface Preparation:</strong> Our detail experts will meticulously clean and prep your car's exterior to ensure a flawless application and optimal adhesion.</li>
                        <li><strong>Expert Wrap Installation:</strong> Our experienced installers will meticulously apply the car wrap using specialized tools and techniques. This ensures a smooth, bubble-free finish that conforms perfectly to your car's curves.</li>
                        <li><strong>Final Inspection & Aftercare:</strong> After installation, our team will thoroughly inspect the car wrap for any imperfections. We'll also provide detailed aftercare instructions to ensure the longevity and optimal performance of your car wrap.</li>
                    </ol>
                    <p className="text-center max-w-3xl mx-auto">By partnering with Wellness Detailing, you can be confident in a smooth, stress-free car wrap experience that delivers stunning results and exceeds your expectations.</p>
                    <div className="text-center pt-2">
                        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Get Your Car Wrap Questions Answered!</h2>
                    <p>We understand you might have questions about car wraps. Here are answers to some of the most frequently asked questions:</p>
                    <div className="space-y-6">
                        <div>
                            <p className="font-semibold mb-2">1. How much does a car wrap cost?</p>
                            <p>The cost of a car wrap depends on several factors, including the size and complexity of your car, the design complexity, and the type of wrap material used. We offer free consultations where we can provide a transparent quote based on your specific needs and desired wrap design.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">2. How long does it take to get a car wrap installed?</p>
                            <p>The car wrap installation process typically takes 1–3 days depending on the size and complexity of your car and the design chosen. During your consultation, we'll provide a more accurate timeframe based on your project.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">3. Can I design my own car wrap?</p>
                            <p>Absolutely! We welcome your creativity. You can provide your own design files, collaborate with our designers to create a custom wrap, or choose from our extensive library of pre-designed wrap options.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">4. Is car wrapping bad for my car's paint?</p>
                            <p>No, professional car wrap installation using high-quality vinyl will not damage your car's paint. In fact, car wrap acts as a protective layer, shielding your original paint from scratches, chips, and UV rays. Additionally, upon removal by a professional, the vinyl peels off cleanly without affecting the paint underneath.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">5. How long does a car wrap last?</p>
                            <p>High-quality car wraps, properly cared for, can last anywhere from 5 to 7 years. Factors affecting longevity include the quality of the vinyl, exposure to sunlight and weather, and proper maintenance practices.</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">6. How do I care for my car wrap?</p>
                            <p>We'll provide detailed aftercare instructions to ensure the longevity of your car wrap. Generally, hand washing with mild soap and water is recommended. Avoid using harsh chemicals or automated car washes.</p>
                        </div>
                    </div>
                    <div className="text-lg font-semibold text-center mt-6">
                        Ready to unleash your creativity and transform your car? Schedule a Free Car Wrap Design Consultation with Wellness Detailing today!
                    </div>
                    <div className="text-center pt-4">
                        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">Car Wrap Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <img src="/placeholder-carwrap1.jpg" alt="Car wrap 1" className="rounded-lg shadow object-cover h-48 w-full" />
                        <img src="/placeholder-carwrap2.jpg" alt="Car wrap 2" className="rounded-lg shadow object-cover h-48 w-full" />
                        <img src="/placeholder-carwrap3.jpg" alt="Car wrap 3" className="rounded-lg shadow object-cover h-48 w-full" />
                        <img src="/placeholder-carwrap4.jpg" alt="Car wrap 4" className="rounded-lg shadow object-cover h-48 w-full" />
                    </div>
                    <div className="text-center pt-2">
                        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
            </div>
            <QuoteForm />
        </>
    )
}