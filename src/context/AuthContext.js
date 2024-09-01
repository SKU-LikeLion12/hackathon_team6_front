import React, { createContext, useState, useEffect} from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [setAuthToken] = useState(
    localStorage.getItem("authToken") || ""
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const parsedUserData = { user_name: decodedToken.sub }; // 수정된 부분
        setIsLoggedIn(true);
        setUser(parsedUserData); // 수정된 부분
        setAuthToken(token);

      } catch (error) {
        console.error("Failed to decode token:", error);
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUser(null);
  };

  const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ getAuthToken, isLoggedIn, user, login, logout, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
