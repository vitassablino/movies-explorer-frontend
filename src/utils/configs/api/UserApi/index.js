const BASE_URL = 'https://api.movies-explorer.akula.nomoredomainsrocks.ru';

/* const BASE_URL = 'http://localhost:3001' */

const errorMessages = {
  401: 'Неверные данные для входа',
  409: 'Пользователь с таким email уже существует.',
  default: 'Проблема соединения. Повторите попытку позже.',
};

function checkRes(res) {
  if (res.ok) return res.json();
  const message = errorMessages[res.status] ?? errorMessages.default;
  return Promise.reject((new Error(message)));
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => {
      return checkRes(res);
    });
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => {
      return checkRes(res);
    });
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      return checkRes(res);
    });
};

export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      return checkRes(res);
    });
};

export const setUserInfo = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email }),
  })
    .then(res => {
      return checkRes(res);
    });
}
