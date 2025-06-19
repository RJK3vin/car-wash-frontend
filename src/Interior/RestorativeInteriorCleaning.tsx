import ServiceHero from "../components/ServiceHero"
import QuoteForm from "../components/QuoteForm"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function RestorativeInteriorCleaning() {
    return (
        <>
            <ServiceHero header="Restorative Interior Cleaning by Wellness Detailing" subheader="Has your car's interior seen better days? Our meticulous restorative cleaning service brings neglected interiors back to their original glory. We eliminate deep-seated dirt, grime, and stains, leaving your car looking and feeling brand new." url="https://placehold.co/1920x1080"/>

            <QuoteForm />
        </>
    )
}