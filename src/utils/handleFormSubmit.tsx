export async function handleFormSubmit(
    e: React.FormEvent,
    formType: "quote" | "service"
) {
    e.preventDefault();

    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        alert("Please select at least one service.");
        return;
    }

    const name = (document.querySelector('input[placeholder="Name"]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[placeholder="Email"]') as HTMLInputElement)?.value;
    const phone = (document.querySelector('input[placeholder="Phone"]') as HTMLInputElement)?.value;
    const vehicle = (document.querySelector('input[placeholder*="Year"]') as HTMLInputElement)?.value;
    const location = (document.querySelector('select') as HTMLSelectElement)?.value;
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
        selectedServices,
        message,
        type: formType,
    };

    try {
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert(`Your ${formType} request was sent successfully!`);
        } else {
            const errorText = await response.text();
            alert("Failed to send email: " + errorText);
        }
    } catch (err) {
        console.error("Error sending form:", err);
        alert("An error occurred. Check console for details.");
    }
}

