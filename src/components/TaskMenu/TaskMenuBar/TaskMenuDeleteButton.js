import "../../../css/task_menu.css"

function deleteTask(id) {

}

export default function TaskMenuDeleteButton(props) {


    return (
        <button
            className="task-menu-delete-button"
            onClick={() => deleteTask(props.id)}
        >
            Delete
        </button>
    )
}