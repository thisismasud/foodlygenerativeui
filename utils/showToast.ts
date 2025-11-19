import toast from "react-hot-toast";

export default function showToast(message: string, type: "success" | "error" | "loading" | "default" = "default", id?: string ) {
  if (type === "success") {
    toast.success(message, {id});
  } else if (type === "error") {
    toast.error(message, {id});
  } else if (type=== 'loading'){
    return toast.loading(message, {id})
  }else {
    toast(message, {id});
  }
}
