import React from "react";
import Menu from "./getMenuInfo";
import Axios from "axios";
import Form from "./form";
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: "",
      allergen: null,
      loading: false,
      error: null,
      unsafeWords: null
    };
  }
  handleGetDishes = (url, allergen) => {
    this.setState({
      ...this.state,
      loading: true
    });
    Axios({
      method: "post",
      url: "http://localhost:3001/fetch-menu-items",
      data: {
        urltoscan: url
      }
    })
      .then(response => {
        this.setState({
          dishes: response.data,
          allergen: allergen,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error: "ot oh, something went wrong"
        });
      });
  };
  render() {
    if (this.state.loading || this.state.error) {
      return <Spinner message="Please Wait, Menu Loading!" />
    }
    if(this.state.dishes) {
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
