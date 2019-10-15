import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 10rem auto;
  max-width: 70rem;
`;
export const PostTitle = styled.h2`
  font-size: 4rem;
  color: #555;
  /* margin: 5rem; */
  letter-spacing: 0.15rem;
`;
export const FirstAuthorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5rem 0;
  font-size: 1.6rem;
  img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-right: 20px;
    border: 2px solid #ff33a6;
    transition: all 0.3s;
    :hover {
      border: 4px solid #ff33a6;
    }
  }
  p:last-child {
    font-size: 1.5rem;
    color: #c9c9c9;
  }
`;
export const Banner = styled.img`
  margin: 5rem auto;
  width: 100%;
  height: 30rem;
  border-radius: 3px;
`;
export const PartContainer = styled.div`
  padding: 1rem;
  h3 {
    font-size: 3rem;
    margin-bottom: 3.5rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.01px;
  }
`;
