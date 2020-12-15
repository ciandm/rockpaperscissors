import React from 'react'
import {
  Container,
  Image,
  Card,
  CardHeading,
  CardScore
} from './ScoreBoard.styled';

function ScoreBoard({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ScoreBoard;

ScoreBoard.Image = function ScoreImage({ ...restProps }) {
  return <Image {...restProps} />
}

ScoreBoard.Card = function ScoreCard({ score }) {
  return (
    <Card>
      <CardHeading>Score</CardHeading>
      <CardScore>{score}</CardScore>
    </Card>
  )
}
