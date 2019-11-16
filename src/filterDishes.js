import dairyOptions from "./Allergens/dairy";
import eggOptions from './Allergens/eggs';
import fishOptions from './Allergens/fish';
import crustaceansOptions from "./Allergens/crustaceans";
import celeryOptions from "./Allergens/celery";
import molluscOptions from "./Allergens/molluscs"; 

const allergens = {
  dairy: dairyOptions,
  eggs: eggOptions,
  fish: fishOptions,
  crustacean: crustaceansOptions,
  celery: celeryOptions,
  molluscs: molluscOptions,
  
};

const filterDishes = (dishes, allergen) => {
  return dishes.filter(d => {
    let dishContainsAllergen = allergens[allergen].some(option => {
      return d.toLowerCase().includes(option.toLowerCase());
    });
    return !dishContainsAllergen;
  });
};


export default filterDishes;