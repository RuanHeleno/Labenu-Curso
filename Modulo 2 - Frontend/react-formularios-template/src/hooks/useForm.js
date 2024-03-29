import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const onChangeInputs = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return [form, onChangeInputs, setForm];
}
