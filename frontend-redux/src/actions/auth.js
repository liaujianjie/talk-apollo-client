import axios from "axios";

export const AUTH_LOGIN = "AUTH::LOGIN";
export const AUTH_LOGOUT = "AUTH::LOGOUT";

export const login = credentials => async dispatch => {
  const { data } = await axios.post("/Users/login", credentials);
  dispatch({
    type: AUTH_LOGIN,
    payload: data
  });
};

export const logout = () => async dispatch => {
  dispatch({ type: AUTH_LOGOUT });
};
