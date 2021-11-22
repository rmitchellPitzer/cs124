import TaskMenuBar from "./TaskMenuBar/TaskMenuBar";
import TaskEditor from "./TaskEditor";
import "../../css/task_menu.css"

export default function TaskMenu(props) {
    return (
        <div className="task-menu-container">
            <TaskMenuBar/>
            <TaskEditor/>
        </div>
    )
}