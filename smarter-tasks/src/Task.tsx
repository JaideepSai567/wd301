import React from "react";
import { ReactNode } from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  duedate: string;
  description: string;
}
class Task extends React.Component<TaskProp> {
  render(): ReactNode {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">Due Date: {this.props.duedate}</p>
        <p className="text-sm text-slate-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}
export default Task;
