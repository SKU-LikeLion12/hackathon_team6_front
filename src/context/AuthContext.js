import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') || ''
  );

  // const getAuthToken = () => {
  //   return authToken;
  // };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('username');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userData = { user_name: decodedToken.sub };
        setIsLoggedIn(true);
        setUser(parsedUserData);
        setAuthToken(token); // authToken을 설정
      } catch (error) {
        console.error('Failed to decode token:', error);
        localStorage.removeItem('authTokenname');
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

  // 현재 저장된 인증 토큰을 반환하는 기능
  const getAuthToken = () => {
    return localStorage.getItem('authToken');
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
