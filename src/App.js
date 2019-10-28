import React from "react";
import Menu from "./getMenuInfo";
import Axios from "axios";
import Form from "./form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: "",
      allergen: null,
      loading: false,
      error: null,
    };
  }
  handleGetDishes = (url, allergen) => {
    Axios({
      method: "post",
      url: "http://localhost:3001/fetch-menu-items",
      data: {
        urltoscan: url
      }
    }).then(response => {
      this.setState({
        dishes: response.data,
        allergen: allergen
      });
    })
    .catch((error) => {
        
    })
  };
  render() {
    if (this.state.dishes) {
      return <Menu dishes={this.state.dishes} allergen={this.state.allergen} />;
    }
    return (
      <div className="App">
        <Form handleGetDishes={this.handleGetDishes} />
      </div>
    );
  }
}

export default App;
