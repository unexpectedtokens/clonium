import styled from "styled-components";

export const Banner = styled.div`
  height: 20rem;
  background: #132537;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    top: 66%;
    @media (max-width: 900px) {
      top: 90%;
    }
  }
`;
