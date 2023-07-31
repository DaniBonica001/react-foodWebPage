import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
