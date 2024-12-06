
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import '../bootstrap.min.css'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
