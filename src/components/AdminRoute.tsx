import { Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface AdminRouteProps extends RouteProps {
    element: React.ReactNode;
}

const AdminRoute = ({ element }: AdminRouteProps) => {
    const { isAuthenticated } = useAuth();
    const userRole = localStorage.getItem('role');
    return isAuthenticated && userRole === 'admin' ? element : <Navigate to="/login" />
}

export default AdminRoute;