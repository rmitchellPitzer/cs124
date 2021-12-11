import SettingsCommand from "./SettingsCommand";
import store from "../../modules/localStore/store";
import {showChangeNameMenuAction, showDeleteListMenuAction} from "../../modules/localStore/actions/listSettingsActions";


export default function SettingsCommandContainer() {
    return (
    <div className="list-settings-container">
        {commands.map(command => <SettingsCommand {...command}/>)}
    </div>
    )
}

const commands = [
    {
        name:"Change List Name",
        command:showChangeNameMenu
    },
    {
        name:"Manage Share Settings",
        command: () => true
    },
    {
        name:"Delete List",
        command: showDeleteListMenu
    }
]


function showDeleteListMenu() {
    console.log("action2")
    store.dispatch(showDeleteListMenuAction())
}
function showChangeNameMenu() {
    store.dispatch(showChangeNameMenuAction())
    console.log("action")
}