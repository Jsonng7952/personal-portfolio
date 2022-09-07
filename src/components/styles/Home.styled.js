import styled from "styled-components";
import nycImage from '../../assets/images/nyc_cyberpunk.png';

export const HomeSection = styled.section`
  background: 
    linear-gradient(
      rgba(255, 255, 255, 0.2), 
      rgba(255, 255, 255, 0.2)
    ),
    url(${nycImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 1em;
  position: relative;
`
export const HomeTitle = styled.h1`
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fontFamily};  
  font-size: 10rem;
  text-shadow: 2px 2px 4px ${props => props.theme.colorRed};
  white-space: nowrap;
`

export const HomeSubtitle = styled.p`
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fontFamily};
  font-size: 4rem;
  text-shadow: 2px 2px 4px ${props => props.theme.colorRed};
`