import GalleryHero from "../components/GalleryHero"
import QuoteForm from "../components/QuoteForm"
import { Link } from "react-router-dom"

export default function AppointmentDepositPolicy() {
    return (
        <>
            <GalleryHero header="Appointment Deposit Policy" button="Get A Free Quote" loc="contact" url="https://placehold.co/1920x1080" />
            <section className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-semibold mb-6">Appointment Deposit Policy: Securing Your Spot at Wellness Detailing</h2>
                <p className="mb-4">
                    At Wellness Detailing, we appreciate your business and strive to provide the best possible scheduling experience. To ensure efficient use of our detailers' time and maintain a smooth booking process, we have an appointment deposit policy in place.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">How Deposits Work:</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>
                        A deposit of <strong>[Deposit amount]</strong> is required to confirm your appointment for any detailing service, including both interior and exterior detailing or our mini-detail service.
                    </li>
                    <li>
                        This deposit can be conveniently paid <strong>[mention payment methods accepted]</strong> at the time of booking your appointment.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Using Your Deposit:</h3>
                <p className="mb-4">
                    The deposit amount will be applied towards the final cost of your detailing service on the day of your appointment.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Changes or Cancellations:</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>
                        We understand that schedules can change. To ensure fairness for both our detailers and our clients, we kindly ask that you notify us at least <strong>[Number]</strong> hours before your scheduled appointment time to reschedule or cancel without penalty.
                    </li>
                    <li>
                        Cancellations or rescheduling requests made with less than <strong>[Number]</strong> hours' notice will result in the forfeiture of your deposit.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Exceptions:</h3>
                <p className="mb-4">
                    In some unforeseen circumstances, such as severe weather conditions that may prevent safe detailing, we may need to reschedule your appointment. We will notify you as soon as possible and work with you to find a suitable alternative time. In such cases, your deposit will be applied towards the rescheduled appointment.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Why Deposits Matter:</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        Deposits help us maintain a steady schedule for our detailers, allowing them to focus on providing exceptional service to our clients.
                    </li>
                    <li>
                        They also help us reduce the number of last-minute cancellations, ensuring that we can efficiently serve all our customers.
                    </li>
                </ul>

                <p className="mb-6">
                    We appreciate your understanding and cooperation regarding our appointment deposit policy. If you have any questions, please don't hesitate to contact Wellness Detailing!
                </p>

                <div className="flex justify-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            <QuoteForm />
        </>
    )
}