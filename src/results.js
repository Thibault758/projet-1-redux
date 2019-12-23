import React from 'react'
import { useSelector } from 'react-redux'

const Results = () => {
    const results = useSelector(state => state.results);
    const denomination = useSelector(state => state.denomination)
    const denominationToShow = [...denomination];
    denominationToShow.reverse();
    const value = useSelector(state => state.value)

  return (
    <div>
      {results ? 
      <div>
        <h3>Vous avez demandé la monnaie sur {value}</h3>
        {denominationToShow.map((value, index) => {
        return <p key={index}>Token {value}: {results[index]}</p>
        })}
      </div> 
      : <div></div>}
    </div>
  )
}

export default Results;