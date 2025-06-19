import QuoteForm from "../components/QuoteForm"
import MapEmbed from "../components/MapEmbed"
import ServiceForm from "../components/ServiceForm"
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="bg-cover bg-center text-gray-900 py-24 px-6" style={{backgroundImage: `url('https://placehold.co/1920x1080')`}}>
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">BOOK WITH US TODAY!</h1>
                    <p className="text-lg max-w-2xl mx-auto">We'd love to hear from you to find out how we can help. Fill out the form or give us a call to get more information.</p>
                </div>
            </section>
            <ServiceForm />
            <MapEmbed />
            <QuoteForm />
        </>
    )
}