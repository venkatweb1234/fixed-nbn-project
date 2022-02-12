import styled from "styled-components";
import homeLogo from "../../components/images/homeinternet.png";
export const IMG = styled.img`
  position: relative;
  top: 0.5em;
  cursor: pointer;
`;

export const Maindiv = styled.div`
  text-align: center;
  background: #333;
  height: 2.4rem;
  position: relative;
  top: -24em;
`;
export const StyleddivImage = styled.img`
   {
    background-image: url(${homeLogo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 24rem;
  }
`;

export const StyledP = styled.p`
   {
    position: relative;
    left: -22em;
    top: 5em;
    font-size: 20px;
  }
`;

export const StyledPara1 = styled.p`
  width: 21%;
  font-size: 13px;
  position: relative;
  top: 9em;
  left: 1em;
`;
export const StyledPara2 = styled.p`
  font-size: 13px;
  position: relative;
  top: 9em;
  left: -37em;
  text-decoration: underline;
`;
export const StyledBtn = styled.button`
   {
    background-color: rgb(253, 204, 8);
    border: none;
    line-height: normal;
    color: rgb(0, 0, 0);
    cursor: pointer;
    display: inline-block;
    font-size: 0.8em;
    font-weight: 400;
    height: 2.5rem;
    max-height: 2.5rem;
    margin: 0.375rem 0px;
    min-height: 2.5rem;
    min-width: 16.25rem;
    overflow: hidden;
    vertical-align: middle;
    padding: 0.625rem 0px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: background-color 0.3s ease-out 0s;
    user-select: none;
    white-space: nowrap;
    position: relative;
    top: 8em;
    left: -31em;
  }
`;
