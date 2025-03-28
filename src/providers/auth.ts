import type { AuthProvider } from "@refinedev/core";
import { AuthBindings } from "@refinedev/core";
import { parseJwt } from "../utils/parse-jwt";
import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings & AuthProvider = {
  login: async (params: any) => {
    if (params.credential) {
      const profileObj = parseJwt(params.credential);
      if (profileObj) {
        localStorage.setItem("token", params.credential);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
          })
        );
        return { success: true, redirectTo: "/recipes" };
      }
    } else if ((params.username || params.email) && params.password) {
      localStorage.setItem(TOKEN_KEY, params.username || params.email);
      return { success: true, redirectTo: "/recipes" };
    }
    return {
      success: false,
      error: { name: "LoginError", message: "Invalid username or password" },
    };
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    axios.defaults.headers.common = {};
    return { success: true, redirectTo: "/login" };
  },
  check: async () => {
    const token =
      localStorage.getItem("token") || localStorage.getItem(TOKEN_KEY);
    return token
      ? { authenticated: true }
      : { authenticated: false, redirectTo: "/login" };
  },
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        id: 1,
        name: "Morteza Giti",
        avatar: "https://i.pravatar.cc/100",
      };
    }
    return null;
  },
  getPermissions: async () => null,
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
