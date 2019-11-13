const unWantedWords = [
    'staff',
    'allergies',
    'INTOLERANCES',
    'order',
    'Starters',
    'Mains',
    'Two Courses 15.95',
    'Weekly Tiffin'
];
 
const filterWords = (dishes) => {
    return dishes.filter(d => {
        console.log(d);
        let dishContainsWord = unWantedWords.some(option => {
            return d.toLowerCase().includes(option.toLowerCase()) || d.trim() === '';
          });
          return !dishContainsWord;
    });
};

    export default filterWords;