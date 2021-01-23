import React from 'react';
import './style.css';
import {Draggable} from "react-beautiful-dnd";

function Ticket(props) {
  const data = props.data;
  const draggableId = `draggableId${data.id}`;

  return (
    <Draggable draggableId={draggableId} index={props.index}>
    {(provided, snapshop) => (
      <div       
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      className="ticket">
      {data.content}
      </div>
    )}
    </Draggable>
  );
}

export default Ticket;