export const goToHome = (navigate) => {
  navigate("/");
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemon = (navigate, id) => {
  navigate(`/pokemon/${id}`);
};

export const goToSignUp= (navigate) => {
  navigate("/signup");
};

export const goToLogin = (navigate) => {
  navigate("/login");
};