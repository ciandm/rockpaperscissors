import React from 'react'
import ScoreBoard from '../../components/score_board/ScoreBoard';
import logo from '../../assets/logo.svg';
import bonusLogo from '../../assets/logo-bonus.svg';

function Header({
  score,
  gameMode
}) {
  return (
    <ScoreBoard>
      <ScoreBoard.Image
        src={gameMode === 'normal' ? logo : bonusLogo}
        alt="Rock Paper Scissors logo"
      />
      <ScoreBoard.Card
        score={score}
      />
    </ScoreBoard>
  )
}

export default Header
