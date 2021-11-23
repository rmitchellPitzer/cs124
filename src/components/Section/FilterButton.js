import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort} from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";
import "../../css/sort_button.css"

function toggleButton() {
   AppDataController.openSortFieldMenu()
}

export default function FilterButton(props) {
   const classes = !props.isToDo ? "sort-button hide" : "sort-button"
   return  (
       <button
           id="filter-button"
           className={classes}
           onClick={toggleButton}
           aria-label="Open Sort Filter"

       >
            <FontAwesomeIcon icon={faSort}/>
       </button>
      )
}




