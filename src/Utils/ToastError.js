import toast from "react-hot-toast";

export const ToastError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};
