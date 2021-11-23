import TaskOrderController from "../../../modules/dataController/TaskOrderController";


function deleteSort(fieldName) {
    TaskOrderController.removeSortField(fieldName)
}

export default function DeleteButton(props) {

    return (
        <button
            className="delete-button"
            onClick={() => deleteSort(props.field)}
            aria-label="Delete Sorting Field"
        >
            <span> x </span>
        </button>
    )
}

