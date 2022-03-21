import DishItem from "./DishItem";
import { context } from "./context/MenuContext";
import { useContext } from "react";
import SyncLoader from "react-spinners/ClipLoader";

const DishesContainer = (props) => {

    const { checkIsOnMenu } = useContext(context);

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
                        isOnMenu={checkIsOnMenu(dish.id)} // PUT LOGIC
                    />
                })}
            </div>
        )
}

export default DishesContainer;