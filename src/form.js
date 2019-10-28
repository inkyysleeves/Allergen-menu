import React from "react";
import "./App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urltoscan: "",
      allergen: "dairy",
      dish: "",
      ingredients: ""
    };
  }
  handleFieldChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2 className="App-header">
          Map My Menu.
          <form>
            <input
              className="url-button"
              name="urltoscan"
              value={this.state.urltoscan}
              onChange={event => this.handleFieldChange(event)}
            />
            <div>
              <label className="allergen-buttons">
                Allergen:
                <select
                  name="allergen"
                  onChange={event => this.handleFieldChange(event)}
                >
                  <option value="dairy">Dairy</option>
                  <option value="gluten">cereals containing gluten</option>
                  <option value="lupin">lupin</option>
                  <option value="crustaceans">crustaceans</option>
                  <option value="fish">fish</option>
                </select>
              </label>
            </div>
          </form>
          <button
            onClick={() =>
              this.props.handleGetDishes(
                this.state.urltoscan,
                this.state.allergen
              )
            }
          >
            test
          </button>
        </h2>
      </div>
    );
  }
}

export default Form;
