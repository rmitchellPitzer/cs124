/**
 *
 * @param props {
 *     command: Function,
 *     name:string;
 * }
 */

import firebase from "../../modules/db/firebase"
export default function SettingsCommand({activeList,command,name,_private}) {
    const isAllowed = _private == false ? true : activeList && activeList.owner == firebase.auth().currentUser.email

    const classes = isAllowed && _private !== "only" || (!isAllowed && _private == "only") ? "list-settings-command" : "hidden"

    return (
            <button
                className={classes}
                onClick={() => command()}
            >
                {name}
            </button>
    )
}