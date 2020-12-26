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
  ColumnChoice,
  WinnerHighlight,
  ColumnLarge,
  ColumnHeading,
  ButtonReset,
  Modal,
  ModalContents,
  ModalHeader,
  ModalImage,
  ModalButton,
  ModalOpen
} from './Game.styled';

function Game({ children }) {
  return (
    <GameWrapper>
      {children}
    </GameWrapper>
  )
}

export default Game;

Game.Selection = function GameSelection({ children, mode }) {
  return (
    <Selection mode={mode}>
      {children}
    </Selection>
  )
}

Game.Button = function GameButton({
  icon,
  mode,
  handleButtonClick,
  ...restProps
}) {
  return (
    <Button
      icon={icon}
      mode={mode}
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

Game.Column = function GameColumn({ children, ...restProps }) {
  return (
    <Column {...restProps}>
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

Game.ColumnChoice = function GameColumnChoice({ choice, winner, ...restProps }) {
  return (
    <ColumnChoice {...restProps}>
      <Button
        icon={choice}
        {...restProps}
      >
        <ButtonWhite {...restProps} />
        <ButtonImage icon={choice} {...restProps} />
      </Button>
      { winner === true && <WinnerHighlight />}
    </ColumnChoice>
  )
}

Game.ColumnLarge = function GameColumnLarge({ children }) {
  return (
    <ColumnLarge>
      {children}
    </ColumnLarge>
  )
}

Game.ColumnHeading = function GameColumnHeading({ children, ...restProps }) {
  return (
    <ColumnHeading>
      {children}
    </ColumnHeading>
  )
}

Game.ButtonReset = function GameButtonReset({ children, playAgainHandler }) {
  return (
    <ButtonReset
      onClick={() => playAgainHandler()}
    >
      {children}
    </ButtonReset>
  )
}

Game.Modal = function GameModal({ children, isOpen }) {
  return (
    <Modal isOpen={isOpen}>
      {children}
    </Modal>
  )
}

Game.ModalContents = function GameModalContents({ children }) {
  return (
    <ModalContents>
      {children}
    </ModalContents>
  )
}

Game.ModalHeader = function GameModalHeader({ children }) {
  return (
    <ModalHeader>{children}</ModalHeader>
  )
}

Game.ModalImage = function GameModalImage({ children, ...restProps }) {
  return (
    <ModalImage {...restProps}>
      {children}
    </ModalImage>
  )
}

Game.ModalButton = function GameModalButton({ children, handleModeChange }) {
  return (
    <ModalButton onClick={() => handleModeChange()}>{children}</ModalButton>
  )
}

Game.ModalOpen = function GameModalOpen({ children, handleModalOpen }) {
  return (
    <ModalOpen onClick={() => handleModalOpen()}>
      {children}
    </ModalOpen>
  )
}