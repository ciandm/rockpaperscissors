import styled from 'styled-components';

export const Container = styled.header`
  border: 4px solid ${({ theme }) => theme.text.headerOutline};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 700px;
  min-width: 480px;
  padding: 24px 30px;
  position: relative;
  z-index: 1000;

  @media screen and (max-width: 480px) {
    min-width: initial;
    max-width: initial;
    padding: 24px 20px;
    width: 100%;
  }
`

export const Image = styled.img`
  align-self: center;
  display: block;
  height: auto;
  width: auto;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    height: 48px;
  }
`

export const Card = styled.div`
  align-items: center;
  background-color: #FFF; 
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  padding: 20px 30px;

  @media screen and (max-width: 480px) {
    min-width: 80px;
    padding: 12px 16px;
  }
`

export const CardHeading = styled.h2`
  color: ${({ theme }) => theme.text.scoreText};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.5px;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`

export const CardScore = styled.h1`
  color: ${({ theme }) => theme.text.darkText};
  font-size: 60px;
  line-height: 1;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`