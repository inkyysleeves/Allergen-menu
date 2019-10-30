import dairyOptions from "./Allergens/dairy";
import eggOptions from './Allergens/eggs';
import fishOptions from './Allergens/fish';
import crustaceansOptions from "./Allergens/crustaceans";

const allergens = {
  dairy: dairyOptions,
  eggs: eggOptions,
  fish: fishOptions,
  crustacean: crustaceansOptions
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
