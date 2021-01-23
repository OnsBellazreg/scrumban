import React, {useState} from 'react';
import './App.css';
import Column from './column';
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

const initialTickets = [
  ...getItems(5, 0, "ticket"),
  ...getItems(2,1),
  ...getItems(1,3, "new ticket")
];
const initialCols = [
  {id: 0, name: "test"},
  {id: 1, name: "test"},
  {id: 2, name: "test"},
  {id: 3, name: "test"},
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

    console.log(newOrderedItems)
    setTickets(newOrderedItems);
  }

  return (
    <div>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
      {cols.map(col => (
        <Column key={col.id} tickets={tickets} id={col.id}/>
      ))}
      </div>
    </DragDropContext>
    </div>
  );
}

export default App;
