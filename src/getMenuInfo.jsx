import React from "react";
import filterDishes from "./filterDishes";
import filterWords from './filterWords';

const Menu = props => {
  const safeDishes = filterDishes(props.dishes, props.allergen);
  const secondList= filterWords(safeDishes)
  return secondList.map(dish => {
    return (
      <div>
        <h3 key={dish._id}>{dish.dish}</h3>
        <span>{dish.ingredients}</span>
      </div>
    );
  });
};
export default Menu;
