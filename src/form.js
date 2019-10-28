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
                  <option value="eggs">Eggs</option>
                  <option value="fish">Fish</option>
                  <option value="crustacean">Crustaceans</option>
                  <option value="celery">Celery</option>
                  <option value="molluscs">Molluscs</option>
                  <option value="mustard">Mustard</option>
                  <option value="peanuts">Peanuts</option>
                  <option value="tree-nuts">Tree Nuts</option>
                  <option value="sesame-seeds">Sessame Seeds</option>
                  <option value="soybeans">soybeans</option>
                  <option value="sulphur-dioxide-sulphites">
                    Sulphur dioxide / Sulphites
                  </option>
                  <option value="lupin">Lupin</option>
                  <option value="gluten-wheat">Gluten / Wheat</option>
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
