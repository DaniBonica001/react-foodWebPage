import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
