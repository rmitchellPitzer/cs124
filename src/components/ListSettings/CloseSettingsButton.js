import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import store from "../../modules/localStore/store";
import {hideListSettingsAction} from "../../modules/localStore/actions/listSettingsActions";


export default function CloseSettingsButton() {
    return (
        <button
            className="list-settings-button"
            onClick={closeSettings}
        >
            <FontAwesomeIcon icon={faAngleLeft}/>
        </button>
    )

}

function closeSettings() {
    store.dispatch(hideListSettingsAction())
}