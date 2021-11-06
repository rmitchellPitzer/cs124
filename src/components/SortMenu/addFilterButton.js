import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons"
import TaskOrderController from "../../modules/dataController/TaskOrderController";

async function addFilterSection() {
  await TaskOrderController.addRandomField()
}

export default function AddFilterButton(props) {
    const classes = props.sortingFields.length < 3
        ? "sortButton sort-button-color"
        : "hide"

    return (
        <button onClick={addFilterSection} className={classes}>
            <span> + Field </span>
        </button>
    )
}