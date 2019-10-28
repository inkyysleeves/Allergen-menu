import dairyOptions from "./Allergens/dairy";

const allergens = {
  dairy: dairyOptions
  // other allergens lowercase
};

const filterDishes = (dishes, allergen) => {
  return dishes.filter(d => {
    let dishContainsAllergen = allergens[allergen].some(option => {
      return d.ingredients.toLowerCase().includes(option.toLowerCase());
    });
    return !dishContainsAllergen;
  });
};

export default filterDishes;
