import React from 'react'
import {
  GameWrapper,
  Button,
  ButtonWhite,
  ButtonImage
} from './Game.styled';

function Game({ children, variation }) {
  return (
    <GameWrapper variation={variation}>
      {children}
    </GameWrapper>
  )
}

export default Game

Game.Button = function GameButton({ icon, variation }) {
  return (
    <Button
      icon={icon}
      variation={variation}
    >
      <ButtonWhite />
      <ButtonImage icon={icon} />
    </Button>
  )
}
