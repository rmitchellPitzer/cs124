import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";

function toggleButton() {
   AppDataController.toggleSortFieldMenu()
}

export default function FilterButton(props) {
   return  <button onClick={toggleButton}> <FontAwesomeIcon icon={ faFilter}/> </button>
}




