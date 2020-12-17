import React, { useState } from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Header from './containers/header';
import { ThemeProvider } from 'styled-components';
import colors from './theme/Colors';
import './App.css';
import GameContainer from './containers/game_container';
import choices from './constants/choices';
import houseSelection from './utils/houseSelection';

function App() {

  const [userChoice, setUserChoice] = useState('');
  const [houseChoice, setHouseChoice] = useState('rock');
  const [variation, setVariation] = useState('normal');


  function handleUserChoiceSelection(choice) {
    setUserChoice(choice);
    setHouseChoice(houseSelection(choices[variation]));
  }

  return (
    <div className="app">
      <ThemeProvider theme={colors}>
        <GlobalStyles />
        <Header />
        <GameContainer
          choices={choices[variation]}
          userChoice={userChoice}
          houseChoice={houseChoice}
          handleUserChoiceSelection={handleUserChoiceSelection}
          variation={variation}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;