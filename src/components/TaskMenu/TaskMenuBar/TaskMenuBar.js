import TaskMenuCloseButton from "./TaskMenuCloseButton";
import TaskMenuDeleteButton from "./TaskMenuDeleteButton";
import "../../../css/task_menu.css"

export default function TaskMenuBar(props) {
    return (
        <div className="task-menu">
            <h1> Task </h1>
            <TaskMenuDeleteButton/>
            <TaskMenuCloseButton/>
        </div>
    )
}