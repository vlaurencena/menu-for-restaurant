import { context } from "./context/MenuContext";
import { useContext } from "react";
import veganIcon from "./media/vegan-icon.png";

const DishItem = (props) => {

    const { addToMenu, removeFromMenu } = useContext(context);

    function handleAdd() {
        addToMenu(props.dish);
    }
    function handleRemove() {
        removeFromMenu(props.dish)
    }



    return (
        <div className="dish-card" onClick={props.handleDishClick}>
            <div className="dish-card__image-container"><img src={props.image} alt={props.title} /></div>
            <div>{props.title}</div>
            <div>${props.price}</div>
            <div>Health Score: {props.healthScore}</div>
            <img className={`dish-card__vegan-icon ${!props.vegan ? 'dish-card__vegan-icon--not-active' : null}`} src={veganIcon} alt="Vegan Icon" />
            <div className="dish-card__button-container">
                <button disabled={props.isOnMenu} onClick={handleAdd}>Add</button>
                <button disabled={!props.isOnMenu} onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}


export default DishItem;