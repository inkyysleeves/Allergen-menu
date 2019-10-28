import React from "react";
import filterDishes from "./filterDishes";

const Menu = props => {
  const safeDishes = filterDishes(props.dishes, props.allergen);
  return safeDishes.map(dish => {
    return (
      <div>
        <h3 key={dish._id}>{dish.dish}</h3>
        <span>{dish.ingredients}</span>
      </div>
    );
  });
};
export default Menu;
