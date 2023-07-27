/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = ({taskList, setTaskList}) => {

    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }

  return (
    <>
    
    <form className="flex items-center gap-3">
        <input 
        type="text" 
        placeholder="Your Todo"
        className="border rounded-lg py-1.5 px-2.5 text-lg"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}/>
    </form>
    <button className="bg-violet-200 text-white py-1 px-3.5 font-mono border-none rounded-xl hover:opacity-70" onClick={handleAddTask}>Add Task</button>
    </>

  )
}

export default Input