import DishItem from "./DishItem";
import { context } from "./context/MenuContext";
import { useContext, useEffect } from "react";

const DishesContainer = (props) => {

    const { menu, checkIsOnMenu } = useContext(context)

    const handleDishClick = (id) => {
// TODO
    }

    useEffect(() => {
        checkIsOnMenu(638086);
        console.log(menu);
    }, [menu]);


    return (
        <div className="dishes-container">
            {props.dishesToDisplay && props.dishesToDisplay.map(dish => {
                return <DishItem
                    dish={dish}
                    key={dish.id}
                    title={dish.title}
                    image={dish.image}
                    vegan={dish.vegan}
                    healthScore={dish.healthScore}
                    price={dish.pricePerServing}
                    handleDishClick={handleDishClick}
                    isOnMenu={checkIsOnMenu(dish.id)} // PUT LOGIC
                />
            })}
        </div>
    )
}

export default DishesContainer;