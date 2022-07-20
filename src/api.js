const URL = 'https://incode-backend-dev.herokuapp.com/';

export const logIn = async (username, password) => {
  const result = await fetch(`${URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return result;
};

export const registerUser = async (username, password, displayName) => {
  const result = await fetch(`${URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      password,
      username,
      displayName,
    }),
  });

  return result;
};

export const logOut = async () => {
  const result = await fetch(`${URL}/auth/logout`, {
    method: 'GET',
  });

  return result;
};
