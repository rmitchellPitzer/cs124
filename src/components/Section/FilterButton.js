import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";
import "../../css/sort_button.css"

function toggleButton() {
   AppDataController.toggleSortFieldMenu()
}

export default function FilterButton(props) {
   const classes = !props.isToDo ? "sort-button hide" : "sort-button"
   return  <button className={classes} onClick={toggleButton}> <FontAwesomeIcon icon={faFilter}/> </button>
}




