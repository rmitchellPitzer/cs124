import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import store from "../../modules/localStore/store";
import {showListSettingsAction} from "../../modules/localStore/actions/listSettingsActions";




export default function SettingsButton(props) {
    const classes = !props.isOwnedList ? "hide" : "sort-button black"
    //@todo
    return (
        <button
            className={ classes}
            onClick={showSettings}
        >
         <FontAwesomeIcon icon={faCog}/>
         </button>
    )
}

function showSettings() {
    store.dispatch(showListSettingsAction())
}