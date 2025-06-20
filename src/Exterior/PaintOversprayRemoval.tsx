import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function PaintOversprayRemoval() {
    return (
        <>
            <ServiceHero header="Don't Let Overspray Spoil Your Car's Finish: Professional Removal by Wellness Detailing" subheader="Encountered unwanted paint overspray on your car? We understand the frustration! At Wellness Detailing, we offer safe and effective paint overspray removal services to restore your car's flawless finish." url="https://placehold.co/1920x1080" />
            <div className="space-y-20 py-12">
                <Helmet>
                    <title>Paint Overspray Removal | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Learn how Wellness Detailing safely removes paint overspray from your car. Explore our proven process and detailed FAQs."
                    />
                </Helmet>
                <section className="space-y-6 max-w-3xl mx-auto text-center md:text-left">
                    <h1 className="text-3xl font-bold text-center">
                        Understanding Paint Overspray and Why it Happens
                    </h1>
                    <p>Accidents happen, and sometimes those accidents involve unwanted paint ending up on your car. Paint overspray can occur in various situations:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Parked near a painting project</li>
                        <li>Driving behind a freshly painted vehicle</li>
                        <li>Accidental overspray from neighboring construction</li>
                    </ul>
                    <p>
                        Regardless of the source, paint overspray can leave unsightly blemishes on your cars paintwork. But fear not! At Wellness Detailing, we have the expertise and tools to safely and effectively remove paint overspray, restoring your cars original beauty.
                    </p>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">
                        Our Safe and Effective Paint Overspray Removal Process
                    </h2>
                    <p className="max-w-3xl mx-auto">
                        We understand the delicate nature of car paint. That's why we use a meticulous and proven process to remove paint overspray without damaging your cars finish:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                        {[
                            {
                                title: "Comprehensive Assessment",
                                desc: "Our detail experts will thoroughly inspect your car to identify the type and severity of the paint overspray. This assessment helps us determine the most appropriate removal technique."
                            },
                            {
                                title: "Safe Paint Removal Techniques",
                                desc: "We utilize a variety of safe and effective methods for removing paint overspray, depending on the situation. This may include claying, gentle polishing compounds, or specialized chemical solutions specifically designed for overspray removal."
                            },
                            {
                                title: "Meticulous Hand-Washing & Polishing",
                                desc: "Once the overspray is removed, we meticulously hand-wash your car to remove any residual contaminants. Following this, a gentle polishing process may be used to restore the shine and luster of your car's paint."
                            },
                            {
                                title: "Final Touches & Protection:",
                                desc: "The final step involves applying a high-quality wax or sealant to protect your car's paint and enhance its shine. Your car will be meticulously hand-dried and buffed to a flawless finish, ready to impress."
                            }
                        ].map(({ title, desc }, i) => (
                            <div key={i} className="text-center space-y-2">
                                <div className="text-blue-600 text-2xl font-bold">{i + 1}</div>
                                <h3 className="font-bold">{title}</h3>
                                <p className="text-sm text-gray-700">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Paint Overspray Removal FAQs: Get Your Answers Here!</h2>
                    <p>We understand you might have questions about paint overspray removal. Here at Wellness Detailing, weve compiled answers to some of the most frequently asked questions to help you make an informed decision:</p>
                    <div className="space-y-6">
                        {[
                            ["1. What is paint overspray?", "Paint overspray is a mist of paint particles that settle on surfaces other than the intended target during a painting project. This can happen when you park near someone painting their house, drive behind a freshly painted vehicle, or encounter overspray from nearby construction."],
                            ["2. Can I remove paint overspray myself?", "While it might be tempting to tackle paint overspray removal yourself, we generally advise against it. Using harsh chemicals or abrasive techniques can damage your car's paint. It's safer and more effective to leave it to the professionals."],
                            ["3. How will you remove the overspray from the car?", "The specific removal technique depends on the type and severity of the overspray. Our detail experts will assess the situation and may use methods like claying, gentle polishing compounds, or specialized chemical solutions designed for safe overspray removal."],
                            ["4. Will removing the overspray damage my cars paint?", "No, at Wellness Detailing, we prioritize the safety of your car's paint. We use gentle yet effective techniques and high-quality products specifically formulated for paint overspray removal."],
                            ["5. What happens after the overspray is removed?", "Once the paint overspray is eliminated, we'll meticulously hand-wash your car to remove any leftover contaminants. A gentle polishing process might follow to restore the shine and luster of your car's paint. Finally, we'll apply a high-quality wax or sealant to protect your car's paint and enhance its shine."],
                            ["6. How long does the paint overspray removal process take?", "The time required for paint overspray removal depends on the extent of the overspray. A minor case might be resolved within an hour, while a more extensive situation could take several hours."],
                            ["7. How much does paint overspray removal cost?", "The cost depends on the severity of the overspray and the size of your car. We offer free consultations to assess the situation and provide a transparent quote."],
                            ["8. What if the overspray has been sitting on my car for a while?", "The sooner you address paint overspray, the easier it is to remove. However, even if it's been there for a while, our experienced technicians can still safely remove it using the appropriate methods."]
                        ].map(([q, a], i) => (
                            <div key={i}>
                                <p className="font-semibold">{q}</p>
                                <p className="mt-4">{a}</p>
                            </div>
                        ))}
                    </div>
                    <p className="font-bold">Dont let paint overspray ruin your cars appearance! Schedule a Free Paint Overspray Removal Quote with Wellness Detailing Today!</p>
                    <div className="text-center pt-2">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Paint Overspray Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-full h-[250px] bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center text-gray-400 text-sm"
                            >
                                Image {i}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
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