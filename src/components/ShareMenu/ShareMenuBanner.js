import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import store from "../../modules/localStore/store";
import {showShareDialogOneAction} from "../../modules/localStore/actions/listSettingsActions";

export default function ShareMenuBanner() {
    return (
        <div className=" share-banner grey">
            <button
                onClick={openShareMenu}
            >
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            <h2> Users With Access </h2>
        </div>
    )
}


function openShareMenu() {
    store.dispatch(showShareDialogOneAction())
}