import React from "react"
import "./TaskCard.css"
const TaskCard = (props) => {
    console.log(props)
    return (
        <div className="TaskItem">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <p>{(props.dueDate)?`Due on:${props.dueDate}`:`Completed on:${props.completedAtDate}`}</p>
          <p>{props.assigneeName}</p>
        </div>
      )
  }

  export default TaskCard