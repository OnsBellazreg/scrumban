import React, {useState} from 'react';
import './App.css';
import Header from './header';
import Column from './column';
import AddTicket from './add-ticket';
import {DragDropContext} from "react-beautiful-dnd";

const getItems = (count, colId, content=null) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `ticket-${colId}-${k}-${new Date().getTime()}`,
    content: content?content:`ticket ${k}`,
    colId: colId
}));

const reorder = (list, startIndex, endIndex, colId) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  removed.colId = colId;
  result.splice(endIndex, 0, removed);
  return result;
};

const remove = (list, startIndex, endIndex, colId) => {
  const result = Array.from(list);
  result.splice(startIndex, 1);
  return result;
};


const initialTickets = [
  ...getItems(2, 0, "test tickets"),
  ...getItems(3,1),
  ...getItems(3,2),
  ...getItems(1,3)
];
const initialCols = [
  {id: 0, name: "To do"},
  {id: 1, name: "In Progress"},
  {id: 2, name: "In Review"},
  {id: 3, name: "Done"},
];

function App() {
  const [cols, _] = useState(initialCols);
  const [tickets, setTickets] = useState(initialTickets);

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newOrderedItems = reorder(
      tickets,
      result.source.index,
      result.destination.index,
      result.destination.droppableId.split("-")[1]
    );

    setTickets(newOrderedItems);
  }

  function handleAddTicket(text) {
    const newTicket = getItems(1, cols[0].id, text);
    setTickets([
      ...newTicket,
      ...tickets
    ]);
  }

  function handleOnRemoveTicket(ticketId, index) {
    const newOrderedItems = remove(tickets, index);
    setTickets(newOrderedItems);
  }

  return (
    <div>
    <Header/>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
      {cols.map(col => (
        <Column 
          key={col.id} 
          title={col.name} 
          tickets={tickets} 
          id={col.id}
          onRemoveTicket={handleOnRemoveTicket}
        />
      ))}
      </div>
    </DragDropContext>
    <AddTicket onAddTicket={handleAddTicket}/>
    </div>
  );
}

export default App;
