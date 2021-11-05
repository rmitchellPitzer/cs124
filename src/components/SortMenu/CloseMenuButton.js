import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose} from "@fortawesome/free-solid-svg-icons"

export default function CloseMenuButton(props) {
    return (
        <button className="sort-button">
            <FontAwesomeIcon icon={faWindowClose}/>
        </button>
    )

}