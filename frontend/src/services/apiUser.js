/* eslint-disable no-useless-catch */
import axios from "axios";

export async function signup({
  first_name,
  last_name,
  address,
  email,
  password,
  confirm_password,
}) {
  const { data } = await axios.post("register", {
    first_name,
    last_name,
    address,
    email,
    password,
    confirm_password,
  });

  return data;
}

export async function login({ email, password }) {
  const { data } = await axios.post(
    "login",
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

  return data;
}

export async function getUser() {
  const res = await axios.get("user");

  return res.data;
}

export async function logout() {
  await axios.post("logout", {}, { withCredentials: true });

  axios.defaults.headers.common["Authorization"] = "";
}

export async function forgotPassword({ email }) {
  const { data } = await axios.post("forget", { email });
  return data;
}

export async function reset({ password, confirm_password, token }) {
  const { data } = await axios.post("reset", {
    password,
    confirm_password,
    token,
  });
  return data;
}
