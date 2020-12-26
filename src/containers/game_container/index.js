import React from 'react'
import Game from '../../components/game/Game';

function GameContainer({
  userChoice,
  houseChoice,
  handleUserChoiceSelection,
  gameMode,
  choices,
  winner,
  playAgainHandler,
  modalOpen,
  handleModalOpen,
  handleModalClose,
  handleModeChange
}) {

  function displayWinningMessage(winner) {
    if (winner === 'user') {
      return "You won";
    } else if (winner === 'house') {
      return "You lost";
    } else if (winner === 'draw') {
      return "Draw";
    }
  }
  return (
    <Game>
      {/* Where user selects their choice */}
      {
        !userChoice &&
        <Game.Selection gameMode={gameMode}>
          {choices.map(choice => (
            <Game.Button
              key={choice}
              icon={choice}
              gameMode={gameMode}
              handleButtonClick={() => handleUserChoiceSelection(choice)}
              heightSize={gameMode === 'normal' ? '200px' : '150px'}
              widthSize={gameMode === 'normal' ? '200px' : '150px'}
            />
          ))}
        </Game.Selection>
      }
      {/* If a user has made a choice */}
      {
        userChoice &&
        <Game.Selected>
          <Game.Column
            side="left"
          >
            <Game.ColumnHeader
              text="You picked"
            />
            <Game.ColumnChoice
              choice={userChoice}
              largerButton="true"
              winner={winner === 'user' ? true : false}
            />
          </Game.Column>
          <Game.ColumnLarge>
            <Game.ColumnHeading>
              {displayWinningMessage(winner)}
            </Game.ColumnHeading>
            <Game.ButtonReset
              playAgainHandler={playAgainHandler}
            >
              Play again
            </Game.ButtonReset>
          </Game.ColumnLarge>
          <Game.Column
            side="right"
          >
            <Game.ColumnHeader
              text="The house picked"
            />
            <Game.ColumnChoice
              choice={houseChoice}
              largerButton="true"
              shouldFadeIn="true"
              winner={winner === 'house' ? true : false}
            />
          </Game.Column>
        </Game.Selected>
      }
      <Game.Modal isOpen={modalOpen}>
        <Game.ModalContents>
          <Game.ModalHeader>
            <h2>Rules</h2>
            <button onClick={() => handleModalClose()}>&nbsp;</button>
          </Game.ModalHeader>
          <Game.ModalImage gameMode={gameMode} />
          <Game.ModalButton handleModeChange={handleModeChange}>Change mode</Game.ModalButton>
        </Game.ModalContents>
      </Game.Modal>
      <Game.ModalOpen handleModalOpen={handleModalOpen}>
        Rules
      </Game.ModalOpen>
    </Game>
  )
}

export default GameContainer
