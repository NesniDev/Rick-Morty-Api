import imageRickyMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async ()=>{
    const api = await fetch("https://rickandmortyapi.com/api/character")
    // console.log(api);
    const character_api = await api.json();
    // console.log(character_api);
    setCharacters(character_api.results);
  }

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickyMorty} alt='Rick & Morty' className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
