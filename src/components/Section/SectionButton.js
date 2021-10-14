import AppDataController from "../../modules/dataController/AppDataController"

 export default function SectionButton(props) {
    return (
        <button class="drop-down" onClick={(e) => handleOnClick(props.isToDo)}>
            <i class="fas fa-angle-down"></i>
        </button>
    )
}   

function handleOnClick(isToDo) {
    if (isToDo) {
        AppDataController.toggleTodoList()
    }
    else AppDataController.toggleCompletedList()
}

