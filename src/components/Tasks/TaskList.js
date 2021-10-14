import Task from "./Task";





/*
props:{
    tasks: TaskItem[]
    
}
*/
export default function TaskList(props) {

    return (
        <div class='container'>
            {
            props.tasks.map(task => {
            return <Task isCompleted={task.isCompleted} text={task.text}/>
            })
            }
        </div>   
    )
    
}