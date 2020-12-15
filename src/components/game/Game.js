import React from 'react'
import {
  GameWrapper,
  Button
} from './Game.styled';

function Game({ children }) {
  return (
    <GameWrapper
      variation="normal">
      {children}
    </GameWrapper>
  )
}

export default Game

Game.Button = function GameButton({ icon }) {
  return (
    <Button icon={icon}></Button>
  )
}
