import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"
import { Link } from "react-router-dom"
import Blogs from "../components/Blogs"

export default function DetailingMethodology() {
    return (
        <>
            <GalleryHero header="Our Cleaning & Detailing Process" button="Get A Free Quote" loc="contact" url="https://placehold.co/1920x1080" />
            <section className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-semibold mb-6">Our Detailing Methodology at Wellness Detailing</h2>

                <p className="mb-4">
                    At Wellness Detailing, we take immense pride in the meticulous care we provide for your car. Our detailers are experts in restoring a showroom shine and protecting your vehicle's beauty. Here's a comprehensive look at our proven detailing methodology, ensuring a flawless finish and a car that looks and feels amazing:
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Pre-Detailing Inspection:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Our detail process begins with a thorough inspection of your car's exterior and interior.</li>
                    <li>We assess the condition of the paintwork, wheels, tires, windows, and interior surfaces (for interior detailing).</li>
                    <li>This inspection helps us determine the most appropriate cleaning methods and products for your specific vehicle.</li>
                    <li>We discuss any specific concerns you may have and tailor the detailing service to your needs.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Exterior Wash:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>We start by giving your car a thorough wash using the two-bucket method. This prevents cross-contamination and ensures a gentle yet effective cleaning process.</li>
                    <li>We use high-quality car wash soap that is pH-neutral and safe for your car's paintwork.</li>
                    <li>Our detailers meticulously hand-wash every inch of your car's exterior, removing dirt, grime, road film, and environmental contaminants.</li>
                    <li>Wheel wells, fender liners, and door jambs receive special attention to ensure a comprehensive clean.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Decontamination Stage (Optional Add-On):</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>For heavily soiled cars or those requiring extra care, we offer a decontamination stage as an add-on service.</li>
                    <li>This stage involves removing stubborn contaminants like tar, rail dust, and industrial fallout that a regular wash might miss.</li>
                    <li>We use clay barring, a gentle process that removes these contaminants from the paint surface, leaving it smooth and prepared for polishing.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Paint Correction (Optional Add-On):</h3>
                <p className="mb-4">
                    To achieve a flawless shine, we offer paint correction as an add-on service. This multi-stage process removes minor scratches, swirl marks, and oxidation from the paintwork.
                    Our detailers use a combination of polishing compounds and techniques to restore the paint's clarity and achieve a mirror-like finish.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Wax Application:</h3>
                <p className="mb-4">
                    A high-quality car wax is applied by hand to create a protective layer on your car's paint. This wax repels water, protects against UV rays, and helps maintain the shine for extended periods.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Wheel & Tire Care:</h3>
                <p className="mb-4">
                    Your car's wheels and tires are not neglected! Powerful yet safe wheel cleaners remove brake dust and road grime. Tires are thoroughly cleaned and dressed with a premium protectant to restore their original luster and provide long-lasting UV protection.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Glass Clarity:</h3>
                <p className="mb-4">
                    All exterior windows, including windshields and side mirrors, are meticulously cleaned using streak-free glass cleaner. This ensures optimal visibility and a polished look for your car.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Final Touches & Quality Check:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Once the detailing process is complete, our detailers meticulously inspect your car's exterior to ensure a flawless finish, free of streaks, smudges, or missed spots.</li>
                    <li>We pay close attention to even the smallest details to deliver a truly exceptional outcome.</li>
                    <li>We present your car back to you, gleaming and looking its absolute best!</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Interior Detailing (Optional Add-On):</h3>
                <p className="mb-4">
                    For a complete clean, we offer comprehensive interior detailing services. Our detailers meticulously clean, condition, and protect all interior surfaces, from carpets and upholstery to leather seats and dashboards. (See our Interior Detailing service page for a detailed breakdown)
                </p>

                <div className="flex justify-center mt-8">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <Blogs />
            <QuoteForm />
        </>
    )
}