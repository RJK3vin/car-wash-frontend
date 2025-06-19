import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"
import TestimonialSlider from "../components/TestimonialSlider"

export default function Reviews() {
    return (
        <>
            <GalleryHero header="Over 50 5-Star Reviews For Our Detailing Services" button="Get A Free Quote" loc="contact" url="https://placehold.co/1920x1080"/>
            <TestimonialSlider />
            <QuoteForm />
        </>
    )
}