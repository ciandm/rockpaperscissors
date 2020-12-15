import React from 'react'
import {
  GameWrapper,
  Selection,
  Button,
  ButtonWhite,
  ButtonImage,
  Selected,
  Column,
  ColumnHeader,
  ColumnChoice
} from './Game.styled';

function Game({ children }) {
  return (
    <GameWrapper>
      {children}
    </GameWrapper>
  )
}

export default Game;

Game.Selection = function GameSelection({ children, variation }) {
  return (
    <Selection variation={variation}>
      {children}
    </Selection>
  )
}

Game.Button = function GameButton({
  icon,
  variation,
  handleButtonClick,
  ...restProps
}) {
  return (
    <Button
      icon={icon}
      variation={variation}
      onClick={() => handleButtonClick(icon)}
      {...restProps}
    >
      <ButtonWhite />
      <ButtonImage icon={icon} />
    </Button>
  )
}

Game.Selected = function GameSelected({ children }) {
  return (
    <Selected>
      {children}
    </Selected>
  )
}

Game.Column = function GameColumn({ children }) {
  return (
    <Column>
      {children}
    </Column>
  )
}

Game.ColumnHeader = function GameColumnHeader({ text }) {
  return (
    <ColumnHeader>
      {text}
    </ColumnHeader>
  )
}

Game.ColumnChoice = function GameColumnChoice({ choice, ...restProps }) {
  return (
    <ColumnChoice>
      <Button
        icon={choice}
        {...restProps}
      >
        <ButtonWhite />
        <ButtonImage icon={choice} />
      </Button>
    </ColumnChoice>
  )
}