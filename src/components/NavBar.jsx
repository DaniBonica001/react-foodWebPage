import Logo from "../assets/pizzaLogo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="" />
      </div>
      <div className="rightSide"></div>
    </div>
  )
}

export default NavBar;