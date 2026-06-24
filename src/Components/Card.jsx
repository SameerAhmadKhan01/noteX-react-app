import React from "react";
import { MdDelete } from "react-icons/md";

const Card = (props) => {
  return (
    <div className="card">
      <div className="del" onClick={() => props.deleteNote(props.title)}>
        <MdDelete />
      </div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
    </div>
  );
};

export default Card;
