import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import Character from "./components/Character";


const App = () => {
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.dev/api/people/")
    .then((res) => setCharacterInfo(res.data.results))
    .catch((err) => {console.log(err)})
  },[]);

  return (
    <div className="App">
      {characterInfo.map((character, count) => {
        return <Character item={character} key={count}/>
      })}
    </div>
  );
}

export default App;