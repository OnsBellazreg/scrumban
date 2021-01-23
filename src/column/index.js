import React from 'react';
import Ticket from '../ticket';
import { Droppable} from "react-beautiful-dnd";
import './style.css';

function Column(props) {
  console.log(props);
  const tickets = props.tickets;
  const droppableId = `droppableId-${props.id}`;

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div 
          ref={provided.innerRef}
          style={{ backgroundColor: snapshot.isDraggingOver ? '#9a9a9a' : '#ecf0f1' }}
          {...provided.droppableProps}
        className="column">
        <h2 className="title"> {props.title} </h2>
        {tickets.map((ticket, index) => {
          if(ticket.colId == props.id){
            return <Ticket 
              key={ticket.id} 
              data={ticket} 
              index={index}
              onRemove={props.onRemoveTicket}
            />
          }
        })}
        </div>
    )}
    </Droppable>
  );
}

export default Column;
