import styled, { css, keyframes } from 'styled-components';
import backgroundImage from '../../assets/bg-triangle.svg'
import backgroundImageBonus from '../../assets/bg-pentagon.svg';
import modalBackground from '../../assets/image-rules.svg';
import modalBackgroundBonus from '../../assets/image-rules-bonus.svg';
import buttonInfo from '../../constants/buttonInfo';
import iconClose from '../../assets/icon-close.svg';

// Animations
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

const slideLeft = keyframes`
  from {
    transform: translateX(40%)
  }

  to {
    transform: translateX(0);
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-40%)
  }

  to {
    transform: translateX(0);
  }
`
// CSS
export const GameWrapper = styled.main`
  margin: 60px auto 0 auto;
  width: 100%;
`

export const Selection = styled.div`
  display: flex;
  background-image: ${({ mode }) => mode === 'normal'
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
  z-index: 500;
  
  /* If the button is the smaller mode */
  ${({ largerButton }) => !largerButton && css`
    &:hover {
    box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.2),
                ${({ theme, icon }) => theme.shadows[`${icon}`]}
    }
  `
  }

  /* Larger mode */
  ${({ largerButton }) => largerButton && css`
    box-shadow: inset 0 -12px 0 rgba(0, 0, 0, 0.2);
  `}

  ${({ largerButton, shouldFadeIn }) => largerButton && shouldFadeIn && css`
    animation: ${fadeIn} 0.5s ease-in 0.5s;
    animation-fill-mode: backwards;
  `}

  ${({ icon, mode }) => {

    if (mode === "normal") {
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
  max-width: 940px;
  margin: 0 auto;
  width: 100%;
`

export const Column = styled.div`
  ${({ side }) => {
    if (side === 'left') {
      return css`
          animation: ${slideLeft};
        `
    }

    if (side === 'right') {
      return css`
          animation: ${slideRight};
        `
    }
  }}
  animation-fill-mode: backwards;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-timing-function: cubic-bezier(.24,.42,.48,1);
  align-items: center;
  display: flex;
  flex-direction: column;
  will-change: transform;
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
  position: relative;
  width: 300px;

  &::before {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 240px;
    content: '';
    display: block;
    height: 240px;
    position: absolute;
    width: 240px;
  }
`

export const WinnerHighlight = styled.div`
  animation: ${fadeIn};
  animation-fill-mode: backwards;
  animation-duration: 0.5s;
  animation-delay: 2s;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 420px;
  display: flex;
  height: 420px;
  justify-content: center;
  position: absolute;
  width: 420px;
  will-change: opacity, transform; 

  &::before,
  &::after {
    border-radius: 100%;
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
      background-color: rgba(255, 255, 255, 0.02);
    height: 560px;
    width: 560px;
    z-index: -6;
  }

  &::after {
    background-color: rgba(255, 255, 255, 0.02);
    height: 700px;
    width: 700px;
    z-index: -10;
  }
`

export const ColumnLarge = styled.div`
  animation: ${fadeIn};
  animation-fill-mode: backwards;
  animation-duration: 1s;
  animation-delay: 1.75s;
  animation-timing-function: cubic-bezier(.24,.42,.48,1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 48px;
  text-align: center;
  will-change: opacity, transform; 
  z-index: 600;
`

export const ColumnHeading = styled.h2`
  color: #FFF;
  font-size: 56px;
  text-transform: uppercase;
`

export const ButtonReset = styled.button`
  border-radius: 8px;
  border: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  color: ${({ theme }) => theme.text.dangerText};
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-top: 20px;
  outline: none;
  padding: 20px 60px;
  text-transform: uppercase;
  width: 100%;
`

export const Modal = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.opaque.background};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5000;

  ${({ isOpen }) => isOpen === false && css`
    display: none;
    visibility: hidden;
  `}
`

export const ModalContents = styled.div`
  animation: ${fadeIn};
  animation-duration: .3s;
  animation-fill-mode: backwards;
  background-color: #FFF;
  border-radius: 12px;
  padding: 36px;
  position: absolute;
  width: 400px;
  will-change: opacity, transform;
`

export const ModalHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  & h2 {
    color: ${({ theme }) => theme.text.darkText};
    font-size: 32px;
    text-transform: uppercase;
  }

  & button {
    background-color: transparent;
    background-image: url(${iconClose});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    cursor: pointer;
    height: 24px;
    outline: none;
    width: 24px;
  }
`

export const ModalImage = styled.div`
  background-image: ${({ mode }) => mode === 'normal' ?
    `url(${modalBackground})` :
    `url(${modalBackgroundBonus})`
  };
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 100%;
  width: 100%;
`

const buttonCommonStyles = css`
  border: none;
  border-radius: 8px;
  color: #FFF;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  padding: 12px 36px;
`
export const ModalButton = styled.button`
  ${buttonCommonStyles};
  background-image: ${({ theme }) => theme.gradients.background};
  display: block;
  margin: 48px auto 0;
`

export const ModalOpen = styled.button`
  ${buttonCommonStyles};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text.headerOutline};
  bottom: 0;
  margin: 24px;
  position: absolute;
  right: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`