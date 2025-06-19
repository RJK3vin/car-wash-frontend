import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"

export default function PaintCorrectionGallery() {
    return (
        <>
            <GalleryHero header="Paint Correction Gallery" button="Learn More About Paint Correction Service" url="https://placehold.co/1920x1080" loc="paintcorrection"/>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow relative"
                        >
                            <img
                                src={`https://placehold.co/600x400?text=Photo+${i}`}
                                alt={`Engine Cleaning ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <QuoteForm />
        </>
    )
}