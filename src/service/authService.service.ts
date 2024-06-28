const url = import.meta.env.VITE_API_URL;

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse | null> => {
    try {
        const response = await fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) throw new Error('Login Failed');
        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data.token

    } catch (error) {
        console.error('login error', error);
        return null
    }
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const getToken = (): string | null => {
    return localStorage.getItem('token');
}

export const isAuthenticated = (): boolean => {
    const token = getToken();
    return !!token;
}