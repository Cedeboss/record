export const getError = (error: any) => {
  // Error Network
  if (error.code === "ERR_NETWORK") {
    return "Erreur du serveur, contactez votre administrateur";
  }

  // User doesn't exist
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Cannot find user"
  ) {
    return `Vous n'êtes pas encore inscrit à l'application`;
  }

  // Incorrect user informations
  if (
    (error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Incorrect password") ||
    (error.code === "ERR_BAD_REQUEST" &&
    error.response.data.message === "Invalid credentials.")
  ) {
    return `Email ou mot de passe incorrect, Réessayez`;
  }


  // User already exist
  if (
    error.code === "ERR_BAD_REQUEST" &&
    error.response.data === "Email already exists"
  ) {
    return `Cette adresse email existe déjà,
    Saisissez vos identifiants`;
  }
};
