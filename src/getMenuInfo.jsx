import React from "react";
import filterDishes from "./filterDishes";
import './getMenuInfo.css'
import filterWords from './filterWords';

//

const Menu = props => {
  const safeDishes = filterDishes(props.dishes, props.allergen);
  const secondList= filterWords(safeDishes)
  return ( 
    <div className='mappedMenu'>{secondList.map(dish => {
    return (
      <div className="get-menu-info">
        <h3 className="dish-title"key={dish._id}>{dish.dish}</h3>
        <span>{dish.ingredients}</span>
      </div>
    );
  })
}</div>);
};
export default Menu;
