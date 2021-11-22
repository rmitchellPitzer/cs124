import ActionMenuItem from "./ActionMenuItem.js"
import "../../css/action_list.css"
import TaskDataController from "../../modules/dataController/TaskDataController.js"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
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


function deleteAll() {
    TaskDataController.deleteAllCompleted()
    AppDataController.closeMenu()
    AppDataController.showUndo()
    setTimeout( () => {
        AppDataController.hideUndo()
    },3000)
    
}
const menuItems = [
    {text: "Clear Completed Tasks", command:deleteAll, icon: faMinus},
]

export default function ActionMenu(props) {
    return (
        <div>
            <div className='action-container'>
                {menuItems.map(menuItem => {
                    return <ActionMenuItem {...menuItem} key={menuItem.text}/>
                })}
            </div>
            <div className='overlay' onClick={AppDataController.closeMenu}/>
        </div>
    )
}