
import "../../../css/task_menu.css"

function closeMenu() {

}



export default function TaskMenuCloseButton(props) {

    return (
        <button
            className="task-menu-close-button"
            onClick={closeMenu}
        >
            Close
        </button>
    )
}