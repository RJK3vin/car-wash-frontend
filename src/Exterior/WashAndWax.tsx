import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function WashAndWax() {
    return (
        <>
            <ServiceHero header="Bring Back Your Car's Shine: Professional Wash & Wax by Wellness Detailing" subheader="Give your car the care it deserves with our comprehensive wash and wax services. We restore a radiant shine, remove everyday grime, and leave a protective layer for lasting beauty." url="https://placehold.co/1920x1080" />
            <div className="space-y-20 py-12">
                <Helmet>
                    <title>Wash & Wax Services | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Discover the Wellness Detailing difference with our professional wash and wax services. Learn about our meticulous process, FAQs, and get a free quote."
                    />
                </Helmet>
                <section className="space-y-6 max-w-3xl mx-auto text-center md:text-left">
                    <h1 className="text-3xl font-bold text-center">
                        Beyond a Basic Wash: The Wellness Detailing Difference
                    </h1>
                    <p>Your car deserves more than a quick drive-thru rinse. At Wellness Detailing, we elevate the wash and wax experience with a meticulous, multi-step process that goes deeper than surface cleaning. Here's what sets us apart:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Expert Hand Wash:</strong> Our detail experts gently wash your car using high-quality car wash soap and specialized mitts. This removes dirt, grime, and road film without harming the paintwork.</li>
                        <li><strong>Multi-Stage Wash Process:</strong> We believe in thoroughness. Our wash process involves multiple stages, including a pre-rinse to loosen debris, a meticulous wash with specialized solutions, and a final rinse to ensure no soap residue remains.</li>
                        <li><strong>Wheel & Tire Revival:</strong> We don't neglect the wheels and tires! These areas receive dedicated cleaning to remove brake dust, road grime, and restore their shine.</li>
                        <li><strong>Hidden Gem Cleaning:</strong> We go the extra mile, cleaning often-overlooked areas like door jambs and the trunk interior for a truly comprehensive clean.</li>
                        <li><strong>Professional Wax Application:</strong> The crowning touch! We apply a high-quality wax to create a protective shield that enhances shine, repels water, and safeguards your car's paint from environmental elements.</li>
                    </ul>
                    <div className="max-w-5xl mx-auto">
                        <img src="/paint-correction-intro.png" alt="Paint correction showcase" className="w-full h-[250px] object-cover rounded-lg border border-gray-300" />
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">The PPF Installation Process at Wellness Detailing</h2>
                    <p className="max-w-3xl mx-auto">
                        At Wellness Detailing, we take pride in delivering a meticulous and professional mobile PPF installation experience. Here's a glimpse into our streamlined 7-step process:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
                        {[
                            {
                                step: 1,
                                title: "Pre-Wash & Rinse",
                                desc:
                                    "The groundwork for a flawless finish begins with a thorough rinsing of your car. Our detail experts use high-pressure water to loosen and remove loose dirt, dust, and debris. This prevents these contaminants from scratching the paintwork during the wash process.",
                            },
                            {
                                step: 2,
                                title: "Multi-Stage Wash",
                                desc:
                                    "We use a gentle yet effective car wash soap specifically formulated to remove grime and road film without harming the paintwork. Specialized mitts and wash buckets: Separate wash mitts are used for the car's body and wheels to prevent cross-contamination. Wash buckets are emptied and refilled regularly to maintain clean water throughout the process.",
                            },
                            {
                                step: 3,
                                title: "Wheel & Tire Revival",
                                desc:
                                    "Wheels and tires don't get neglected! Powerful yet safe wheel cleaners are used to remove brake dust, road grime, and metallic deposits. Tires are cleaned and dressed with a protectant to restore their original shine.",
                            },
                        ].map(({ step, title, desc }, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow space-y-2">
                                <div className="text-orange-500 text-2xl font-bold">{step}</div>
                                <h3 className="font-bold text-lg">{title}</h3>
                                <p className="text-sm text-gray-700">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 text-left">
                        {[
                            {
                                step: 4,
                                title: "Door Jamb & Trunk Cleaning",
                                desc:
                                    "We pay attention to detail by cleaning often-overlooked areas like door jambs and the trunk interior to ensure a comprehensive clean.",
                            },
                            {
                                step: 5,
                                title: "Drying & Buffing",
                                desc:
                                    "The car is meticulously hand-dried using high-quality microfiber towels to prevent water spots and streaks. A gentle buff with a clean microfiber cloth removes any remaining fingerprints or smudges, leaving a spotless finish.",
                            },
                            {
                                step: 6,
                                title: "Professional Wax Application",
                                desc:
                                    "The crowning touch! A high-quality car wax is applied by hand, creating a protective layer that enhances shine, repels water, and safeguards your car's paint from environmental elements like UV rays, oxidation, and minor scratches.",
                            },
                            {
                                step: 7,
                                title: "Final Touches",
                                desc:
                                    "A final inspection ensures a flawless finish, free of streaks, smudges, or missed spots. Your car is then returned to you looking radiant and protected!",
                            },
                        ].map(({ step, title, desc }, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow space-y-2">
                                <div className="text-orange-500 text-2xl font-bold">{step}</div>
                                <h3 className="font-bold text-lg">{title}</h3>
                                <p className="text-sm text-gray-700">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Wash and Wax FAQ: Get Your Answers Here!</h2>
                    <div className="space-y-6">
                        <p>We understand you might have questions about our professional wash and wax services. Here at Wellness Detailing, we've compiled answers to some of the most frequently asked questions to help you make an informed decision:</p>
                        <div className="space-y-4">
                            <p className="font-bold">1. What are the benefits of getting a professional wash and wax compared to doing it myself?</p>
                            <p>While you can wash your car yourself, a professional service offers several advantages:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Meticulous cleaning:</strong> Our detail experts use proven techniques and high-quality products to ensure a thorough and gentle clean, reaching areas you might miss and avoiding swirls or scratches.</li>
                                <li><strong>Superior paint protection:</strong> We use professional-grade waxes that provide a superior layer of protection against UV rays, oxidation, and environmental contaminants, safeguarding your car's paint for longer.</li>
                                <li><strong>Convenience:</strong> Save time and effort! We handle the entire process, bringing our services directly to you.</li>
                                <li><strong>Extended car lifespan:</strong> Regular professional washing and waxing helps maintain your car's paintwork, promoting a longer lifespan and potentially increasing resale value.</li>
                            </ul>
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="font-bold">2. How often should I get my car washed and waxed?</p>
                            <p>
                                The frequency depends on various factors like how often you drive, parking environment, and weather conditions. Generally, we recommend a wash every 2-4 weeks and a wax application every 2-3 months for optimal results.
                            </p>
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="font-bold">3. What's included in your wash and wax packages?</p>
                            <p>
                                We offer various wash and wax packages to suit your needs and budget. Most packages include a multi-stage hand wash, wheel and tire cleaning, door jamb and trunk cleaning (in some packages), and a professional hand wax application. We also offer optional add-ons like clay bar treatment for paint decontamination.
                            </p>
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="font-bold">4. Can you wash and wax my car if it has a lot of bugs stuck on it?</p>
                            <p>
                                Absolutely! We have safe and effective methods for removing bugs and other contaminants without harming your car's paintwork.
                            </p>
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="font-bold">5. What if my car has a clear coat scratch? Will washing and waxing it make it worse?</p>
                            <p>
                                A professional wash and wax won't worsen existing scratches. In some cases, a high-quality wax can slightly mask minor surface scratches. However, for deeper scratches, we recommend paint correction services to address them effectively.
                            </p>
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="font-bold">6. Do you offer mobile wash and wax services?</p>
                            <p>
                                Yes! We conveniently bring our wash and wax services directly to your location, saving you valuable time.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">Ready to restore your car's shine and shield it with lasting protection? Get a Free Wash & Wax Quote Today!</p>
                        <Link
                            to="/contact"
                            className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Wash & Wax Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-full h-[250px] object-cover rounded-lg border border-gray-300"
                            >
                                Image {i}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
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