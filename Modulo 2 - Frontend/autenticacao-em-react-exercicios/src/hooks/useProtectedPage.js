import { useEffect } from "react";
import { goToLogin } from "../routes/coordinator";

export default function useProtectedPage(navigate) {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      goToLogin(navigate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("token")]);
}
