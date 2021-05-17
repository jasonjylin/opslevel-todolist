import React, { useState } from "react";
import "./ToDoList.css";
import ItemList from "./ItemList";
import * as MUI from "@material-ui/core";

export default function ToDoList() {
  const [taskName, setTaskName] = useState("");
  const [priorityNumber, setPriorityNumber] = useState(1);
  const [priorities, setPriorities] = useState(["none"]);
  const [tasks] = useState({});
  const [update, setUpdate] = useState(0);

  const updateRender = () => {
    setUpdate(update + 1); //force an update with state change
  };

  //change handlers
  const handleTaskChange = (e) => {
    setTaskName(e.currentTarget.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityNumber(e.currentTarget.value);
  };

  //reset default fields
  const resetTaskPriority = () => {
    setTaskName("");
    setPriorityNumber(1);
  };

  //function to calculate missing priorities
  const calcMissingPrio = () => {
    let missing = [];
    let temp = Object.keys(tasks).map((element) => parseInt(element, 10)); //map priorities from object into array of ints
    for (let i = 1; i <= Math.max(...temp); i++) {
      //find missing elements
      if (temp.indexOf(i) === -1) {
        missing.push(i);
      }
    }
    if (missing.length === 0) {
      missing = ["none"]; //set to none if all priorities are in check
    }
    setPriorities(missing);
  };

  //new task add
  const addNewTask = (e) => {
    e.preventDefault(); //no refresh on form submit
    if (!priorityNumber || !taskName || priorityNumber < 1) {
      //check for valid inputs (not empty)
      console.log("error");
    } else {
      if (!(priorityNumber in tasks)) {
        //check if new set needs to be made at priority
        tasks[priorityNumber] = new Set();
        tasks[priorityNumber].add(taskName);
        resetTaskPriority();
      } else {
        //add to set
        tasks[priorityNumber].add(taskName);
        resetTaskPriority();
      }

      //calculate missing priorities after adding and re render
      calcMissingPrio();
      updateRender();
    }
  };

  //delete task
  const deleteTask = (priorityNumber, task) => {
    tasks[priorityNumber].delete(task);
    if (tasks[priorityNumber].size === 0) {
      //delete set if it's empty
      delete tasks[priorityNumber];
    }
    console.log(tasks);
    //delete then calculate missing priorities again and then render
    calcMissingPrio();
    updateRender();
  };

  return (
    <div>
      <MUI.Typography component="h3" variant="h3">
        To Do List
      </MUI.Typography>
      <header>
        <MUI.Typography component="h5" variant="h5">
          Missing Priorities
        </MUI.Typography>
        <div className="priorityList" style={{ marginBottom: "2%" }}>
          {priorities.join(", ")}
        </div>
      </header>
      <header>
        <MUI.Typography component="h5" variant="h5">
          Add Task
        </MUI.Typography>
      </header>
      <div className="header">
        <form onSubmit={addNewTask}>
          <MUI.TextField
            id="outlined-basic"
            value={taskName}
            onChange={handleTaskChange}
            placeholder="task"
            label="task"
          ></MUI.TextField>
          <MUI.TextField
            value={priorityNumber}
            onChange={handlePriorityChange}
            placeholder="priority"
            label="priority"
          ></MUI.TextField>
          <MUI.Button size="large" type="submit">
            add
          </MUI.Button>
        </form>
      </div>
      <ItemList taskList={tasks} deleteTask={deleteTask}></ItemList>
    </div>
  );
}
