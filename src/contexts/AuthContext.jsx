
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate login - in a real app, this would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock user data - this would come from your backend
        if (email === 'investor@example.com' && password === 'password') {
          const userData = {
            id: '1',
            name: 'Investidor Demo',
            email,
            role: 'investor',
            avatar: null
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          toast({
            title: 'Login realizado com sucesso',
            description: 'Bem-vindo de volta!',
            duration: 3000,
          });
          resolve(userData);
        } else if (email === 'startup@example.com' && password === 'password') {
          const userData = {
            id: '2',
            name: 'Startup Demo',
            email,
            role: 'startup',
            avatar: null
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          toast({
            title: 'Login realizado com sucesso',
            description: 'Bem-vindo de volta!',
            duration: 3000,
          });
          resolve(userData);
        } else {
          toast({
            title: 'Erro de login',
            description: 'Email ou senha incorretos',
            variant: 'destructive',
            duration: 3000,
          });
          reject(new Error('Email ou senha incorretos'));
        }
      }, 1000);
    });
  };

  const register = (userData) => {
    // Simulate registration - in a real app, this would call an API
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          ...userData,
          avatar: null
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        toast({
          title: 'Cadastro realizado com sucesso',
          description: 'Sua conta foi criada!',
          duration: 3000,
        });
        resolve(newUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: 'Logout realizado',
      description: 'Você foi desconectado com sucesso',
      duration: 3000,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
