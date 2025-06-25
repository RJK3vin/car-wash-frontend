import toast from "react-hot-toast";

export async function handleFormSubmit(e: React.FormEvent,) {
    e.preventDefault();
    const isProduction = window.location.hostname !== "localhost";

    if (isProduction) {
        toast.error("🚧 This is a preview version of the website. Form submission is disabled while development is in progress. It will be fully functional upon completion.", {
            duration: 10000,
        });
        return;
    }

    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        toast.error("Please select at least one service.", { duration: 7000 });
        return;
    }

    const name = (document.querySelector('input[placeholder="Name"]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[placeholder="Email"]') as HTMLInputElement)?.value;
    const phone = (document.querySelector('input[placeholder="Phone"]') as HTMLInputElement)?.value;
    const vehicle = (document.querySelector('input[placeholder*="Year"]') as HTMLInputElement)?.value;
    const location = (document.querySelector('select') as HTMLSelectElement)?.value;
    const address = (document.querySelector('input[placeholder*="address"]') as HTMLInputElement)?.value
    const message = (document.querySelector('textarea') as HTMLTextAreaElement)?.value;

    const selectedServices = Array.from(checkedBoxes)
        .map((el) => (el as HTMLInputElement).parentElement?.innerText.trim())
        .filter(Boolean)
        .join(", ");

    const payload = {
        name,
        email,
        phone,
        vehicle,
        location,
        address,
        selectedServices,
        message,
    };

    const toastId = toast.loading("Sending your request...");

    try {
        const response = await fetch("http://localhost:5001/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            toast.success("Your quote request was sent successfully!", { id: toastId, duration: 5000, });
        } else {
            const errorText = await response.text();
            toast.error("Failed to send email: " + errorText, { id: toastId, duration: 7000, });
        }
    } catch (err) {
        console.error("Error sending form:", err);
        toast.error("An error occurred. Check console for details.", { id: toastId, duration: 7000, });
    }
}

