import React from 'react';
import Axios from 'axios';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            urltoscan: 'https://zoukteabar.co.uk/menus/manchester/',
            dish: '',
            ingredients: ''
        }
    };

componentDidMount() {
    Axios({
        method: 'post',
        url: 'http://localhost:3001/fetch-menu-items',
        data: {
            urltoscan: this.state.urltoscan,
        }
    })
}
//  render() {
//     if (!this.state.dish) {
//       return null;
//     }

//     return (
//       <div>
//         {console.log(this.state.dish)}
//       </div>
//     );
//   }
}
export default Menu;
