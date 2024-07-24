import Footer from './components/Footer'
import NavBar from './components/navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="App font-sans text-base">
      <NavBar />
      <div className="content px-8">
        <AppRoutes></AppRoutes>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
