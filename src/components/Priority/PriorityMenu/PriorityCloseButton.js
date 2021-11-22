import AppDataController from "../../../modules/dataController/AppDataController";

function closePriorityMenu() {
    AppDataController.hidePriorityMenu()


}


export default function PriorityCloseButton(props) {
    return <button
            className="priority-close-button"
            onClick={closePriorityMenu}
            >
                <span> x </span>
            </button>
}