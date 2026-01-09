import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

export function setAuthToken(token?: string) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("nita_token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("nita_token");
  }
}

export function loadAuthToken() {
  const token = localStorage.getItem("nita_token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return token;
}
