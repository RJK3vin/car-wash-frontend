import { toast } from "react-toastify";
import { showPreviewToast } from "./toast";

export async function handleFormSubmit(e: React.FormEvent,) {
    e.preventDefault();

    const isLocalPreview = true;

    if (isLocalPreview || window.location.hostname !== "localhost") {
        showPreviewToast();
        return;
    }

    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        toast.error("Please select at least one service.", {
            autoClose: 5000,
        });
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
            toast.update(toastId, {
                render: "Your quote request was sent successfully!",
                type: "success",
                isLoading: false,
                closeOnClick: true,
                autoClose: 5000,
                closeButton: true
            });
        } else {
            const errorText = await response.text();
            toast.update(toastId, {
                render: "Failed to send email: " + errorText,
                type: "error",
                isLoading: false,
                closeOnClick: true,
                autoClose: 5000,
                closeButton: true
            });
        }
    } catch (err) {
        console.error("Error sending form:", err);
        toast.update(toastId, {
            render: "An error occurred. Check console for details.",
            type: "error",
            isLoading: false,
            closeOnClick: true,
            autoClose: 5000,
            closeButton: true
        });
    }
}

