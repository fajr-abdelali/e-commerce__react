import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

interface ProtectedRouteProps {
    element: React.ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
    const { isAuthenticated } = useAuth();
    const token = localStorage.getItem('token');
    return isAuthenticated || token ? element : <Navigate to="/login" />
}

export default ProtectedRoute;