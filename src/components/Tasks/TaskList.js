import Task from "./Task";
import "../../css/container.css"




/*
props:{
    tasks: TaskItem[]

}
*/
export default function TaskList(props) {

    return (
        <div class='container scroll-container'>
            {
            props.tasks.map(task => {
            return <Task 
                        {...task}
                        key={task.id}
                    />
            })
            }
        </div>   
    )
    
}