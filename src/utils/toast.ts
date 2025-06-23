import { toast } from "react-toastify";

export const showSuccessToast = (message: string) =>
    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
    });

export const showErrorToast = (message: string) =>
    toast.error(message, {
        position: "top-center",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
    });

