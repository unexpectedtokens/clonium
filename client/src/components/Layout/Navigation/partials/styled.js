import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const navBefore = keyframes`
  0%{
    background-position: 0% 0%;

  }
  50%{
    background-position: 50% 0%;

  }
  100%{
    background-position: 100% 0%;
  }


`;

export const Navcontainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #132537;
  min-height: 5rem;
  position: fixed;
  top: 0;
  justify-content: center;
  padding: 2px 20rem;
  z-index: 200;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    background: linear-gradient(to right, #ff33a6, #ff44a6, #ff63a6);
    height: 2px;
    z-index: 20;
    width: 100%;
    left: 0;
    background-size: 400%;
    animation: ${navBefore} 2s ease-in-out 0s alternate infinite;
  }
`;

export const Linkcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  color: #f9f9f9;
  text-decoration: none;
  transition: color 0.3s;
  margin: 5px 20px;
  text-transform: uppercase;
  justify-self: center;
  font-size: 1.4rem;
  position: relative;
  &:after {
    content: " ";
    width: 0;
    transition: width 0.3s;
    height: 2px;
    background: #ff33a6;
    position: absolute;
    left: 0;
    top: 110%;
  }
  &.active {
    color: #ff33a6;
    &:after {
      width: 100%;
    }
  }
  :hover {
    color: #ff33a6;
    &:after {
      width: 100%;
    }
  }
`;

export const NavLogo = styled.h2`
  color: #f9f9f9;
  /* align-self: flex-start; */
  margin: 10px;
  cursor: pointer;
  font-size: 3.5rem;
`;
