import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Config = () => {

    const denominations = useSelector(state => state.denominations)
    const dispatch = useDispatch()
  
    return (
      <div>
        <h1>Selectionnez la dénomination:</h1>
       {denominations.map((value, index) => {
        return ([ 
            <p key={index + "p"}>Choix {index + 1}</p>,
            <button key={index + "b"} onClick={() => dispatch({ type: 'CHANGE_DENOMINATION', value: index})}> [ 
            {value.map((value, index) => {
                return value + " "
            })} 
        ]</button>,<br key={index + "br"}></br> ])
      })}
      </div>
    )
}

export default Config;