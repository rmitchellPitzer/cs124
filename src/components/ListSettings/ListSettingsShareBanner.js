import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import store from "../../modules/localStore/store";
import {hideShareMenuAction} from "../../modules/localStore/actions/listSettingsActions";

export default function ListSettingsShareBanner() {
    return (
        <div className="list-settings-banner red">
            <button
                className="list-settings-button"
                onClick={closeShareSettings}
            >
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <h2> Share Setting </h2>
        </div>
    )
}

function closeShareSettings() {
    store.dispatch(hideShareMenuAction())
}