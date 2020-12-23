import React, { useState } from 'react'
import Game from '../../components/game/Game';

function GameContainer({
  userChoice,
  houseChoice,
  handleUserChoiceSelection,
  variation,
  choices,
  winner,
  playAgainHandler
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
        <Game.Selection variation={variation}>
          {choices.map(choice => (
            <Game.Button
              key={choice}
              icon={choice}
              variation={variation}
              handleButtonClick={() => handleUserChoiceSelection(choice)}
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
      {}
    </Game>
  )
}

export default GameContainer
