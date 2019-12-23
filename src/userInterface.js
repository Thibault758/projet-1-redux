import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserInterface = () => {
    const value = useSelector(state => state.value);
    const dispatch = useDispatch()
    const denomination = useSelector(state => state.denomination);
  
    return (
      <div>
        <h1>Veuillez renseigner une somme:</h1>
        <input value={value} onChange={(e) => dispatch({ type: 'SET_VALUE', value: e.target.value})}/><br></br>
        <p>Dénomination choisi: {denomination.map((value, index) => {
            return value + " ";
            })}
        </p>
        <button onClick={() => dispatch({ type: 'CALCULATION'})}>
            Calculer
        </button>
        <button onClick={() => dispatch({ type: 'CONFIG'})}>
            Configurer dénomination
        </button>
      </div>
    )
}

export default UserInterface;