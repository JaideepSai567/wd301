import React from "react"
import TaskCard from "./TaskCard"
interface pending{
  title:string,
  dueDate: string,
  assigneeName: string,
}

interface done{
  title:string,
  dueDate: string,
  assigneeName: string,
}



function App() {
  
 let pen1: pending = {title:"Build the website with static content",dueDate:"10th Aprail",assigneeName:"Rohit S"}
 let pen2: pending = {title:"Add a blog",dueDate:"22nd March",assigneeName:"Rohit M"}

 let done1: pending = {title:"Design the mockup",dueDate:"10th Aprail",assigneeName:"Rohit M"}
 let done2: pending = {title:"Get the approval from principal",dueDate:"20th Aprail",assigneeName:"Ajay S"}
 

  return (
    <div className="flex items-center justify-center h-screen">
      
      <div className="grid grid-cols-4">
        <div className="col-start-2 col-end-4 grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <h1 className="text-xl text-bold ml-5 mt-3">Smarter Tasks</h1>
            <p className="pl-3 ml-1"><b>Project:</b>Graduation final year project</p>
          </div>

          <div className="card-border rounded border-slate-300 p-4 mx-2">
            <h1 className="text-gray-500 text-bold text-lg text-center ">Pending</h1>
            <TaskCard {...pen1}/>
            <TaskCard {...pen2}/>
          </div>

          <div className="card-border rounded border-slate-300 p-4 mx-2">
            <h1 className="text-gray-500 text-bold text-lg text-center ">Done</h1>
            <TaskCard {...done1}/>
            <TaskCard {...done2}/>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App
