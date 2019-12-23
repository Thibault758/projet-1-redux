import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import UserInterface from './userInterface';
import Results from './results';
import Config from './config';

function App() {
  const config = useSelector(state => state.config);

  return (
    <div>
      { config === false ?
        <div>
          <UserInterface></UserInterface>
          <Results></Results>
        </div>
        :
        <div>
          <Config></Config>
        </div>
      }
    </div>
  );
}

export default App;
