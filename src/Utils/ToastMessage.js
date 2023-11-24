import toast from "react-hot-toast";

export const ToasMessage = (msg) => {
      toast.success(msg, {
            position: "top-right",
          });
}