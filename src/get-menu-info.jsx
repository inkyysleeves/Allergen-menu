import React from "react";

const Menu = props => {
  console.log(!!props.ingredients);
  return props.ingredients.map(ingredient => {
    // ingredient.filter(obj => obj.ingredients.includes('eggs')));
    console.log(ingredient);
    return <h3 key={ingredient._id}>{ingredient.ingredients}</h3>;
  });
};
export default Menu;
