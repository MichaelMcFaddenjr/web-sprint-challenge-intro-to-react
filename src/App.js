import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {

  const [ charInfo, setCharInfo ] = useState([]);


  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      setCharInfo(res.data)
     })
    .catch(err => { 
      console.log (err)
    })
  },[])

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {charInfo.map((character, index) => {
        return <Character character={character} key={index} />
      })}
    </div>
  );
}

export default App;




// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
