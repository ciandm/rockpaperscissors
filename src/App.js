import React, { useState } from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Header from './containers/header';
import { ThemeProvider } from 'styled-components';
import colors from './theme/Colors';
import './App.css';
import GameContainer from './containers/game_container';

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={colors}>
        <GlobalStyles />
        <Header />
        <GameContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;