import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";




export default function SettingsButton(props) {
    return <button className="sort-button black">
        <FontAwesomeIcon icon={faCog}/>
    </button>
}