import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";
import ProductDetails from "../pages/productDetails";
import Favorite from "../pages/favorite";
import Checkout from "../pages/checkout";
import NotFound from "../pages/notFound";
import Login from "../pages/login";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/men' element={<Products />} ></Route>
            <Route path='/women' element={<Products />} ></Route>
            <Route path='/product/:productId' element={<ProductDetails />} ></Route>
            <Route path='/category/slug' element={<ProductDetails />} ></Route>
            <Route path='/favorite' element={<Favorite />} ></Route>
            <Route path='/checkout' element={<Checkout />} ></Route>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
            {/*<Route path='/admin' element={<AdminRoute element={<AdminDashboard />} />} /> */}
            <Route path='*' element={<NotFound />} ></Route>
        </Routes>
    );
}

export default AppRoutes;