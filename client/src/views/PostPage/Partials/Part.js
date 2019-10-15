import React from "react";
import { PartContainer } from "./styled";
const Part = props => {
  const data = props.data;
  let type = null;
  if (data.type === "image") {
    type = (
      <PartContainer>
        <img src="https://picsum.photos/200/300" alt={data.alt} />
        <p>{data.subtitle}</p>
      </PartContainer>
    );
  } else if (data.type === "text") {
    type = (
      <PartContainer>
        <h3>{data.title}</h3>
        <p>{data.content_text}</p>
      </PartContainer>
    );
  }
  return <div>{type}</div>;
};
export default Part;
