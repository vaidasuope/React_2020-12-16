import React,{useState} from 'react';
import TodoList from "./TodoList";
import NewTask from "./NewTask";

const Todo = () => {

    const [tasks, setTask] = useState([
        {
            text:"Clean your room",
            isCompleted: false
        },
        {
            text:"Go to cinema",
            isCompleted: true
        }
    ])

    //text naujas kintamasis ateinantis is inout lauko
    //...tasks reiskia, kad pasidarau kopija pries tai buvusiu duomenu kopija
    const addNewTask=(text)=>{
        let newrow = [...tasks, {text}]
        setTask(newrow)
    }

    return (
        <div>
        <div className="table">
            {tasks.map((task,index)=>(
                <TodoList
                key={index}
                index={index}
                task={task}
                />
            ))}
        </div>
            <NewTask addNewTask={addNewTask}/>
        </div>
    )

}

export default Todo;