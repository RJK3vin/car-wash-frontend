import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"

export default function OurTeam() {
    const team = [
        { name: 'David Castillo', img: '/images/david.jpg' },
        { name: 'Isai Castillo', img: '/images/isai.jpg' },
        { name: 'Junior Gbego', img: '/images/junior.jpg' },
        { name: 'Joe El Khatib', img: '/images/joe.jpg' },
    ];

    return (
        <>
            <GalleryHero header="MEET THE CREW!" button="Get A Free Quote" url="https://placehold.co/1920x1080" loc="contact" />
            <div className="flex justify-center items-center gap-10 py-16 px-4 md:px-10 flex-wrap text-gray-800">
                {team.map((person) => (
                    <div key={person.name} className="text-center">
                        <img
                            src="https://placehold.co/1920x1080"
                            alt={person.name}
                            className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg"
                        />
                        <p className="mt-3 font-medium">{person.name}</p>
                    </div>
                ))}
            </div>
            <QuoteForm />
        </>
    )
}