import * as MUI from "@material-ui/core";
import "./ItemList.css";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

//component for listing out current items in todolist
export default function ItemList(props) {
  //map items out of object
  const listItems = Object.entries(props.taskList).map((priorityTask) =>
    //create array of list items starting from priority 1
    Array.from(priorityTask[1], (element, index) => (
      <div className="listBox" key={index}>
        <div className="priorityNumber">{priorityTask[0]}</div>
        <li key={index}>
          <div>{element}</div>
          <MUI.Button
            className="delete"
            variant="contained"
            color="primary"
            style={{
              marginLeft: "auto",
            }}
            onClick={() => props.deleteTask(priorityTask[0], element)}
          >
            <CheckBoxIcon></CheckBoxIcon>
          </MUI.Button>
        </li>
      </div>
    ))
  );

  //return list with all items in list
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
