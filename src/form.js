import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urltoscan: 'https://zoukteabar.co.uk/menus/manchester/',
            dish: '',
            ingredients: ''
    }
  }
  render() {
    return (
      <div className="App">
        <h2 className="App-header">
          Map My Menu.
          <form>
            <input className="url-button" value="your restaurants url here" />
            <div>
              <label className="allergen-buttons">
                Allergen:
                <select>
                  <option value="peanut">Peanuts</option>
                  <option value="cereals-containing-gluten">cereals containing gluten</option>
                  <option value="lupin">lupin</option>
                  <option value="crustaceans">crustaceans</option>
                  <option value="fish">fish</option>
                </select>
              </label>
            </div>
            <div>
              <label className="allergen-buttons">
                Severity:
                <select name="severity-button">
                  <option value="mild">mild</option>
                  <option value="moderate">moderate</option>
                  <option value="severe">severe</option>
                </select>
              </label>
            </div>
            <div>
              <label className="allergen-buttons">
                Ommit:
                <input className="op-button" value="whats your allergy" />
              </label>
            </div>
            <div>
              <label className="allergen-buttons">
                prefference:
                <input className="op-button" value="whats your prefference" />
              </label>
            </div>
          </form>
          <button onClick={() => this.props.handleGetIngredients(this.state.urltoscan) }>
            test
          </button>
        </h2>
      </div>
      
    )};
}

    export default Form;

  