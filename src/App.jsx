import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact element={<Home/>}/>

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
