import React from 'react';
import Ticket from '../ticket';

import './style.css';

function Column() {
  return (
    <div className="column">
    <Ticket/>
    <Ticket/>
    </div>
  );
}

export default Column;
