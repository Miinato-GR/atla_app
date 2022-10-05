import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import CharacterCard from './CharacterCard';
import './App.css';

const API_URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters?';

// this is for reference to api and how it stores its data

// const character1 = {
//   "_id": "5cf5679a915ecad153ab68c9",
//   "allies": [
//     "Appa"
//   ],
//   "enemies": [
//     "Azula"
//   ],
//   "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003",
//   "name": "Aang",
//   "affiliation": " Air Acolytes Air Nomads Air Scouts (formerly) Team Avatar"
// }

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchCharacter = async (name) => {
    const response = await fetch(`${API_URL}name=${name}`);
    const data = await response.json();

    setCharacters(data);
  }

  useEffect (() => {
    searchCharacter('n/a');
  }, []);

  return (
    <div className='App'>
      
      <h1>Avatar the Last Airbender App</h1>
      
      <div className='search'>
        <input 
          placeholder='Search a name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn'>
          <img 
              src={SearchIcon}
              alt='search icon'
              onClick={() => searchCharacter(searchTerm)}
          />
        </button>
      </div>

      {characters?.length > 0
        ? (
          <div className='container'>
            {characters.map((character) => (
              <CharacterCard character={character}/>
            ))}
          </div>
        ) : (
          <div>
            <h2>No one with that name found</h2>
          </div>
        )}

      
    </div>
  );
}

export default App;
