import TaskCard from "./TaskCard"

function App() {
 

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
            <TaskCard title="Build the website with static content" dueDate="10th Aprail" assigneeName="Rohit S"/>
            <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M"/>
          </div>

          <div className="card-border rounded border-slate-300 p-4 mx-2">
            <h1 className="text-gray-500 text-bold text-lg text-center ">Done</h1>
            <TaskCard title="Design the mockup" completedAtDate="10th Aprail" assigneeName="Rohit M"/>
            <TaskCard title="Get the approval from principal" completedAtDate="20th Aprail" assigneeName="Ajay S"/>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App
