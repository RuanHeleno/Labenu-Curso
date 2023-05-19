import { useState } from "react";
import axios from "axios";

import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";
import useForms from "../hooks/useForms";

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {
  const { form, onChange } = useForms({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listed, setListed] = useState(false);

  const header = {
    headers: {
      Authorization: "ruan-rocha-ozemela",
    },
  };

  const createUsers = async (name, email) => {
    const body = {
      name,
      email,
    };

    setLoading(true);

    await axios
      .post(`${BASE_URL}labenusers/users`, body, header)
      .then(() => alert("Usuário cadastrado com sucesso!"))
      .catch((e) => console.log(e.response.data));

    setLoading(false);
  };

  const getAllUsers = async () => {
    setLoading(true);

    await axios
      .get(`${BASE_URL}labenusers/users`, header)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => console.log(e.response.data));

    setLoading(false);
  };

  const data = {
    form,
    onChange,
    createUsers,
    getAllUsers,
    users,
    listed,
    setListed,
    loading,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
