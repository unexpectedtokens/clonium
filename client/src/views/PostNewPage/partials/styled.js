import styled from "styled-components";
const inputColor = "#fff";

export const NewInput = styled.input`
  margin: 2rem 0;
  background: ${inputColor};
  border: none;
  display: block;
  padding: 1rem;
  text-indent: 0.5rem;
  border-radius: 4px;
  border: 1px solid #13253726;
  transition: all 0.3s;
  width: 100%;
/* ${props => (props.title ? "70%" : "100%")}; */
  &:focus {
    border: 1px solid #132537;
  }
`;
export const NewArea = styled.textarea`
  width: 100%;
  margin: 2rem auto;
  background: ${inputColor};
  border: none;
  display: block;
  padding: 1rem;
  text-indent: 0.5rem;
  border-radius: 4px;
  border: 1px solid #13253726;
  transition: all 0.3s;
  min-height: 200px;
  resize: none;
  font-family: inherit;
  &:focus {
    border: 1px solid #132537;
  }
`;
export const PostContainer = styled.div`
  width: 55%;
  max-width: 114rem;
  margin: 5rem auto;
`;

export const EditablePart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditButton = styled.button`
  padding: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #c9c9c9;
  }
`;

export const NewButtonBar = styled.div`
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s;
  margin: 0;
  text-align: center;
  width: ${props => (props.title ? "100%" : null)};
`;

export const NewSubHeader = styled.h4`
  font-size: 1.3rem;
  width: 100%;
  margin: 2rem auto;
`;
export const NewTextPart = styled.p`
  font-size:1.5rem
  width: 100%;
  margin: 1.5rem auto;
`;

export const NewPartButton = styled.button`
  width: 20rem;
  display: block;
  margin: 2rem calc(35% - 1rem);
  padding: 1rem 1.6rem;
  border: 2px solid #ff33a6;
  color: #ff33a6;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s;
  background: #fefefe;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  &:first-child {
    z-index: 20;
  }
  &:after {
    content: "${props => props.children}";
    background: #ff33a6;
    position: absolute;
    left: -100%;
    transition: all 0.3s;
    height: 100%;
    width: 100%;
    pointer-events: none;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fefefe;
  }
  &:hover {
    &:after {
      left: 0;
    }
  }
`;
export const Subtitle = styled.p`
  color: #c9c9c9;
  font-size: 0.7rem;
`;
