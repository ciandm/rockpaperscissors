import React from 'react'
import ScoreBoard from '../../components/score_board/ScoreBoard';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <ScoreBoard>
      <ScoreBoard.Image
        src={logo}
        alt="Rock Paper Scissors logo"
      />
      <ScoreBoard.Card
        score="12"
      />
    </ScoreBoard>
  )
}

export default Header
