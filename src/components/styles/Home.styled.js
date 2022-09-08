import styled from "styled-components";
import nycImage from '../../assets/images/nyc-cyberpunk.png';

export const HomeSection = styled.section`
  background: 
    linear-gradient(
      rgba(243, 230, 0, 1), 
      rgba(243, 230, 0, 0.8)
    ),
    url(${nycImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10em 1em;
  position: relative;
`
export const HomeTitle = styled.h1`
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fontFamily};  
  font-size: clamp(5rem, 10vw, 10rem);
  text-shadow: 2px 2px 4px ${props => props.theme.colorBlue};
  white-space: nowrap;
`

export const HomeSubtitle = styled.p`
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fontFamily};
  font-size: clamp(2rem, 5vw, 4rem);
  text-shadow: 2px 2px 4px ${props => props.theme.colorBlue};
`