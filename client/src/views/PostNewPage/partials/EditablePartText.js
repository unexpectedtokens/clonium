import React, { useState } from "react";
import {
  NewInput,
  NewArea,
  EditablePart,
  NewButtonBar,
  EditButton,
  NewSubHeader,
  NewTextPart
} from "./styled";
import {
  FaEdit,
  FaSave,
  FaImage,
  FaRegFileWord,
  FaTrash,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

export const EPT = props => {
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
            onChange={event => props.changePartTitle(props.index, event)}
            placeholder={props.part.title ? props.part.title : "Subitle"}
            onFocus={e => {
              if (props.part.title) {
                e.target.value = props.part.title;
              }
            }}
          />
          <NewArea
            type="text"
            onChange={event => props.changePartContent(props.index, event)}
            placeholder={
              props.part.content_text ? props.part.content_text : "Content"
            }
            className="content"
            onFocus={e => {
              if (props.part.content_text) {
                e.target.value = props.part.content_text;
              }
            }}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NewSubHeader>{props.part.title}</NewSubHeader>
          <NewTextPart>{props.part.content_text}</NewTextPart>
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
