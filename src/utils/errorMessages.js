const AUTHORIZATION_ERRORS = {
  registration: "Произошла ошибка при регистрации пользователя.",
  authorization: "Произошла ошибка при авторизации пользователя.",
  profileChanges: "Произошла ошибка при обновлении данных профиля.",
  tokenValidation: "Произошла ошибка при проверке токена.",
};

const MOVIE_CARD_ERRORS = {
  getSavedMovies:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и обновите страницу.",
  getMovies:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  likeMovies:
    "Во время лайка карточки произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  deleteMovies:
    "Во время удаления карточки произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
};

const API_ERRORS = {
  general: "Произошла ошибка при запросе к API",
};

export { AUTHORIZATION_ERRORS, MOVIE_CARD_ERRORS, API_ERRORS };