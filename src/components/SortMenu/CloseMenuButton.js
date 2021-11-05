import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose} from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";

function closeMenu() {
    AppDataController.hideSortMenu()
}
export default function CloseMenuButton(props) {
    return (
        <button className="sort-button"  onClick={closeMenu}>
            <h3> x </h3>
        </button>
    )

}