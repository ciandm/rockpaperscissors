import styled from 'styled-components';
import backgroundImage from '../../assets/bg-triangle.svg'
import backgroundImageBonus from '../../assets/bg-pentagon.svg';
import buttonInfo from '../../constants/buttonInfo';

export const GameWrapper = styled.main`
  background-image: ${({ variation }) => variation === 'normal'
    ? `url(${backgroundImage})`
    : `url(${backgroundImageBonus})`};
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 60px;
  min-height: 500px;
  position: relative;
`

export const Button = styled.button`
  border: 55px solid red;
  border-radius: 200px;
  height: 200px;
  outline: none;
  width: 200px
`