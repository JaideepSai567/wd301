import React from "react"
import "./TaskCard.css"
const TaskCard = (props) => {
  let DATE : string
  if(props.dueDate){
    DATE=`Due on:${props.dueDate}`
  }else{
    DATE=`Completed on:${props.completedAtDate}`
  }


    console.log(props)
    return (
        <div className="TaskItem">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <p>{DATE}</p>
          <p>{props.assigneeName}</p>
        </div>
      )
  }

  export default TaskCard