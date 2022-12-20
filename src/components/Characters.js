import React from 'react'

export default function Characters(props) {
  // console.log(props);
  const {characters, setCharacters} = props

  const resetCharacters = () =>{
    setCharacters(null)
  }

  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacters}>Volver al Inicio</span>
        <div className='container-characters'>
            {/* hacer un recorrido */}
            {characters.map((character, index) =>(
              <div className='character-container' key={index}>
                <div>
                  <img src={character.image} alt={character.name} />
                </div>
                <div>
                  <h3>{character.name}</h3>
                  <h6>
                    {character.status === "alive" ? (
                      <>
                        <span className='alive'>Alive</span>
                      </>
                    ) : (
                      <>
                      <span className='deat'>Dead</span>
                      </>
                    )}
                  </h6>
                  <p className='text-grey'>
                    <span>Episodios: </span>
                    <span>{character.episode.length}</span>
                  </p>
                  <p>
                    <span className='text-grey'>Especie: </span>
                    <span>{character.species}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <span className='back-home' onClick={resetCharacters}>Volver al Inicio</span>
    </div>
  )
}
