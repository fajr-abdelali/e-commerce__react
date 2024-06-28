import { Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

interface ProtectedRouteProps extends RouteProps {
    element: React.ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
    const { isAuthenticated } = useAuth();
    const token = localStorage.getItem('token');
    return isAuthenticated || token ? element : <Navigate to="/login" />
}

export default ProtectedRoute;