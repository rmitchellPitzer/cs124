import PriorityMenuItem from "./PriorityMenuItem.js"
import "../../css/action_list.css"
import TaskDataController from "../../modules/dataController/TaskDataController.js"
import AppDataController from "../../modules/dataController/AppDataController.js"
/*
props: {
    menuItems: MenuItem[]
}

menuItem {
    text: string;

    command: Function
}
*/


function setPriority(value) {
    TaskDataController.set()
    AppDataController.hidePriorityMenu()
    setTimeout( () => {
        AppDataController.hideUndo()
    },3000)

}
const menuItems = [
    {text:"Set Task priority"},
    {text: "none", command:setPriority(0)},
    {text: "low", command:setPriority(-1)},
    {text: "medium", command:setPriority(-2)},
    {text: "high", command:setPriority(-3)},
]

export default function PriorityMenu(props) {
    return (
        <div class='overlay'onClick= {AppDataController.prior}>
            <div class='action-container'>
                { menuItems.map(menuItem => {
                    return <ActionMenuItem {...menuItem} key={menuItem.text}/>
                })}
            </div>
        </div>

    )
}