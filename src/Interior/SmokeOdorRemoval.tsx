import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function SmokeOdorRemoval() {
    return (
        <>
            <ServiceHero header="Eliminate Stubborn Smoke Odors: Breathe Easy with Wellness Detailing" subheader="Has smoke permeated your car's interior? We offer professional smoke odor removal services to eliminate lingering smells and restore a fresh, clean environment." url="https://placehold.co/1920x1080"/>

            <QuoteForm />
        </>
    )
}