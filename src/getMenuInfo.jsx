import React from "react";
import filterDishes from "./filterDishes";
import './getMenuInfo.css'
import filterWords from './filterWords';

//

const Menu = props => {
  const safeDishes = filterDishes(props.dishes, props.allergen);
  const secondList= filterWords(safeDishes)
  return ( 
    <div className='mappedMenu'>{secondList.map((dish, i) => {
      return (
        <div className="get-menu-info" key={"dish_" + i}>
        <pre>{dish}</pre>
      </div>
    );
  })
}</div>);
};
export default Menu;
