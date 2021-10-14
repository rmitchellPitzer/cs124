import ActionMenuItem from "./ActionMenuItem.js"
import "../../css/action_list.css"
import TaskDataController from "../../modules/dataController/TaskDataController.js"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

/*
props: {
    menuItems: MenuItem[]
}

menuItem {
    text: string;

    command: Function
}
*/
const menuItems = [
    {text:"Add Task", command: TaskDataController.createTask, icon: faPlus},
    {text: "Clear Completed Tasks", command: TaskDataController.deleteAllCompleted, icon: faMinus},
]

export default function ActionMenu(props) {
    return (
        <div class='action-container'>
            { menuItems.map(menuItem => {
                return <ActionMenuItem {...menuItem} key={menuItem.text}/>
            })}
        </div>
    )
}