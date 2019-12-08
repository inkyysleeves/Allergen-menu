import React from 'react';
import "./spinner.css";

const Spinner = props => {
 return(
   <div className="ui active dimmer spinner">
      <div className="ui large text loader">{props.message}</div>
   </div>
 )
}
Spinner.defaultProps = {
  message: 'Loading'
};
export default Spinner;