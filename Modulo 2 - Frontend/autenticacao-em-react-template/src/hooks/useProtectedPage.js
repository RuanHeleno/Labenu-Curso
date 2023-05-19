import { useEffect } from "react";
import { irParaLogin } from "../routes/coordinator";

export default function useProtectedPage(navigate) {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      irParaLogin(navigate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("token")]);
}
