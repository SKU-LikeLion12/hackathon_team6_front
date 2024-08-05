import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userData = { user_name: decodedToken.sub };
        setIsLoggedIn(true);
        setUser(userData);
      } catch (error) {
        console.error("Failed to decode token:", error);
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const userData = { user_name: decodedToken.sub };
      localStorage.setItem("authToken", token);
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
  };

  // 현재 저장된 인증 토큰을 반환하는 기능
  const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, login, logout, getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
