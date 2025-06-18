export default function MapEmbed() {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="Wellness Detailing Service Area"
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}
