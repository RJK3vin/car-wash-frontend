import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function MiniInteriorDetail() {
    return (
        <>
            <ServiceHero header="Refresh Your Ride in Minutes: Mini Interior Detail by Wellness Detailing" subheader="Don't have time for a full interior detail? Our Mini Detail is perfect for busy schedules, giving your car's interior a quick and effective refresh." url="https://placehold.co/1920x1080"/>

            <QuoteForm />
        </>
    )
}