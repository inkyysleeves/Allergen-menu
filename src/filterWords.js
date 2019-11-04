const unWantedWords = [
    'staff',
    'allergies',
    'INTOLERANCES',
    'order'
];
 
const filterWords = (dishes) => {
    return dishes.filter(d => {
        let dishContainsWord = unWantedWords.some(option => {
            return d.ingredients.toLowerCase().includes(option.toLowerCase());
          });
          return !dishContainsWord;
    });
};

    export default filterWords;