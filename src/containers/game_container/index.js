import React, { useState } from 'react'
import Game from '../../components/game/Game';
import choices from '../../constants/choices';

function GameContainer() {

  const [choice, setChoice] = useState('');
  const [variation, setVariation] = useState('normal');

  function handleButtonClick(choice) {
    setChoice(choice);
  }

  return (
    <Game>
      {/* Where user selects their choice */}
      {
        !choice &&
        <Game.Selection variation={variation}>
          {choices[variation].map(choice => (
            <Game.Button
              key={choice}
              icon={choice}
              variation={variation}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </Game.Selection>
      }
      {/* If a user has made a choice */}
      {
        choice &&
        <Game.Selected>
          <Game.Column>
            <Game.ColumnHeader text="You picked" />
            <Game.ColumnChoice choice={choice} largerButton="true" />
          </Game.Column>
          <Game.Column>
            <Game.ColumnHeader text="The house picked" />
            <Game.ColumnChoice choice={choice} largerButton="true" />
          </Game.Column>
        </Game.Selected>
      }
    </Game>
  )
}

export default GameContainer
