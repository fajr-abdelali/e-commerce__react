import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Favorite from './pages/favorite'
import Checkout from './pages/checkout'
import NotFound from './pages/notFound'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/favorite' element={<Favorite />} ></Route>
          <Route path='/checkout' element={<Checkout />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
