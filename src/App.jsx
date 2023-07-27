import "./App.css";
import Input from "./components/input";
import { useState } from "react";
import Board from "./components/Board";
function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-mono mb-2 font-semibold ">ToDo Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div className="flex flex-col gap-4 sm:grid-cols-3 px-4 sm:px-8 md:px-10">
          {taskList.map((task, index) => (
            <Board key={index} index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
