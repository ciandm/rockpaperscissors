import React, { useState, useEffect } from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Header from './containers/header';
import { ThemeProvider } from 'styled-components';
import colors from './theme/Colors';
import './App.css';
import GameContainer from './containers/game_container';
import choices from './constants/choices';
import houseSelection from './utils/houseSelection';
import determineWinner from './utils/determineWinner';

function App() {

  const [userChoice, setUserChoice] = useState('');
  const [houseChoice, setHouseChoice] = useState('');
  const [winner, setWinner] = useState('');
  const [variation, setVariation] = useState('normal');
  const [score, setScore] = useState(0);


  function handleUserChoiceSelection(choice) {
    setUserChoice(choice);
    setHouseChoice(houseSelection(choices[variation]));
  }

  useEffect(() => {
    setWinner(determineWinner(userChoice, houseChoice));
  }, [userChoice, houseChoice])

  useEffect(() => {
    if (winner === '') return;

    if (winner === 'user') {
      setTimeout(() => {
        setScore(prevScore => prevScore + 1);
      }, 1750)
    }

    if (winner === 'house') {
      setTimeout(() => {
        setScore(prevScore => prevScore - 1);
      }, 1750)
    }
  }, [winner])

  function playAgainHandler() {
    setUserChoice('');
    setHouseChoice('');
    setWinner('');
  }

  return (
    <div className="app">
      <ThemeProvider theme={colors}>
        <GlobalStyles />
        <Header
          score={score}
        />
        <GameContainer
          choices={choices[variation]}
          userChoice={userChoice}
          houseChoice={houseChoice}
          handleUserChoiceSelection={handleUserChoiceSelection}
          variation={variation}
          winner={winner}
          playAgainHandler={playAgainHandler}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;