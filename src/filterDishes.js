import dairyOptions from "./Allergens/dairy";
import eggOptions from './Allergens/eggs';
import fishOptions from './Allergens/fish';
import crustaceansOptions from "./Allergens/crustaceans";
import celeryOptions from "./Allergens/celery";
import molluscOptions from "./Allergens/molluscs"; 
import peanutOptions from "./Allergens/peanuts";
import treenutOptions from "./Allergens/treenuts";
import sesameOptions from "./Allergens/sesameseeds";
import soybeanOptions from "./Allergens/soybeans";
import sulphiteOptions from "./Allergens/sulphites";
import lupinOptions from "./Allergens/lupin";
import glutenOptions from "./Allergens/gluten";
import mustardOptions from "./Allergens/mustard";


const allergens = {
  dairy: dairyOptions,
  eggs: eggOptions,
  fish: fishOptions,
  crustacean: crustaceansOptions,
  celery: celeryOptions,
  molluscs: molluscOptions,
  peanuts: peanutOptions,
  treenuts: treenutOptions,
  sesameseeds: sesameOptions,
  soy: soybeanOptions,
  sulphurDioxides: sulphiteOptions,
  lupin: lupinOptions,
  wheatGluten: glutenOptions,
  mustard: mustardOptions
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