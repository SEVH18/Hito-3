import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Navbar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/Register';
import Cart from './components/Cart';



function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Cart />
      {/* <LoginPage /> */}
     {/*  <Register /> */}
      <Footer />
    </>
  )
}

export default App
