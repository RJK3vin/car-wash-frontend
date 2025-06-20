import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function PremiumWash() {
    const premiumFeatures = [
        "Clean wheels, tires, and gas cap",
        "Remove bugs and bird poo from vehicle",
        "Apply a spray wax for extra shine and protection (lasts a few weeks)",
        "Apply a spray wax for extra shine and protection (lasts a few weeks)",
        "Dry vehicle with soft microfiber towel and air blower to blow water out of crevices and wheels",
        "Clean exterior glass and windows",
        "Dress tires to make them shine",
    ]

    const premiumBenefits = [
        {
            title: "Unmatched Shine & Luster",
            description:
                "Your car will gleam like new, with a deep, radiant shine that turns heads.",
        },
        {
            title: "Superior Paint Protection",
            description:
                "Our premium wash protects your car's paintwork from environmental elements, promoting long-term beauty and value.",
        },
        {
            title: "Effortless Maintenance",
            description:
                "A freshly waxed car repels dirt and water, making future washes and maintenance significantly easier.",
        },
        {
            title: "Enhanced Resale Value",
            description:
                "A car that looks meticulously cared for will undoubtedly fetch a higher price when you decide to sell.",
        },
        {
            title: "The Satisfaction of a Flawless Finish",
            description:
                "There's nothing quite like the pride of owning a car that looks its absolute best!",
        },
    ]

    return (
        <>
            <ServiceHero
                header="The Premium Wash by Wellness Detailing"
                subheader="Go beyond a basic wash. Our meticulous, multi-stage Premium Wash delivers a spa-like experience for your car, restoring a showroom shine and unparalleled protection."
                url="https://placehold.co/1920x1080"
            />
            <Helmet>
                <title>Premium Wash Service | Wellness Detailing</title>
                <meta
                    name="description"
                    content="Experience the ultimate Premium Wash at Wellness Detailing. Multi-stage hand wash, wax, clay bar, and tire revival. Get a flawless finish with long-lasting protection."
                />
            </Helmet>

            <section className="mt-16 mb-24 space-y-20">

                <div className="max-w-5xl mx-auto text-center px-4 space-y-6">
                    <h1 className="text-3xl font-bold">
                        The Art of a Premium Wash: More Than Just a Clean
                    </h1>
                    <p>
                        A regular wash keeps your car presentable, but the Premium Wash by
                        Wellness Detailing elevates car care to an art form. Here's what
                        sets it apart:
                    </p>
                    <ul className="text-left space-y-4">
                        {[
                            {
                                label: "Intensive Pre-Wash Decontamination",
                                desc: "We don't just rinse. A comprehensive decontamination process removes stubborn road grime, tar spots, rail dust, and industrial fallout, ensuring a flawless canvas for the washing stages.",
                            },
                            {
                                label: "Two-Bucket Wash with Premium Soap",
                                desc: "The two-bucket wash method prevents cross-contamination, while our high-foaming, pH-neutral car wash soap gently cleans without harming the paintwork.",
                            },
                            {
                                label: "Multi-Stage Hand Wash",
                                desc: "Our detail experts meticulously hand-wash your car, reaching every nook and cranny for a thorough clean.",
                            },
                            {
                                label: "Clay Bar Treatment (Optional)",
                                desc: "For an extra layer of smoothness, a clay bar treatment gently removes bonded contaminants that traditional washing might miss, leaving the paint ultra-smooth.",
                            },
                            {
                                label: "Wheel & Tire Revival",
                                desc: "We don't neglect the wheels and tires! Powerful yet safe wheel cleaners remove brake dust and road grime. Tires are deep cleaned and dressed with a premium protectant to restore their original shine and luster.",
                            },
                            {
                                label: "Door Jamb & Trunk Cleaning",
                                desc: "We pay meticulous attention to detail, cleaning often-overlooked areas like door jambs, trunk reveals, and gas caps for a truly comprehensive clean.",
                            },
                        ].map((item, i) => (
                            <li key={i}>
                                <strong>{item.label}:</strong> {item.desc}
                            </li>
                        ))}
                    </ul>

                    <img
                        src="/images/premiumwash-feature.jpg"
                        alt="Premium Wash Example"
                        className="w-full h-[450px] object-cover border border-gray-300 rounded-lg"
                    />

                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-6 px-4">
                    <h2 className="text-3xl font-bold">
                        Beyond the Wash: Premium Protection & Shine
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                        {premiumFeatures.map((text, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center space-y-2"
                            >
                                <CheckCircle className="text-blue-600 w-6 h-6" />
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-6 px-4">
                    <h2 className="text-3xl font-bold text-center">
                        Benefits of the Premium Wash Experience
                    </h2>
                    <ul className="space-y-4">
                        {premiumBenefits.map((item, i) => (
                            <li key={i}>
                                <strong>{item.title}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                    <div className="text-center pt-4">
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-6 px-4">
                    <h2 className="text-3xl font-bold text-center">
                        Premium Wash FAQs: Unveiling the Details
                    </h2>
                    <p className="text-center max-w-3xl mx-auto">
                        At Wellness Detailing, we understand you might have questions about
                        our luxurious Premium Wash service. Here are answers to some of the
                        most frequently asked questions to help you decide if it's the
                        perfect choice for your car:
                    </p>
                    <div className="space-y-6 text-left">
                        {[
                            {
                                q: "1. What's the difference between the Premium Wash and a regular wash?",
                                a: "Our Premium Wash goes far beyond a basic wash. It includes a multi-stage decontamination process, a two-bucket wash with premium soap, clay bar treatment (optional), meticulous cleaning of neglected areas, professional hand wax application, and premium tire dressing. It's a comprehensive spa treatment for your car, delivering an unmatched shine and superior protection.",
                            },
                            {
                                q: "2. How long does a Premium Wash take?",
                                a: "The Premium Wash typically takes 2-3 hours, depending on the size and condition of your vehicle.",
                            },
                            {
                                q: "3. Is the clay bar treatment necessary?",
                                a: "Clay barring removes bonded contaminants like tar, rail dust, and industrial fallout that a regular wash might miss. It creates an even smoother paint surface, allowing the wax to adhere better and maximizing shine. If your car has a lot of visible contaminants or feels rough to the touch, clay barring is highly recommended.",
                            },
                            {
                                q: "4. What kind of wax is used in the Premium Wash?",
                                a: "We use a high-quality car wax specifically formulated to provide long-lasting protection, shine, and water repellency.",
                            },
                            {
                                q: "5. Can I customize the Premium Wash service?",
                                a: "Absolutely! We offer various add-on services like window treatment, headlight restoration, and interior detailing to tailor the experience to your specific needs and budget.",
                            },
                            {
                                q: "6. How often should I get a Premium Wash?",
                                a: "For optimal results, we recommend a Premium Wash every 3-4 months, especially if you park outdoors or drive frequently. You can complement this with regular touch-up washes in between.",
                            },
                            {
                                q: "7. Is the Premium Wash worth the investment?",
                                a: "If you value a flawless shine, superior paint protection, and the satisfaction of owning a meticulously cared-for car, then the Premium Wash is an excellent investment. It not only enhances your car's appearance but also protects its value in the long run.",
                            },
                        ].map(({ q, a }, i) => (
                            <div key={i}>
                                <p className="font-bold">{q}</p>
                                <p className="mt-2">{a}</p>
                            </div>
                        ))}
                        <p className="font-bold mt-6 text-center">
                            Ready to experience the ultimate car wash for your prized
                            possession? Schedule Your Premium Wash Today!
                        </p>
                        <div className="text-center pt-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                            >
                                Get A Free Quote
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto text-center space-y-6 px-4">
                    <h2 className="text-3xl font-bold">Premium Wash Service Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <img
                                key={i}
                                src={`/images/premiumwash-${i}.jpg`}
                                alt={`Premium Wash ${i}`}
                                className="w-full h-[250px] object-cover rounded-lg border border-gray-300"
                            />
                        ))}
                    </div>
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-4 rounded-md font-medium transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}