import React from 'react'
import './alertUser.css';

const AlertUser = (props) => {
   return (
      <div>
         <h3>Exercise 3</h3>
         <button onClick={props.alertMe}>Alert Me</button>
      </div>
   )
}

export default AlertUser;
