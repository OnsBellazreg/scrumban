import React from 'react';
import './style.css';
import {Draggable} from "react-beautiful-dnd";
import ClearIcon from '@material-ui/icons/Clear';
import { Grid } from '@material-ui/core';

function Ticket(props) {
  const data = props.data;
  const draggableId = `draggableId${data.id}`;

  return (
    <Draggable draggableId={draggableId} index={props.index}>
    {(provided, snapshot) => {

      const handleOnClickRemove = () => {
        props.onRemove(data.id, props.index)
      }
      return (
        <div       
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          className="ticket">
          <Grid container justify="flex-end">
            <ClearIcon 
            fontSize="small"
            onClick={handleOnClickRemove}
            className="clearIcon"
          />
          </Grid>
          {data.content}
          </div>
      )
    }}
    </Draggable>
  );
}

export default Ticket;