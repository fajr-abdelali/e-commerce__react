import React, { createContext, ReactNode, useContext, useState } from "react";
import { login as apiLogin, logout as apiLogout, isAuthenticated } from "../service/authService.service";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [authState, setAuthState] = useState(isAuthenticated());
    const navigate = useNavigate();

    const login = async (username: string, password: string) => {
        const token = await apiLogin(username, password);
        if (token) {
            setAuthState(true);
            navigate('/dashboard');
        }
    }

    const logout = () => {
        apiLogout();
        setAuthState(false);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}