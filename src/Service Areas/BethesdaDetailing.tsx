import ServiceHero from "../components/ServiceHero";
import QuoteForm from "../components/QuoteForm";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function BethesdaDetailing() {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");
  const serviceAreas = [
    "Poolesville MD Mobile Detailing",
    "Columbia Mobile Detailing",
    "College Park Mobile Detailing",
    "Damascus MD Mobile Detailing",
    "Laurel MD Mobile Detailing",
    "Beltsville MD Mobile Detailing",
    "Silver Spring MD Mobile Detailing",
    "Bethesda MD Mobile Detailing",
    "Potomac MD Mobile Detailing",
    "Clarksburg Mobile Detailing",
    "Gaithersburg Mobile Detailing",
    "Rockville MD Mobile Detailing",
    "Olney MD Mobile Detailing"
  ]
  return (
    <>
      <ServiceHero header="Bethesda Mobile Detailing: Revive Your Ride's Shine at Your Place" subheader="Welcome to Potomac Mobile Detailing, your premier destination for reviving the elegance and enhancing the value of your car in Potomac, MD. We bring the showroom shine directly to your driveway, eliminating the need to travel to a detail shop." url="https://placehold.co/1920x1080" />
      <div className="bg-white text-gray-800">
        <Helmet>
          <title>Bethesda Mobile Detailing | Premium Car Detailing in Bethesda, MD</title>
          <meta
            name="description"
            content="Bethesda Mobile Detailing provides high-quality mobile car detailing services in Bethesda, MD. Interior cleaning, paint correction, and more—all brought to you."
          />
        </Helmet>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            About Bethesda Mobile Detailing: Your Local Car Care Experts
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <p>
                Bethesda Mobile Detailing is a locally owned and operated business with deep roots in the Bethesda
                community. We understand the unique challenges Bethesda cars face, from enduring summer heat to the
                occasional winter snowstorm. That's why we provide the highest quality detailing services in Bethesda,
                MD, tailored to restore your car's shine, shield it from the elements, and keep it looking its best
                year-round.
              </p>
              <p>
                Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use
                only the best car care products and equipment to achieve exceptional, long-lasting results. We are
                committed to providing exceptional service, convenience, and competitive pricing to our valued customers
                in Bethesda. Let Bethesda Mobile Detailing be your trusted partner in keeping your car looking amazing!
              </p>
            </div>
            <div className="flex-1 flex gap-4 justify-center">
              <div className="w-64 h-40 bg-gray-200 rounded-md" />
              <div className="w-64 h-40 bg-gray-200 rounded-md" />
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Services We Offer: Personalized Detailing Solutions for Your Bethesda Car
          </h2>
          <div className="space-y-4">
            <p>
              At Bethesda Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Bethesda, MD to
              cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's
                interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning
                included), hard surfaces, and windows, and remove any unwanted trash.
              </li>
              <li>
                <strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy
                schedules, including vacuuming, surface wiping, window cleaning, and trash removal.
              </li>
              <li>
                <strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to
                your car's interior with our professional smoke odor removal service.
              </li>
              <li>
                <strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our
                restorative service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.
              </li>
              <li>
                <strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash
                and high-quality wax application.
              </li>
              <li>
                <strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step
                paint correction service. This process removes minor scratches, swirl marks, and oxidation for a
                mirror-like finish.
              </li>
              <li>
                <strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating,
                offering superior gloss, scratch resistance, and easier maintenance for years to come.
              </li>
              <li>
                <strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our
                professional headlight restoration service.
              </li>
              <li>
                <strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's
                exterior, returning it to its original condition.
              </li>
              <li>
                <strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road
                debris with a virtually invisible paint protection film.
              </li>
              <li>
                <strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap.
                Choose from a variety of colors, designs, and finishes to express your unique style.
              </li>
            </ul>
            <p className="mt-6 font-semibold text-lg">Bethesda Mobile Detailing: Bring Back Your Car's Shine at Home!</p>
            <p>
              Contact us today for a free quote and experience the Bethesda Mobile Detailing difference! We guarantee
              exceptional results delivered conveniently at your location in Bethesda, MD. Let us make your car shine
              again!
            </p>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-white text-gray-800">
        <Helmet>
          <title>Bethesda Mobile Detailing Service Areas | Mobile Car Detailing Near You</title>
          <meta
            name="description"
            content="Bethesda Mobile Detailing serves Bethesda, MD and nearby cities with high-quality mobile car detailing. Discover if we serve your area today!"
          />
        </Helmet>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Bethesda Mobile Detailing Service Areas: Bringing the Shine Throughout Bethesda, MD (and Beyond!)
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p>
                Bethesda Mobile Detailing proudly serves Bethesda, Maryland, and the surrounding areas. We're constantly
                expanding our reach to bring the convenience of mobile detailing to more drivers! Whether you're parked in
                the heart of Bethesda or call a nearby community home, we can help you keep your car looking its best.
              </p>

              <ul className="list-disc list-inside space-y-1">
                {serviceAreas.map((area) => {
                  const route = area.toLowerCase().replace(/\s+/g, "");
                  const isCurrent = currentPath === route;
                  return (
                    <p key={route}>
                      <Link
                        to={`/${route}`}
                        className={`${isCurrent
                          ? "text-orange-500 font-semibold"
                          : "text-black hover:text-orange-500 transition-colors"
                          }`}
                      >
                        {area}
                      </Link>
                    </p>
                  );
                })}
              </ul>

              <p>
                Not sure if we service your specific area? Not to worry! <strong>Contact us today!</strong> We'd be happy
                to discuss your detailing needs and answer any questions you may have. We're always looking for ways to
                expand our service coverage in Potomac and Chevy Chase, MD, so there's a good chance we can brighten your
                car's day!
              </p>
            </div>

            <div className="flex-1">
              <div className="w-full h-64 bg-gray-200 rounded-md" />
            </div>
          </div>

        </section>
      </div>
      <div className="bg-white text-gray-800">
        <Helmet>
          <title>Bethesda Mobile Detailing FAQs | Expert Car Detailing in Bethesda, MD</title>
          <meta
            name="description"
            content="Get answers to common questions about Bethesda Mobile Detailing services. Discover how we provide superior mobile car detailing in Bethesda, MD."
          />
        </Helmet>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Bethesda Mobile Detailing FAQs: Your Bethesda Car Detailing Questions Answered!
          </h2>
          <div className="space-y-6">
            <p>
              We understand you might have questions about our mobile detailing services in Bethesda, MD. Here are some
              frequently asked questions to help you decide if Bethesda Mobile Detailing is right for you:
            </p>

            <div>
              <h3 className="font-semibold">What sets Bethesda Mobile Detailing apart from a car wash?</h3>
              <p>
                Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning,
                polishing, and protection process for both the interior and exterior of your car, unlike a car wash that
                focuses primarily on a quick exterior clean.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">How often should I get my car detailed in Bethesda?</h3>
              <p>
                The frequency depends on your driving habits and how well you maintain your car. Generally, a professional
                detail every 6-12 months is recommended in Bethesda, MD to maintain a fresh look and protect your car's
                finish.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you offer mobile detailing packages in Bethesda?</h3>
              <p>
                Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile
                detailing packages in Bethesda, MD to fit your specific budget and requirements. Browse our options online
                or contact us for a free quote.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can you remove pet hair from my car's interior in Bethesda?</h3>
              <p>
                Yes! We offer specialized pet hair removal services using proven techniques to eliminate embedded fur and
                restore your vehicle's interior.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Bethesda, MD Mobile Detailing Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-full h-40 bg-gray-300 rounded-md" />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
      <QuoteForm />
    </>
  )
}