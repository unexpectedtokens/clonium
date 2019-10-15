import styled from "styled-components";
import { StringPreviewer } from "../../helpers/StringPreviewer";
import React from "react";
const CardStyled = styled.div`
  border-radius: 5px;
  min-height: 50px;
  padding: 3rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;
  background: #fff;
  :hover {
    transform: scale(1.01);
    box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.2);
    img {
      filter: blur(1px);
      border: 4px solid #ff33a6;
    }
    span {
      ::after {
        width: 100% !important;
      }
    }
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
  span {
    margin-left: 2rem;
    color: #ff33a6;
    position: relative;
    ::after {
      width: 0;
      position: absolute;
      top: 100%;
      width: 0;
      left: 0;
      transition: width 0.3s;
      content: "";
      background: #ff33a6;
      height: 1px;
    }
  }
  img {
    shape-outside: circle(50%);
    float: left;
    border-radius: 50%;
    margin-right: 3rem;
    width: 150px;
    height: 150px;
    border: 2px solid #ff33a6;
    transition: all 0.3s;
  }
`;

export const Card = props => (
  <CardStyled onClick={props.click}>
    <img src="https://picsum.photos/200" alt="img" />
    <h3>{props.title}</h3>
    <p>
      {StringPreviewer(props.content, 550)}
      <span>Read More &rarr;</span>
    </p>
  </CardStyled>
);
