import React from 'react'

const NameList = (props) => {
   return (
      <div>
         <h3>Exercise 2</h3>
         <ol>
            {props.names.map((name, index) => {
               return <li key={index}>{name}</li>
            })}
         </ol>
      </div>
   )
}

export default NameList;
