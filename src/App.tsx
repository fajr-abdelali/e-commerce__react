import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Favorite from './pages/favorite'
import Checkout from './pages/checkout'
import NotFound from './pages/notFound'
import NavBar from './components/navbar'
import Products from './pages/products'
import ProductDetails from './pages/productDetails'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content px-8">
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/men' element={<Products />} ></Route>
          <Route path='/women' element={<Products />} ></Route>
          <Route path='/category/slug' element={<ProductDetails />} ></Route>
          <Route path='/favorite' element={<Favorite />} ></Route>
          <Route path='/checkout' element={<Checkout />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
