import QuoteForm from "../components/QuoteForm"
import MapEmbed from "../components/MapEmbed"
import ServiceForm from "../components/ServiceForm"

export default function Contact() {
  return (
    <>
      <section className="bg-cover bg-center text-gray-900 py-24 px-6" style={{ backgroundImage: "url('/your-hero-image.jpg')" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BOOK WITH US TODAY!</h1>
          <p className="text-lg max-w-2xl mx-auto">We'd love to hear from you to find out how we can help. Fill out the form or give us a call to get more information.</p>
        </div>
      </section>
      <ServiceForm />
      <QuoteForm />
      <MapEmbed />
    </>
  )
}