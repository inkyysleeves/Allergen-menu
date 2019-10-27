import React from "react";
import Menu from "./get-menu-info";
import Axios from "axios";
import Form from "./form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ""
    };
  }
  handleGetIngredients = url => {
    Axios({
      method: "post",
      url: "http://localhost:3001/fetch-menu-items",
      data: {
        urltoscan: url
      }
    }).then(response => {
      this.setState({
        ingredients: response.data
      });
    });
  };
  render() {
    if (this.state.ingredients) {
      return <Menu ingredients={this.state.ingredients} />;
    }
    return (
      <div className="App">
        <Form handleGetIngredients={this.handleGetIngredients} />
      </div>
    );
  }
}

export default App;
