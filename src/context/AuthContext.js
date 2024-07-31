import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('/api/users/me', {
            headers: { 'x-auth-token': token }
          });
          setUser(res.data);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchUser();
  }, []);

  const register = async (formData) => {
    try {
      const res = await axios.post('/api/users/register', formData);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post('/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
