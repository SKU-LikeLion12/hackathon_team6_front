import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') || ''
  );

  const getAuthToken = () => {
    return authToken;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('username');

    if (token && userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        setIsLoggedIn(true);
        setUser(parsedUserData);
        setAuthToken(token); // authToken을 설정
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.removeItem('username');
      }
    }
  }, []);

  const login = (token, userData) => {
    // console.log('로그인 데이터:', token, userData);

    localStorage.setItem('authToken', token);
    localStorage.setItem('username', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
    setAuthToken(token); // authToken을 설정
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUser(null);
  };

  const signup = (userData) => {
    localStorage.setItem('username', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{ getAuthToken, isLoggedIn, user, login, logout, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
