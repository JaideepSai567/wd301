import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  duedate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  //input change handlers
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ duedate: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    this.setState({ description: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    //validations
    if (!this.state.title.trim()) {
      alert("Task title cannot be empty.");
      return;
    }
    if (!this.state.duedate.trim()) {
      alert("Task due date cannot be empty.");
      return;
    }

    //set new state
    const newTask = {
      title: this.state.title,
      duedate: this.state.duedate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", duedate: "", description: "" });
    console.log(
      `Submited the form with title: ${this.state.title}, due date: ${this.state.duedate}`,
    );
  };

  //constructor
  constructor(props: TaskFormProps) {
    super(props);
    this.state = { title: "", duedate: "", description: "" };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="flex flex-col">
          Name:{" "}
          <input
            type="text"
            className="border border-slate-200"
            id="todoTitle"
            value={this.state.title}
            onChange={this.titleChanged}
          />
          Description:
          <textarea
            name=""
            id="todoDescription"
            className="border border-slate-200"
            value={this.state.description}
            onChange={this.descriptionChanged}
            placeholder="Enter the description..."
            rows={3}
          ></textarea>
          Due Date:
          <input
            type="date"
            name=""
            id="todoDueDate"
            className="border border-slate-200"
            value={this.state.duedate}
            onChange={this.dateChanged}
          />
          <button
            type="submit"
            className="bg-green-500 mt-2 rounded text-white"
            id="addTaskButton"
          >
            Add item
          </button>
        </div>
      </form>
    );
  }
}
export default TaskForm;
