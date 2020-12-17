import styled, { css, keyframes } from 'styled-components';
import backgroundImage from '../../assets/bg-triangle.svg'
import backgroundImageBonus from '../../assets/bg-pentagon.svg';
import buttonInfo from '../../constants/buttonInfo';

export const GameWrapper = styled.main`
  margin: 60px auto 0 auto;
  width: 100%;
`

export const Selection = styled.div`
  display: flex;
  background-image: ${({ variation }) => variation === 'normal'
    ? `url(${backgroundImage})`
    : `url(${backgroundImageBonus})`};
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  justify-content: center;
  min-height: 500px;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`

export const Button = styled.button`
  align-items: center;
  background: ${({ icon, theme }) => `${theme.gradients[icon]}`};
  border: none;
  border-radius: 200px;
  box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.2);
  cursor: ${({ largerButton }) => largerButton ? 'not-allowed' : 'pointer'};
  display: flex;
  height: ${({ largerButton }) => largerButton ? "300px" : "200px"};
  justify-content: center;
  outline: none;
  position: absolute;
  transition: transform 0.2s ease-in-out;
  width: ${({ largerButton }) => largerButton ? "300px" : "200px"};
  
  /* If the button is the smaller variation */
  ${({ largerButton }) => !largerButton && css`
    &:hover {
    box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.2),
                ${({ theme, icon }) => theme.shadows[`${icon}`]}
    }
  `
  }

  /* Larger variation */
  ${({ largerButton }) => largerButton && css`
    box-shadow: inset 0 -12px 0 rgba(0, 0, 0, 0.2);
  `}

  ${({ largerButton, shouldFadeIn }) => largerButton && shouldFadeIn && css`
    animation: ${fadeIn} 0.5s ease-in 0.5s;
    animation-fill-mode: backwards;
  `}

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

  ${({ largerButton }) => largerButton && css`
    box-shadow: inset 0 12px 0px rgba(0, 0, 0, 0.1);
    height: 240px;
    width: 240px;
  `}
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

  ${({ largerButton }) => largerButton && css`
    height: 120px;
    width: 120px;
  `}
`

export const Selected = styled.div`
  display: flex;
  width: 100%;
`

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  width: 50%;
`

export const ColumnHeader = styled.h3`
  color: #FFF;
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 60px;
  text-transform: uppercase;
`

export const ColumnChoice = styled.div`
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: center;
  width: 300px;

  &::before {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 240px;
    content: '';
    display: block;
    height: 240px;
    width: 240px;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5)
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`