import { useContext, useEffect } from "react";
import { context } from "./context/MenuContext";
import DishesContainer from "./DishesContainer";

const Menu = () => {

    const { menu, healthScoreOfMenu, priceOfMenu } = useContext(context);


    return (
        <div className="menu-container">
            <div>I'm Menu</div>
            <div>Price: {priceOfMenu}</div>
            <div>Health Score: {healthScoreOfMenu}</div>
            <DishesContainer dishesToDisplay={menu} />
        </div>

    )
}

export default Menu;