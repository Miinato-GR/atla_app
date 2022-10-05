import React from 'react';


const CharacterCard = ({ character }) => {
    return (
        <div className='card' style={{ width: '18rem' }}>
            <img src={character.photoUrl} className='card-img-top' alt={character.name}/>
            <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>{character.affiliation}</p>
            </div>
        </div>
    );
}

export default CharacterCard