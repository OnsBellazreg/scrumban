import React, {useState} from "react";
import "./style.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal, TextareaAutosize, Button, Grid } from '@material-ui/core';

function AddTicket(props) {
  const [open, setOpen] = useState(false);
  const [textArea, setTextArea] = useState("");

  const onAddTicket = props.onAddTicket;

  const onAddButtonClicked = () => {
    if(textArea.length) {
      onAddTicket(textArea)
      setTextArea("")
      handleClose()
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  const modalBody = (
    <div className="paper">
      <div className="paperc">
        <TextareaAutosize className="textArea"
          rowsMin={3}
          rowsMax={5} 
          placeholder="Add a ticket description"
          className="papertext"
          value={textArea}
          onChange={handleChange}
        />

        <Grid container justify="center">
          <Button className= "closeButton"
          variant="outlined" 
          color="secondary"
          onClick={handleClose}
          size="small"> 
          Cancel
          </Button>
          
          <Button className= "addButton"
          variant="outlined" 
          color="primary"
          onClick={onAddButtonClicked}
          size="small"> 
          Add Ticket 
          </Button>
        </Grid>
      </div>
    </div>
  );

  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {modalBody}
    </Modal>
      <AddCircleIcon type="button" onClick={handleOpen} fontSize="large" className="addIcon"/>
    </div>
  );
}

export default AddTicket;