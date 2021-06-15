import React from 'react'
import './superHeroTable.css';

const SuperHeroTable = (props) => {
   const heroTableRows = props.heros.map((hero) => {
      return <tr key={hero.superheroId}>
         <td>{hero.superheroId}</td><td>{hero.name}</td><td>{hero.primaryAbility}</td><td>{hero.secondarAbility}</td></tr>
   })

   return (
      <div>
         <h3>Exercise 4</h3>
         <table>
            <tr>
               <th>ID</th><th>Name</th><th>Pri. Abiliity</th><th>Sec. Ability</th>
            </tr>
            {heroTableRows}
         </table>
      </div>
   )
}

export default SuperHeroTable;
