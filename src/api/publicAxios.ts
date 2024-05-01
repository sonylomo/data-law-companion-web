import axios from "axios";

declare global {
  interface Window {
    _env_: {
      [key: string]: string; // Assuming _env_ is an object with string properties
    };
  }
}

const BASE_URL = import.meta.env.VITE_BASE_URL || window._env_.VITE_BASE_URL;

const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default publicAxios;
