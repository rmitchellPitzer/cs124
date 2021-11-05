import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";
import "../../css/sort_button.css"

function toggleButton() {
   AppDataController.toggleSortFieldMenu()
}

export default function FilterButton(props) {
   return  <button className="sort-button" onClick={toggleButton}> <FontAwesomeIcon icon={faFilter}/> </button>
}




