import React from 'react';
import AlertUser from './components/AlertUser/alertUser';
import DisplayName from './components/DisplayName/displayName';
import NameList from './components/NameList/nameList';
import SuperHeroTable from './components/SuperHeroTable/superHeroTable';

function App() {
  const state = {
    person: {
      firstName: 'Reggie',
      lastName: 'White'
    },

    names: {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
    },

    superheroes: [
      {
        superheroId: 1,
        name: 'Batman',
        primaryAbility: 'Wealthy',
        secondarAbility: 'Rich'
      },
      {
        superheroId: 2,
        name: 'Superman',
        primaryAbility: 'Super strength',
        secondarAbility: 'Fly'
      },
      {
        superheroId: 3,
        name: 'Spiderman',
        primaryAbility: 'Spider senses',
        secondarAbility: 'Shoots web'
      }
    ]
  }

  const displayAlert = () => {
    alert('devCodeCamp');
}

  return (
    <div className="App">
      <DisplayName firstName={state.person.firstName} lastName={state.person.lastName}/>
      <NameList names={state.names} />
      <AlertUser alertMe={displayAlert} />
    </div>
  );
}

export default App;
