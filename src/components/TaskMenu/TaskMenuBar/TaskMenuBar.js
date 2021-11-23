import TaskMenuCloseButton from "./TaskMenuCloseButton";
import TaskMenuDeleteButton from "./TaskMenuDeleteButton";
import "../../../css/task_menu.css"

export default function TaskMenuBar(props) {
    return (
        <div className="task-menu-bar">
            <h2 className="task-menu-title"> Task </h2>
            <div>
                <TaskMenuDeleteButton/>
                <TaskMenuCloseButton/>
            </div>

        </div>
    )
}