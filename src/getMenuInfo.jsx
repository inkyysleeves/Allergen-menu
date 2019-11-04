import React from "react";
import filterDishes from "./filterDishes";
import './getMenuInfo.css'
import filterWords from './filterWords';

const Menu = props => {
  const safeDishes = filterDishes(props.dishes, props.allergen);
  const secondList= filterWords(safeDishes)
  return secondList.map(dish => {
    return (
      <div className="get-menu-info">
        <h3 className="text
        " key={dish._id}>{dish.dish}</h3>
        <span>{dish.ingredients}</span>
      </div>
    );
  });
};
export default Menu;
