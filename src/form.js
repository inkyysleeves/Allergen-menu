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
        <div className="header">
          <h2 className="App-header">
            <span className="main-text">
            Map My Menu
            </span>
            <form>
              <input
                className="url-button"
                name="urltoscan"
                value={this.state.urltoscan}
                onChange={event => this.handleFieldChange(event)}
                placeholder="your just-eat url here"
              />
              <div>
                <div className="allergen-buttons">
                  <span className="sub-text">
                  Allergen 
                  </span>
                  </div>
                <select
                  name="allergen"
                  onChange={event => this.handleFieldChange(event)}
                  className="select-button"
                >
                  <option value="dairy">Dairy</option>
                  <option value="eggs">Eggs</option>
                  <option value="fish">Fish</option>
                  <option value="crustacean">Crustaceans</option>
                  <option value="celery">Celery</option>
                  <option value="molluscs">Molluscs</option>
                  <option value="peanuts">Peanuts</option>
                  <option value="tree-nuts">Tree nuts</option>
                  <option value="sesame-seeds">Sessame Seeds</option>
                  <option value="soybeans">soybeans</option>
                  <option value="sulphur-dioxide-sulphites">Sulphites</option>
                  <option value="lupin">Lupin</option>
                  <option value="gluten-wheat">Gluten </option>
                </select>
              </div>
            </form>
            <button
              onClick={() =>
                this.props.handleGetDishes(
                  this.state.urltoscan,
                  this.state.allergen
                )
              }
              className="button button--white button--animated" 
            >
              FIND
            </button>
          </h2>
        </div>
        <div className="sub-heading">
        </div>
      </div>
    );
  }
}

export default Form;
