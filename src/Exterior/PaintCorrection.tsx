import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function PaintCorrection() {
    return (
        <>
            <ServiceHero header="Breathe New Life into Your Car's Paint: Professional Paint Correction in Gaithersburg & Rockville, MD" subheader="Sun swirls, scratches, and faded paint? Wellness Detailing offers comprehensive paint correction services to restore your car's original shine and protect its beauty." url="https://placehold.co/1920x1080" />
            <div className="space-y-16 px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto">
                <Helmet>
                    <title>Paint Correction Services | Wellness Detailing</title>
                    <meta name="description" content="Restore your car's original shine with professional paint correction services from Wellness Detailing. Explore single-stage, multi-stage, and headlight restoration options." />
                </Helmet>
                <section className="space-y-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="text-3xl font-bold text-center">Reclaim Your Car's Luster: Unveiling the Layers of Paint Correction</h1>
                        <p className="text-left">Over time, your car's paint accumulates imperfections from everyday wear and tear. Sun exposure, scratches, swirl marks, and environmental contaminants can dull the shine and detract from your car's appearance. Here at Wellness Detailing, we offer a range of paint correction services tailored to address various paint imperfections:</p>
                        <ul className="list-disc pl-5 space-y-2 text-left">
                            <li><strong>Single-Stage Polish:</strong> This is an ideal option for cars with mild imperfections like minor swirls or light scratches. It involves polishing the paint to remove surface contaminants and restore a clear gloss finish.</li>
                            <li><strong>Multi-Stage Polish:</strong> For cars with moderate imperfections like swirls, scratches, and oxidation, a multi-stage polish is recommended. This process involves multiple stages of cutting and polishing, progressively removing blemishes and refining the paint surface for a deeper shine.</li>
                            <li><strong>Headlight Restoration:</strong> Headlights become cloudy and discolored over time, reducing visibility and compromising safety. Our headlight restoration service removes oxidation and restores clarity to your headlights, enhancing both aesthetics and nighttime driving safety.</li>
                        </ul>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <img src="/paint-correction-intro.png" alt="Paint correction showcase" className="w-full h-[400px] object-cover rounded-lg shadow" />
                    </div>
                </section>
                <div className="pt-4 text-center">
                    <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                        Get A Free Quote
                    </Link>
                </div>
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">Our Other Detailing Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: "Wash and Wax", desc: "Revitalize your car with our thorough wash and wax service, ensuring a pristine finish that shields against the elements." },
                            { title: "Premium Wash", desc: "Experience a top-tier clean with our premium wash service, leaving your vehicle gleaming with meticulous attention to detail." },
                            { title: "Full Interior Cleaning", desc: "Restore your car's interior to like-new condition with our comprehensive cleaning service, covering every nook and cranny for a fresh feel." },
                            { title: "Mini-Interior Detail", desc: "Maintain a tidy interior with our quick yet effective mini-detail service, focusing on key areas to keep your car looking its best." },
                            { title: "Smoke Odor Removal", desc: "Eliminate stubborn smoke odors with our specialized treatment, leaving your car smelling clean and fresh." },
                            { title: "Overspray Removal", desc: "Remove unwanted contaminants from your car's exterior with our gentle yet effective overspray removal service, preserving its original finish." }
                        ].map(({ title, desc }, i) => (
                            <div key={i} className="bg-white p-4 rounded shadow text-left flex flex-col justify-between h-full min-h-[240px]">
                                <h3 className="font-bold text-lg text-center">{title}</h3>
                                <p className="mt-1">{desc}</p>
                                <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold self-center px-4 py-2 rounded shadow transition">Read more</button>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">The Paint Correction Process at Wellness Detailing</h2>
                    <div className="space-y-4 max-w-4xl mx-auto text-left">
                        <div>
                            <p>At Wellness Detailing, we believe in a meticulous, multi-stage approach to paint correction. Here's a glimpse into what you can expect:</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">The Foundation: A Clean Canvas</h3>
                            <p className="mt-3">The journey begins with a thorough wash using a multi-step process. We meticulously remove dirt, dust, road grime, and any surface contaminants that could hinder the polishing process. An optional clay bar treatment tackles embedded contaminants like tar and industrial fallout for an even cleaner surface.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Assessing the Paint & Choosing the Right Weapon</h3>
                            <p className="mt-3">Using professional lighting, our technicians meticulously inspect your car's paint to assess the severity of imperfections. Based on this inspection, we'll recommend the most appropriate paint correction service – a single-stage polish for mild imperfections or a multi-stage polish for more severe cases.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Single-Stage Polish: Restoring Shine Simply</h3>
                            <p className="mt-3">For cars with light imperfections, a single-stage polish is used. This involves applying a gentle polishing compound to remove surface blemishes and restore a clear gloss finish.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Multi-Stage Polish: A Deeper Level of Restoration</h3>
                            <p className="mt-3">For more extensive imperfections, a multi-stage approach is necessary. This starts with “cutting,” where a specialized compound removes a microscopic layer of clear coat to level the paint surface and eliminate deeper scratches and swirls. Following this, a finer polish refines the paint surface and achieves a high-gloss finish.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Headlight Restoration: Bringing Clarity Back</h3>
                            <p className="mt-3">If your headlights are cloudy and discolored, our restoration process involves sanding and polishing the lenses to remove oxidation and restore clarity, improving aesthetics and nighttime driving safety.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">The Finishing Touches: Protection & Perfection</h3>
                            <p className="mt-3">After paint correction, we apply a high-quality wax or sealant to protect the newly revealed paint surface, enhancing its shine and longevity. Finally, your car will be meticulously hand-dried and buffed to a flawless finish, ready to turn heads wherever you go!</p>
                        </div>
                    </div>
                    <p className="text-center max-w-3xl mx-auto">By following this meticulous process, Wellness Detailing ensures a safe, effective, and long-lasting paint correction experience that restores your car's original shine and protects its beauty for years to come.</p>
                    <div className="text-center pt-2">
                        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Paint Correction FAQs: Get Your Questions Answered!</h2>
                    <p>Here at Wellness Detailing, we understand you might have questions about paint correction. We've compiled answers to some of the most frequently asked questions to help you make an informed decision:</p>
                    <div className="space-y-6">
                        {[
                            {
                                q: "1. What is paint correction?",
                                a: "Paint correction is a multi-step process of removing imperfections from your car's paintwork, such as scratches, swirls, oxidation, and water spots. This process restores the paint's original shine and luster."
                            },
                            {
                                q: "2. Do I need paint correction?",
                                a: "If your car's paint looks dull, hazy, or has visible scratches and swirls, then paint correction can significantly improve its appearance. We recommend scheduling a free consultation to assess your car's specific needs."
                            },
                            {
                                q: "3. What are the different types of paint correction services offered?",
                                a: "We offer a range of paint correction services to address varying levels of paint damage: Single-stage polish, Multi-stage polish, Headlight restoration."
                            },
                            {
                                q: "4. Will paint correction damage my car's paint?",
                                a: "No, professional paint correction using high-quality polishes and techniques is safe for your car's paint. It removes a microscopic layer to level the surface, eliminating imperfections and protecting the remaining paint."
                            },
                            {
                                q: "5. How long does paint correction take?",
                                a: "The time required depends on the severity of the damage and the chosen service level. It can range from a few hours for a single-stage polish to a full day for a multi-stage correction."
                            },
                            {
                                q: "6. How long will the results of paint correction last?",
                                a: "With proper care, including regular washing and occasional waxing, the results of paint correction can last for several years. We'll provide detailed aftercare instructions."
                            },
                            {
                                q: "7. How much does paint correction cost?",
                                a: "The cost varies depending on the car size, damage severity, and service level. We offer free consultations and transparent quotes."
                            }
                        ].map(({ q, a }, i) => (
                            <div key={i}>
                                <p className="font-semibold mb-2">{q}</p>
                                <p>{a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-lg font-semibold text-center mt-6">
                        Ready to breathe new life into your car's paint? Schedule a Free Paint Correction Consultation with Wellness Detailing today!
                    </div>
                    <div className="text-center pt-4">
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