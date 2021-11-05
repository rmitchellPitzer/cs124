import TaskOrderController from "../../../modules/dataController/TaskOrderController";


function deleteSort(fieldName) {
    TaskOrderController.removeSortField(fieldName)
}

export default function DeleteButton(props) {

    return (
        <button onClick={() => deleteSort(props.field)} >
            <span> X </span>
        </button>
    )
}

