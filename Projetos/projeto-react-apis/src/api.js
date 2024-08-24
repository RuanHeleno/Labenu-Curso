import axios from "axios";

const url = import.meta.env.VITE_API_URL;
//const urlSignUp = import.meta.env.VITE_API_URL_SIGNUP;
const urlSignUp = "https://labeddit.onrender.com";

export const apiSignUp = axios.create({
  baseURL: urlSignUp,
});

export const signUp = async (body) => {
  let result = "";

  await apiSignUp
    .post(`/users/signup`, body)
    .then((result = "success"))
    .catch((err) => (result = err.response.data));

  return result;
};

export const login = async (body) => {
  let result = "";

  await apiSignUp
    .post(`/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      result = "success";
    })
    .catch((err) => (result = err.response.data));

  return result;
};

export const api = axios.create({
  baseURL: url,
});

export const searchPokemon = async (pokemon) => {
  const res = await api
    .get(`${pokemon}`)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `${err}`,
      };
    });

  if (res.statusCode !== 422) return res;
};

export const getPokemons = async (limit = 50, offset = 0) => {
  const res = await api
    .get(`?limit=${limit}&offset=${offset}`)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `${err}`,
      };
    });

  if (res.statusCode !== 422) return res;
};

export const getPokemonData = async (url) => {
  const res = await axios
    .get(url)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `${err}`,
      };
    });

  if (res.statusCode !== 422) return res;
};
