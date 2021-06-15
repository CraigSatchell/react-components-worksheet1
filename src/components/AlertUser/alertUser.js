import React from 'react'

const AlertUser = (props) => {
   return (
      <div>
         <button onClick={props.alertMe}>Alert Me</button>
      </div>
   )
}

export default AlertUser;
