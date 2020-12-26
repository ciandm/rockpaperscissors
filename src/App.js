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
  const [mode, setMode] = useState('normal');
  const [score, setScore] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);


  function handleUserChoiceSelection(choice) {
    setUserChoice(choice);
    setHouseChoice(houseSelection(choices[mode]));
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

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false)
  }

  function handleModeChange() {
    if (mode === 'normal') {
      setMode('bonus');
    } else if (mode === 'bonus') {
      setMode('normal');
    }
    setScore(0);
    playAgainHandler();
  }

  return (
    <div className="app">
      <ThemeProvider theme={colors}>
        <GlobalStyles />
        <Header
          score={score}
          mode={mode}
        />
        <GameContainer
          choices={choices[mode]}
          userChoice={userChoice}
          houseChoice={houseChoice}
          handleUserChoiceSelection={handleUserChoiceSelection}
          mode={mode}
          winner={winner}
          playAgainHandler={playAgainHandler}
          modalOpen={modalOpen}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
          handleModeChange={handleModeChange}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;