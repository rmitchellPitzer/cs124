import SettingsCommand from "./SettingsCommand";
import store from "../../modules/localStore/store";
import {
    hideListSettingsAction,
    showChangeNameMenuAction,
    showDeleteListMenuAction,
    showShareMenuAction
    } from "../../modules/localStore/actions/listSettingsActions";
import firebase from "../../modules/db/firebase"
import DataSyncController from "../../modules/dataController/DataSyncController";
import {updateAuthStatusAction} from "../../modules/localStore/actions/authActions";

export default function SettingsCommandContainer() {
    return (
    <div className="list-settings-container">
        {commands.map((command,index) => <SettingsCommand key={index} {...command}/>)}
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
        command: showShareMenu
    },
    {
        name:"Delete List",
        command: showDeleteListMenu
    },
    {
        name:"Log Out",
        command: logOut
    }
]

function showShareMenu() {
    store.dispatch(showShareMenuAction())
}

async function logOut() {
    DataSyncController.clearAll()
    await firebase.auth().signOut()
    store.dispatch(hideListSettingsAction())
    store.dispatch(updateAuthStatusAction(false))
}

function showDeleteListMenu() {
    store.dispatch(showDeleteListMenuAction())
}

function showChangeNameMenu() {
    store.dispatch(showChangeNameMenuAction())
}