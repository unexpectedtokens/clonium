import React, { useState } from "react";
import {
  FaEdit,
  FaSave,
  FaImage,
  FaRegFileWord,
  FaTrash,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import {
  NewInput,
  Subtitle,
  EditButton,
  NewButtonBar,
  EditablePart
} from "./styled";

export const EPI = props => {
  const [hovering, setHover] = useState(false);

  return (
    <EditablePart
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.part.editing ? (
        <React.Fragment>
          <NewInput
            type="text"
            onChange={event => props.changePartImage(props.index, event)}
            placeholder={props.part.url ? props.part.url : "Image url"}
            className="title"
            onFocus={e => {
              if (props.part.url) {
                e.target.value = props.part.url;
              }
            }}
          />
          <NewInput
            type="text"
            onChange={event => props.changePartSubtitle(props.index, event)}
            placeholder={props.part.subtitle ? props.part.subtitle : "Subtitle"}
            className="content"
            onFocus={e => {
              if (props.part.subtitle) {
                e.target.value = props.part.subtitle;
              }
            }}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img alt={props.part.subtitle} src={props.part.url} />
          <Subtitle>{props.part.subtitle}</Subtitle>
        </React.Fragment>
      )}
      <NewButtonBar show={hovering}>
        <EditButton
          onClick={() => props.changePartType(props.index, "text")}
          active={props.part.type === "text"}
        >
          <FaRegFileWord />
        </EditButton>
        <EditButton
          onClick={() => props.changePartType(props.index, "image")}
          active={props.part.type === "image"}
        >
          <FaImage />
        </EditButton>
        <EditButton onClick={() => props.removePart(props.index)}>
          <FaTrash />
        </EditButton>
        {props.part.editing ? (
          <EditButton onClick={() => props.togglePart(props.index)}>
            <FaSave />
          </EditButton>
        ) : (
          <React.Fragment>
            <EditButton onClick={event => props.togglePart(props.index)}>
              <FaEdit />
            </EditButton>
            <EditButton
              onClick={() => {
                props.changeIndex(props.index, "up");
              }}
            >
              <FaArrowUp />
            </EditButton>
            <EditButton
              onClick={() => {
                props.changeIndex(props.index, "down");
              }}
            >
              <FaArrowDown />
            </EditButton>
          </React.Fragment>
        )}
      </NewButtonBar>
    </EditablePart>
  );
};
