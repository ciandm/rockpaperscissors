import styled from 'styled-components';

export const Container = styled.header`
  border: 4px solid ${({ theme }) => theme.text.headerOutline};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 24px 30px;
`

export const Image = styled.img`
  align-self: center;
  display: block;
  height: auto;
  width: auto;
  object-fit: cover;
`

export const Card = styled.div`
  align-items: center;
  background-color: #FFF; 
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`

export const CardHeading = styled.h2`
  color: ${({ theme }) => theme.text.scoreText};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.5px;
`

export const CardScore = styled.h1`
  color: ${({ theme }) => theme.text.darkText};
  font-size: 60px;
  line-height: 1;
`