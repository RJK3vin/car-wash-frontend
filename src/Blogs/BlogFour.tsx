import QuoteForm from "../components/QuoteForm";
import BlogNavSlider from "../components/BlogNavSlider";

const BlogFour = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-gray-800">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 leading-tight">
                    What Does Auto Detailing Include?
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    By <br className="md:hidden" /> March 24, 2025
                </p>

                <p className="mb-6 leading-relaxed">
                    Auto detailing goes beyond a regular car wash to leave your vehicle looking indoor and outdoor spotless. This comprehensive guide will walk you through everything that auto detailing includes so you can understand the processes involved.
                </p>

                <img
                    className="w-full h-auto rounded-lg shadow-md mb-8"
                    src="https://placehold.co/800x400"
                    alt="A person is meticulously detailing a luxury car interior under dim lighting, highlighting precision and care."
                />

                <Section
                    title="Exterior Wash and Dry"
                    content={[
                        "The first step in auto detailing involves a meticulous exterior wash to remove dirt, grime, and contaminants from your vehicle’s body. This includes hand washing followed by a gentle hand drying.",
                        "An exterior wash is more than just rinsing the car with water. It involves a methodical process using high-quality detergents that not only cleanse but also protect the paintwork. This process might include pre-rinsing, which helps to loosen tough dirt particles, followed by applying a pH-neutral shampoo with a microfiber wash mitt. Such attention to detail ensures that no damage comes to the paint during the cleaning.",
                        "Following the wash, a careful drying process is implemented. This is crucial to prevent water spots that can stain the finish if left to air dry. Microfiber towels are commonly used for this purpose, as they effectively absorb water without scratching or leaving lint on the painted surfaces. Some detailers also employ air dryers to reach water that settles in crevices and seams." 
                    ]}
                />

                <Section
                    title="Paint Claying"
                    content={[
                        "Claying is an essential part of detailing where a clay bar is used to eliminate any embedded particles on the paint surface that washing didn’t remove. This step ensures a smooth and pristine finish.",
                        "The clay bar treatment is a transformative process in auto detailing that tackles impurities and contaminants that regular washing cannot remove, such as tree sap, industrial fallout, and tiny metal particles. Using the clay bar is akin to exfoliating the skin; it prepares the vehicle for subsequent steps like polishing by creating a clean canvas. Remember to always use a lubricant to glide the clay across the surface to prevent scratching."
                    ]}
                />

                <Section
                    title="Polishing"
                    content={[
                        "Polishing involves using a buffer and polishing compound to remove minor scratches and paint swirls. This process helps to restore the car’s paint to a shiny, flawless condition.",
                        "In polishing, a dual-action polisher is often used to work the polishing compound into the paint. This not only restores the car’s luster but also prepares it for long-lasting protection. Experts emphasize the importance of using the right pad and pressure to avoid creating additional swirl marks. Polishing is key to reviving the depth and clarity of the paint, making your car look years younger."
                    ]}
                />

                <Section
                    title="Waxing"
                    content={[
                        "Applying a coat of wax protects the paint job and adds a glossy finish. It forms a protective barrier against the elements and provides your vehicle with a stunning shine.",
                        "Waxing is the final touch in the detailing process that not only enhances gloss but also provides a shield against environmental elements like acid rain and UV rays. The choice between carnauba wax and synthetic sealant is often debated. Carnauba gives a deep, rich shine, while synthetic options tend to last longer. For the ultimate protection, some car owners now opt for ceramic coatings which offer durability for up to 2 years."
                    ]}
                />

                <Section
                    title="Thorough Interior Cleaning"
                    content={[
                        "Interior detailing focuses on cleaning and conditioning the inside of the car. This includes vacuuming, upholstery cleaning, and using specialized products to clean and protect surfaces like leather, plastic, and vinyl.",
                        "From vacuuming to deep cleaning carpets and upholstery, the interior detailing process rejuvenates the interior environment of your vehicle. Special attention is paid to dashboard cleaning, where UV protectant is used to prevent fading and cracking. Leather seats are treated with conditioners to maintain their suppleness, while fabric components are shampooed to lift embedded dirt and remove odors."
                    ]}
                />

                <Section
                    title="Glass Cleaning"
                    content={[
                        "Every detailing session includes cleaning the car windows and mirrors to ensure excellent visibility. This step helps in removing streaks or smudges for a clear view.",
                        "For a streak-free finish, a dedicated glass cleaner is used to clean both the inside and outside of windows. Detailers often recommend a different microfiber cloth for windows to prevent cross-contamination from other cleaning agents. For car enthusiasts, achieving crystal-clear glass is an essential part of making the car appear as new as possible."
                    ]}
                />

                <Section
                    title="Engine Bay Cleaning"
                    content={[
                        "While not included in every detailing package, cleaning the engine bay can enhance the overall appeal of your vehicle. It’s about removing dirt and grease to ensure components are in good condition.",
                        "Engine cleaning is a meticulous process that involves degreasing and removing built-up grime from various components, including hoses and plastic covers, to promote longevity and performance. Achieving this without water damage is a skill, as sections are hand-tidied to ensure no element is malfunctioning. A clean engine is not just visually appealing; it makes maintenance easier by quickly exposing any leaks."
                    ]}
                />

                <Section
                    title="Final Thoughts on Auto Detailing"
                    content={[
                        "In essence, auto detailing provides a thorough cleaning and rejuvenation of your vehicle, both inside and out. By understanding the components of detailing, you can ensure your car receives the treatment it deserves, extending its life and enhancing its aesthetic appeal."
                    ]}
                />
            </div>

            <BlogNavSlider currentIndex={3} />
            <QuoteForm />
        </>
    );
};

const Section = ({
    title,
    content,
}: {
    title: string;
    content: string[];
}) => (
    <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">{title}</h2>
        {content.map((paragraph, idx) => (
            <p key={idx} className="mb-4 leading-relaxed">
                {paragraph}
            </p>
        ))}
    </div>
);

export default BlogFour;

