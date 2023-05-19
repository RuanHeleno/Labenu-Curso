export const goToHome = (navigate) => {
  navigate("/");
};

export const goToProfile = (navigate, name) => {
  navigate(`/profile/${name}`);
};

export const goToLogin = (navigate) => {
  navigate(`/login`);
};
