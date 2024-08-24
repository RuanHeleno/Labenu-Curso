import { useState } from "react";

export default function useForms(estadoInicial) {
  const [form, setForm] = useState(estadoInicial);

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
}
