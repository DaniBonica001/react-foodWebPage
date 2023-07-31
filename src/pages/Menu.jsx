import PizzaCard from "../components/PizzaCard"
import { MenuList } from "../helpers/MenuList"
import '../styles/Menu.css'

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((pizza, key) => {
                    return (
                        <PizzaCard key={key} image={pizza.image} name={pizza.name} price={pizza.price} />
                    )
                })}
            </div>
        </div>
    )
}

export default Menu