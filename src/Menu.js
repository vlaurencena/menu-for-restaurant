import { useContext, useEffect } from "react";
import { context } from "./context/MenuContext";
import DishesContainer from "./DishesContainer";


const Menu = () => {

    const { menu, healthScoreOfMenu, priceOfMenu } = useContext(context);


    return (
        <div className="menu-container">
            {menu.length === 0 ? <div>This is how an empty menu looks like.</div> : (<>
                <div>Price: ${priceOfMenu.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</div>
                <div>Health Score: {healthScoreOfMenu}</div>
                <DishesContainer dishesToDisplay={menu} />
            </>)}
        </div>
    )
}

export default Menu;