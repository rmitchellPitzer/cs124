import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons"
import TaskOrderController from "../../modules/dataController/TaskOrderController";

async function addFilterSection() {
  await TaskOrderController.addRandomField()
}

export default function AddFilterButton(props) {
    return (
        <button onClick={addFilterSection} className="sortButton">
            <h3>  + Filter </h3>
        </button>
    )
}