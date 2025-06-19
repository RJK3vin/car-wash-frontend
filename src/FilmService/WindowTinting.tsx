import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function WindowTinting() {
    return (
        <>
            <ServiceHero
                header="Maryland Mobile Window Tinting - Enhance Privacy & Style (Gaithersburg, Rockville, MD)"
                subheader="Wellness Detailing offers professional mobile window tinting services through Maryland. Improve your car's comfort, security, and appearance with out high-quality films"
                url="https://placehold.co/1920x1080"
            />
            <div className="space-y-16 px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto">
                <Helmet>
                    <title>Window Tinting | Wellness Detailing</title>
                    <meta
                        name="description"
                        content="Discover the benefits of professional window tinting from Wellness Detailing. Style, UV protection, and legal compliance—all tailored to your needs."
                    />
                </Helmet>
                <section className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-8">
                        <h1 className="text-3xl font-bold">Window Tinting Explained: A Shield of Style and Protection for Your Car</h1>
                        <p>
                            Imagine stepping into a cooler, more comfortable car interior, protected from the sun's harsh glare and harmful UV rays. That's the power of window tint! It's a thin layer of laminate film applied directly to your car's windows, offering a range of benefits beyond just a stylish look.
                        </p>
                        <p>
                            At Wellness Detailing, we understand that every driver has unique needs. That's why we offer a variety of high-quality window film options to customize your tinting experience.
                        </p>
                        <p>
                            <strong>Compliance with Maryland Law:</strong> We prioritize using window film that adheres to Maryland's legal tint requirements. During your consultation, our experts will explain the regulations and recommend the perfect tint percentage for your vehicle to ensure both style and legal compliance.
                        </p>
                        <p>
                            This description provides a more comprehensive explanation of window tint's benefits and functionality. It also emphasizes Wellness Detailing's commitment to customization and legal compliance.
                        </p>
                    </div>
                    <img src="/placeholder1.jpg" alt="Window tinting protection" className="flex-1 rounded-lg shadow object-cover w-full h-[550px]" />
                </section>
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                    >
                        Get A Free Quote
                    </Link>
                </div>
                <section className="flex flex-col md:flex-row items-center gap-8">
                    <img src="/placeholder2.jpg" alt="Benefits of window tint" className="flex-1 rounded-lg shadow object-cover w-full h-[550px]" />
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold">Transform Your Driving Experience: Unveiling the Benefits of Car Window Tint</h2>
                        <ul className="list-disc pl-5 space-y-8">
                            <li><strong>Beat the Heat:</strong> Imagine stepping into a cool oasis on a scorching day. Window tint significantly reduces heat buildup inside your car by rejecting infrared rays. This translates to a more comfortable ride, especially for long journeys, and allows your air conditioning to work less efficiently, potentially saving on fuel costs.</li>
                            <li><strong>Sun Protection on-the-Go:</strong> Window tint acts as a shield, blocking up to 99% of harmful UV rays. This protects you and your passengers from premature aging, sunburn, and even reduces the risk of skin cancer. Additionally, it safeguards your car's interior from sun damage, preventing fading and cracking of upholstery and leather surfaces.</li>
                            <li><strong>Enhanced Privacy & Security:</strong> Window tint creates a veil of privacy, obscuring the view into your car. This discourages unwanted attention and deters potential theft by making valuables less visible. Furthermore, window tint adds a layer of strength to your car windows, making them more resistant to shattering in case of accidents or attempted break-ins.</li>
                            <li><strong>A Touch of Class & Style:</strong> Window tint offers a sleek and sophisticated aesthetic, adding a touch of personalization to your car's overall appearance. Choose from a variety of film options to achieve the perfect level of darkness and style that complements your vehicle.</li>
                        </ul>
                    </div>
                </section>
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                    >
                        Get A Free Quote
                    </Link>
                </div>
                <section className="space-y-6 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">Tired of Subpar Window Tint? Experience the Wellness Detailing Difference!</h2>
                    <div className="space-y-4 text-left">
                        <div>
                            <p>Tired of DIY window tinting headaches? At Wellness Detailing, we take the hassle out of achieving a flawless, long-lasting finish. Here's a glimpse into our meticulous 3-step mobile window tinting process:</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Step 1: Precision Prep for a Perfect Bond</p>
                            <p>Our detail experts meticulously clean your car windows using a multi-step process. This removes any dirt, dust, or debris that could compromise the film's adhesion. A clean surface is essential for a smooth, bubble-free application. The window film is carefully measured to perfectly match the unique contours of your car's windows. This ensures a precise fit and a sleek, professional look.</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Step 2: Expert Application for Lasting Results</p>
                            <p>Our experienced technicians use specialized tools and techniques to meticulously apply the window film. This ensures a flawless installation, free of bubbles or imperfections. For optimal adhesion, the film is gently heated using a professional heat gun. This activates the adhesive and creates a long-lasting bond that endures weather and time.</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Step 3: Quality Check & Aftercare</p>
                            <p>After installation, our team thoroughly inspects your windows for any imperfections. We want to ensure a flawless finish that meets our high standards and exceeds your expectations. We'll provide detailed aftercare instructions to optimize the performance and longevity of your window tint. This includes proper cleaning methods and precautions to take during the curing period.</p>
                        </div>
                        <div>
                            By following these meticulous steps, Wellness Detailing guarantees a professional window tinting experience that delivers lasting results, superior style, and enhanced comfort for your car.
                        </div>
                    </div>
                    <div className="pt-2">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">
                        Window Tinting FAQs: Get Your Questions Answered!
                    </h2>
                    <p>
                        Here at Wellness Detailing, we understand you might have questions about window tinting. We've compiled answers to some of the most frequently asked questions to help you make an informed decision:
                    </p>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-2 font-semibold">Is window tinting legal in Maryland?</p>
                            <p>
                                Yes, window tint is legal in Maryland. However, there are specific regulations regarding the darkness levels for different vehicle types. We stay up-to-date on Maryland's tint laws and will recommend the perfect tint percentage for your car to ensure both style and legal compliance during your consultation.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold">What types of tint do you offer?</p>
                            <p className="mb-4">
                                We offer a variety of high-quality window film options to meet your individual needs and preferences. Some popular choices include:
                            </p>
                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                <li><strong>Dyed Film:</strong> Offers a cost-effective option for basic heat rejection and UV protection.</li>
                                <li><strong>Ceramic Film:</strong> Provides superior heat rejection while maintaining excellent clarity.</li>
                                <li><strong>Metallic Film:</strong> Offers the highest level of heat rejection but may have a slightly reflective appearance.</li>
                            </ul>
                            <p>
                                During your consultation, we'll discuss the benefits and drawbacks of each type of film to help you choose the perfect one for your car.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold">How much does window tinting cost?</p>
                            <p>
                                The cost of window tinting depends on several factors, including the size of your car, the type of window film you choose, and the number of windows you want tinted. We offer free consultations where we can provide a transparent quote based on your specific needs.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold">Will window tint damage my windows?</p>
                            <p>
                                No, professional window tinting using high-quality film will not damage your car windows. In fact, window tint can help protect your windows from scratches and UV damage.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold">How long does it take?</p>
                            <p>
                                The window tinting process typically takes 2–4 hours depending on the size and complexity of your vehicle. We'll provide a more accurate timeframe during your consultation.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold">Do you offer a warranty on your window tinting services?</p>
                            <p>
                                Yes, we stand behind our work and offer a warranty on our window tinting services. This ensures your peace of mind and guarantees a long-lasting, high-quality finish.
                            </p>
                        </div>
                    </div>
                    <div className="text-lg font-semibold mt-6">
                        Ready to experience the many benefits of window tinting? Schedule your free consultation with Wellness Detailing today!
                    </div>
                    <div className="text-center pt-4">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">Window Tint Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <img src="/placeholder-gallery1.jpg" alt="Tint gallery 1" className="rounded-lg shadow object-cover h-[400px] w-full" />
                        <img src="/placeholder-gallery2.jpg" alt="Tint gallery 2" className="rounded-lg shadow object-cover h-[400px] w-full" />
                        <img src="/placeholder-gallery3.jpg" alt="Tint gallery 3" className="rounded-lg shadow object-cover h-[400px] w-full" />
                        <img src="/placeholder-gallery4.jpg" alt="Tint gallery 4" className="rounded-lg shadow object-cover h-[400px] w-full" />
                    </div>
                    <div className="text-center pt-2">
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