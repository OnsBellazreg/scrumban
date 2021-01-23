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
      {...provided.droppableProps}
        className="column">
        {tickets.map((ticket, index) => {
          if(ticket.colId == props.id){
            return <Ticket key={ticket.id} data={ticket} index={index}/>
          }
        })}
        </div>
    )}
    </Droppable>
  );
}

export default Column;
