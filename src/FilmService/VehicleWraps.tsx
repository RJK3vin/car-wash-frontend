import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export default function VehicleWraps() {
    return (
        <>
            <ServiceHero
                header="Unleash Your Creativity: Custom Car Wraps by Wellness Detailing"
                subheader="Turn your car into a rolling masterpiece with out high-quality car wraps. From full vehicle wraps to partial accents, we offer nedless design possibilities and expert installation to bring your vision to life."
                url="https://placehold.co/1920x1080"
            />
        </>
    )
}