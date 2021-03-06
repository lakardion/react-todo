import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Grid, TextField } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import classes from "./Todo.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import { getDateTimeString } from "../../Utils/DateUtils";

const Todo = (props) => {
  const [isBeingCreated, setIsBeingCreated] = useState(props.isBeingCreated);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(props.description ?? '');
  const [details, setDetails] = useState(props.details ?? '');
  const [dueDate, setDueDate] = useState(props.dueDate ?? '');

  const handleTodoEditCreate = () => {
    const currentTodo = {
      description,
      details,
      dueDate,
      createdOn: props.createdOn,
    };
    if (isBeingCreated) {
      props.createTodo({
        ...currentTodo,
        createdOn: new Date(),
        updatedOn: new Date(),
      });
      setIsBeingCreated(false);
    } else {
      setIsEditing(false);
      props.editTodo(props.todoId, { ...currentTodo, updatedOn: new Date() });
    }
  };
  return (
    <div className={`m-3 p-3 border rounded ${classes.todoCard}`}>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Description"
            InputProps={{
              readOnly: !(isEditing || isBeingCreated),
            }}
            name="description"
            placeholder="What do you have to do?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            autoFocus={isBeingCreated}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Details"
            name="details"
            InputProps={{
              readOnly: !(isEditing || isBeingCreated),
            }}
            placeholder="Explain a bit further..."
            multiline
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            fullWidth
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            type="date"
            name="dueDate"
            label="Due date"
            value={dueDate}
            InputProps={{
              readOnly: !(isEditing || isBeingCreated),
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <div className="d-flex align-items-end justify-content-center w-100 h-100">
            {isEditing || isBeingCreated ? (
              <Button onClick={handleTodoEditCreate}>
                <DoneIcon />
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <CreateIcon />
              </Button>
            )}
            {!isBeingCreated ? (
              <Button>
                <DeleteIcon onClick={props.deleteTodo} />
              </Button>
            ) : (
              <Button>
                <ClearIcon onClick={props.handleCancelCreation} />
              </Button>
            )}
          </div>
        </Grid>
        {!!props.createdOn && (
          <span
            className={classes.timeStamp}
            title={`Last updated: ${getDateTimeString(props.updatedOn)}`}
          >
            {getDateTimeString(props.createdOn)}
          </span>
        )}
      </Grid>
    </div>
  );
};
export default Todo;
