import React, { useState } from 'react'
import Game from '../../components/game/Game';

function GameContainer({
  userChoice,
  houseChoice,
  handleUserChoiceSelection,
  variation,
  choices
}) {

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
          <Game.Column>
            <Game.ColumnHeader
              text="You picked"
            />
            <Game.ColumnChoice
              choice={userChoice}
              largerButton="true"
            />
          </Game.Column>
          <Game.Column>
            <Game.ColumnHeader
              text="The house picked"
            />
            <Game.ColumnChoice
              choice={houseChoice}
              largerButton="true"
              shouldFadeIn="true"
            />
          </Game.Column>
        </Game.Selected>
      }
    </Game>
  )
}

export default GameContainer
