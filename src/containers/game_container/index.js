import React from 'react'
import Game from '../../components/game/Game';

function GameContainer() {
  return (
    <Game
      variation="normal"
    >
      <Game.Button icon="paper" variation="normal" />
      <Game.Button icon="scissors" variation="normal" />
      <Game.Button icon="rock" variation="normal" />
    </Game>
  )
}

export default GameContainer
