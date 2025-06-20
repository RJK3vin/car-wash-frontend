import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function MiniInteriorDetail() {
    return (
        <>
            <ServiceHero header="Refresh Your Ride in Minutes: Mini Interior Detail by Wellness Detailing" subheader="Don't have time for a full interior detail? Our Mini Detail is perfect for busy schedules, giving your car's interior a quick and effective refresh." url="https://placehold.co/1920x1080" />
            <section className="px-4 py-16 md:px-8 lg:px-24 bg-white text-gray-800">
                <Helmet>
                    <title>Mini Interior Detail | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Need a quick interior refresh? Our Mini Interior Detail service offers fast, effective cleaning for busy schedules. Book now with Wellness Detailing."
                    />
                </Helmet>

                <h1 className="text-3xl font-bold text-center mb-6">
                    Quick Clean, Big Impact: The Mini Detail Advantage
                </h1>
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <p className="text-left">
                        Life is busy, and sometimes your car's interior needs a quick
                        pick-me-up. That's where our Mini Detail service comes in. It's a
                        time-efficient yet effective solution to restore a clean and fresh
                        feel to your car's interior.
                    </p>
                    <ul className="list-disc pl-5 text-left">
                        <li>
                            <strong>Ideal for Busy Schedules:</strong> Takes less than an hour,
                            perfect for a quick refresh in between full details.
                        </li>
                        <li>
                            <strong>Targeted Cleaning:</strong> Focuses on essential areas to
                            revive the look and feel of your interior.
                        </li>
                        <li>
                            <strong>Cost-Effective Option:</strong> An affordable way to
                            maintain a clean car interior.
                        </li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <div className="w-[600px] h-[550px] border border-gray-400 rounded-lg mx-auto flex items-center justify-center text-sm text-gray-500">
                        Image Placeholder
                    </div>

                    <Link to="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Get A Free Quote</Link>
                </div>


                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold mb-10">
                        Why Choose Wellness Detailing for Mini Interior Detail?
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {[
                            {
                                title: "Fast & Efficient Service",
                                desc: "We understand your time is valuable. Our Mini Detail is completed quickly without compromising quality.",
                            },
                            {
                                title: "Experienced Detailers",
                                desc: "Our certified detailers are experts in interior cleaning, ensuring a meticulous and effective service.",
                            },
                            {
                                title: "Convenience",
                                desc: "Schedule your Mini Detail at your location with our mobile detailing service.",
                            },
                            {
                                title: "High-Quality Products",
                                desc: "We use only top-of-the-line cleaning products that are safe for your car's interior materials.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="w-full max-w-xs border p-6 rounded-md shadow-md"
                            >
                                <div className="text-blue-600 flex justify-center mb-3">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Mini Interior Detail FAQs: Quick Answers for a Speedy Shine
                    </h2>
                    <div className="space-y-8">
                        <p>
                            At Wellness Detailing, we understand you might have questions about our time-saving Mini Interior Detail service. Here are answers to some of the most frequently asked questions to help you decide if it's the perfect pick-me-up for your car's interior:
                        </p>

                        <div>
                            <p className="font-bold">1. How long does a Mini Detail take?</p>
                            <p className="mt-4">
                                Our Mini Detail is designed for busy schedules and typically takes less than an hour to complete.
                            </p>
                        </div>

                        <div>
                            <p className="font-bold">2. What areas are cleaned in a Mini Detail?</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Carpets and upholstery are thoroughly vacuumed to remove loose dirt, dust, and crumbs.</li>
                                <li>Hard surfaces like the dashboard, door panels, and center console are wiped down with safe and effective cleaning solutions.</li>
                                <li>Interior windows are cleaned for optimal clarity and a polished look.</li>
                                <li>We remove any unwanted trash found inside your car.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold">3. Can I customize the Mini Detail service?</p>
                            <p className="mt-4">Absolutely! While the core service focuses on these key areas, we offer optional add-ons to personalize your experience:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Leather Cleaning & Conditioning:</strong> Protect and preserve your leather seats with a professional cleaning and conditioning treatment.</li>
                                <li><strong>Spot Treatment:</strong> Have a minor stain you'd like addressed? We can target specific areas with our spot treatment add-on.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold">4. Is a Mini Detail as effective as a full interior detail?</p>
                            <p className="mt-4">
                                A full interior detail provides a more comprehensive clean, including deep cleaning upholstery, shampooing carpets, and cleaning crevices. However, the Mini Detail is a perfect option for a quick refresh in between full details or for cars that are generally well-maintained.
                            </p>
                        </div>

                        <div>
                            <p className="font-bold">5. How often should I get a Mini Detail?</p>
                            <p className="mt-4">
                                The frequency depends on your usage habits. We recommend a Mini Detail every 1-2 months to maintain a clean and fresh interior, especially if you eat or drink in your car frequently.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-12 text-center">
                    <p className="font-bold text-lg mb-3">
                        Ready to give your car's interior a quick and effective refresh? Get a Mini Interior Detail Quote Today!
                    </p>
                    <br></br>
                    <Link to="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Get A Free Quote</Link>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Mini Interior Detail Work Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div
                                key={i}
                                className="w-[300px] h-[220px] border border-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-400 bg-gray-50 shadow hover:shadow-md transition"
                            >
                                Image Placeholder
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}