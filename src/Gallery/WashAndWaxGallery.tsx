import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"

export default function WashAndWaxGallery() {
    return (
        <>
            <GalleryHero header="View Our Wash and Wax Work" button="Learn More About Wash & Wax Service" url="https://placehold.co/1920x1080" loc="washandwax" />
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition"
                            >
                                <img
                                    src={`https://placehold.co/600x400?text=Photo+${i}`}
                                    alt={`Wash and Wax ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}