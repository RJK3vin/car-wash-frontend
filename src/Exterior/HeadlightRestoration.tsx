import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function HeadlightRestoration() {
  return (
    <>
      <ServiceHero header="See Clearly, Drive Safely: Professional Headlight Restoration by Wellness Detailing" subheader="Don't let dull, cloudy highlights compromise your nighttime visibility and safety. Our expert retoration service restores clarity and improves your car's appearance." url="https://placehold.co/1920x1080" />
      <section className="mt-16 mb-16">
        <div className="space-y-12">
          <Helmet>
            <title>Headlight Restoration | Wellness Detailing</title>
            <meta name="description" content="Professional headlight restoration to improve safety, visibility, and your vehicle's appearance. Schedule a mobile service today!" />
          </Helmet>
          <section className="space-y-6 text-center">
            <h1 className="text-3xl font-bold">Don't Be Left in the Dark: The Importance of Headlight Restoration</h1>
            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <p>Headlights are crucial for safe nighttime driving. Over time, headlights become cloudy and discolored due to exposure to sunlight, UV rays, and environmental elements. This reduces light output, compromising visibility and posing a safety hazard.</p>
              <p className="font-bold">Here's why headlight restoration is essential:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li><strong>Enhanced Nighttime Visibility:</strong> Restored headlights significantly improve nighttime visibility, allowing you to see the road and potential hazards more clearly.</li>
                <li><strong>Improved Safety:</strong> Brighter headlights keep you and others on the road safe by ensuring better visibility in low-light conditions.</li>
                <li><strong>Restored Appearance:</strong> Clear, bright headlights enhance your car's overall appearance.</li>
                <li><strong>Increased Resale Value:</strong> A car with clear headlights will undoubtedly fetch a higher price when you decide to sell.</li>
              </ul>
            </div>
            <div className="max-w-5xl mx-auto">
              <img src="/paint-correction-intro.png" alt="Paint correction showcase" className="w-full h-[525px] object-cover rounded-lg border border-gray-300" />
            </div>
            <Link to="/contact" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
              Get A Free Quote
            </Link>
          </section>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Why Choose Wellness Detailing for Headlight Restoration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Experienced Technicians",
                  desc: "Our certified detailers are highly trained and experienced in safe and effective headlight restoration techniques."
                },
                {
                  title: "Advanced Equipment & Techniques",
                  desc: "We use top-of-the-line equipment and proven techniques to achieve optimal results."
                },
                {
                  title: "Lasting Results",
                  desc: "Our restoration process includes UV protection to ensure long-lasting clarity for your headlights."
                },
                {
                  title: "Customer Satisfaction Guaranteed",
                  desc: "We stand behind our work and offer a satisfaction guarantee on all headlight restoration services."
                }
              ].map(({ title, desc }, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-gray-300 rounded-lg flex flex-col items-center text-center space-y-2"
                >
                  <CheckCircle className="text-orange-500 w-6 h-6" />
                  <p className="font-bold">{title}</p>
                  <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
            >
              Get A Free Quote
            </Link>
          </div>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">
              Our Headlight Restoration Process: Bringing Clarity Back into Focus
            </h2>
            <p className="text-center max-w-2xl mx-auto">
              At Wellness Detailing, we use a meticulous process to restore your headlights to their original clarity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Headlight Inspection",
                "Surface Cleaning",
                "Sanding & Polishing",
                "UV Protection"
              ].map((title, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-300 rounded-lg flex flex-col items-center text-center space-y-2"
                >
                  <div className="text-orange-500 font-bold text-xl">{i + 1}</div>
                  <p className="font-bold">{title}</p>
                  <p className="text-sm">
                    {[
                      "Our technicians will thoroughly assess the condition of your headlights to determine the appropriate restoration technique.",
                      "The headlight surface is meticulously cleaned to remove any dirt, grime, or oxidation that might hinder the restoration process.",
                      "A multi-stage sanding and polishing process removes the cloudy, discolored layer of plastic, restoring the headlight's clear lens.",
                      "A final application of a UV protectant helps shield the headlights from future sun damage and maintain their clarity for longer."
                    ][i]}
                  </p>
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
          <section className="space-y-12">
            <h2 className="text-3xl font-bold text-center">Headlight Restoration FAQs: Shining a Light on Your Questions</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-lg">
                At Wellness Detailing, we understand you might have questions about our professional headlight restoration service. Here are answers to some of the most frequently asked questions to help you make an informed decision:
              </p>
              <div className="space-y-8">
                <div>
                  <p className="font-bold text-lg">1. How can I tell if my headlights need restoration?</p>
                  <p className="mt-2">There are a few telltale signs:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Visibility:</strong> Do you feel your headlights are dimmer than before, making it harder to see at night?</li>
                    <li><strong>Appearance:</strong> Are your headlights cloudy, hazy, or discolored?</li>
                    <li><strong>Texture:</strong> Do the headlights feel rough to the touch instead of smooth and clear?</li>
                  </ul>
                  <p className="mt-2">If you notice any of these signs, your headlights likely need restoration.</p>
                </div>
                <div>
                  <p className="font-bold text-lg">2. Is headlight restoration a permanent fix?</p>
                  <p className="mt-2">
                    Headlight restoration can significantly improve clarity and last for several years, especially with proper care. However, headlights are continuously exposed to sunlight and environmental elements. We recommend periodic maintenance (every 1-2 years) to maintain optimal clarity and longevity.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">3. Can't I just use a home headlight restoration kit?</p>
                  <p className="mt-2">
                    Home kits can be an option, but they may not be as effective or long-lasting as a professional service. Professional detailers have access to advanced equipment, techniques, and high-quality products to achieve superior results.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">4. Will headlight restoration damage my headlights?</p>
                  <p className="mt-2">
                    Not if done properly. At Wellness Detailing, we use safe and effective techniques that avoid harsh chemicals or abrasive processes that could harm your headlights.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">5. What happens if my headlights have deep scratches or cracks?</p>
                  <p className="mt-2">
                    In some cases, deep scratches or cracks might require headlight replacement. Our technicians will assess the condition of your headlights during the inspection and recommend the most suitable solution.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">6. How long does headlight restoration take?</p>
                  <p className="mt-2">
                    Headlight restoration typically takes 30-60 minutes per headlight.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">7. Can you restore headlights made of glass?</p>
                  <p className="mt-2">
                    Yes, our restoration process is effective for both plastic and glass headlights.
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  Ready to restore clarity and safety to your nighttime driving? Get a Free Headlight Restoration Quote Today!
                </p>
                <p className="font-bold">We're here to answer any further questions you may have! Contact Wellness Detailing today!</p>
              </div>

              <div className="text-center pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
                >
                  Get A Free Quote
                </Link>
              </div>
            </div>
          </section>
          <section className="space-y-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Headlight Restoration Gallery</h2>
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
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
              >
                Get A Free Quote
              </Link>
            </div>
          </section>
        </div>
      </section>
      <QuoteForm />
    </>
  )
}