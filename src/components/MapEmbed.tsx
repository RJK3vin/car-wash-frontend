export default function MapEmbed() {
  return (
    <section className="w-full h-[450px] relative shadow-md rounded-2xl overflow-hidden container mx-auto">
      <iframe
        title="Wellness Detailing Service Area"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=maryland+(My%20Business%20Name)&t=&z=10&ie=UTF8&iwloc=B&ll=39.0458,-77.6&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}


