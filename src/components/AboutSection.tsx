import QuoteForm from "./QuoteForm";

const AboutSection = () => {
  return (
    <>
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">About Wellness Detailing</h1>
      <p className="text-lg mb-6 text-gray-700">
        At Wellness Detailing, we're more than just a car wash — we're a team of passionate professionals dedicated to restoring and protecting your vehicle's beauty, inside and out. Based in the DMV area, our mission is to provide premium mobile detailing services that offer unmatched convenience, quality, and care.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-6 text-gray-700">
        We believe your car deserves more than a quick wash. Our mission is to bring the spa treatment to your vehicle — a wellness approach that emphasizes cleanliness, care, and preservation. From eco-friendly techniques to hand-applied finishes, we ensure every detail matters.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
        <li>Mobile convenience — we come to you</li>
        <li>Top-tier products and equipment</li>
        <li>Eco-friendly and water-efficient practices</li>
        <li>Highly-trained, detail-obsessed professionals</li>
        <li>Customized service packages for every vehicle</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Customer Commitment</h2>
      <p className="mb-6 text-gray-700">
        We pride ourselves on delivering exceptional results and building trust with every client. Whether it's your daily driver, a luxury vehicle, or a fleet — our goal is to exceed your expectations and leave your car looking and feeling brand new.
      </p>

      <div className="mt-8">
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition duration-200 ease-in-out"
        >
          Get A Free Quote
        </a>
      </div>
    </section>
    <QuoteForm />
    </>
  );
};

export default AboutSection;


