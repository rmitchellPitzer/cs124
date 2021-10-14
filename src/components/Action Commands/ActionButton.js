import AppDataController from "../../modules/dataController/AppDataController"

function handleOnClick() {
    AppDataController.showMenu()
}

export default function ActionButton() {

    return (
        <button 
            class="action-button"
            onClick={handleOnClick}
        >
        <i class="fas fa-plus"></i>
    </button>
    )
}

