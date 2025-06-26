import { toast } from "react-toastify";

let toastShown = false;

export function showPreviewToast() {
  if (toastShown) return;
  toastShown = true;

  toast.error("🚧 This is a preview version of the website. Form submission is disabled.", {
    toastId: "preview-toast", // prevents duplicates
    onClose: () => {
      toastShown = false;
    },
  });
}
