import styled, { css } from 'styled-components';
import backgroundImage from '../../assets/bg-triangle.svg'
import backgroundImageBonus from '../../assets/bg-pentagon.svg';
import buttonInfo from '../../constants/buttonInfo';

export const GameWrapper = styled.main`
  background-image: ${({ variation }) => variation === 'normal'
    ? `url(${backgroundImage})`
    : `url(${backgroundImageBonus})`};
  background-repeat: no-repeat;
  background-position: center center;
  margin: 60px auto 0 auto;
  min-height: 500px;
  position: relative;
  width: 480px;
`

export const Button = styled.button`
  align-items: center;
  background: ${({ icon, theme }) => `${theme.gradients[buttonInfo[icon].color]}`};
  border: none;
  border-radius: 200px;
  box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  height: 200px;
  justify-content: center;
  outline: none;
  position: absolute;
  width: 200px;

  ${({ icon, variation }) => {

    if (variation === "normal") {
      if (icon === 'paper') {
        return css`
          left: 16px;
          top: 16px;
        `
      }
      if (icon === 'scissors') {
        return css`
          right: 16px;
          top: 16px;
        `
      }

      if (icon === "rock") {
        return css`
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%)
        `
      }

    }
  }}
`

export const ButtonWhite = styled.div`
  align-items: center;
  background-color: #FFF;
  border-radius: 50%;
  box-shadow: inset 0 8px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  height: 156px;
  overflow: hidden;
  position: absolute;
  width: 156px;
`

export const ButtonImage = styled.div`
  background-image: ${({ icon }) => `url(${buttonInfo[icon].url})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;
  height: 80px;
  width: 80px;
  z-index: 50;
`