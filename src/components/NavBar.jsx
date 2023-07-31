import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false)
  const toggleBar = ()=>{
    setShow(!show)
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={show ? 'open' : 'close'}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks" >
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>

      </div>
      <div className="rightSide">
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <button onClick={toggleBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default NavBar;