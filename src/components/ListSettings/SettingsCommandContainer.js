import SettingsCommand from "./SettingsCommand";
import store from "../../modules/localStore/store";
import {
    hideListSettingsAction,
    showChangeNameMenuAction,
    showDeleteListMenuAction, showRemoveSharedMenuAction,
    showShareMenuAction
} from "../../modules/localStore/actions/listSettingsActions";
import firebase from "../../modules/db/firebase"
import DataSyncController from "../../modules/dataController/DataSyncController";
import {updateAuthStatusAction} from "../../modules/localStore/actions/authActions";

export default function SettingsCommandContainer({activeList}) {
    return (
    <div className="list-settings-container">
        {commands.map((command,index) => <SettingsCommand activeList={activeList} key={index} {...command}/>)}
    </div>
    )
}

const commands = [
    {
        name:"Change List Name",
        command:showChangeNameMenu,
        _private:true,
    },
    {
        name:"Manage Share Settings",
        command: showShareMenu,
        _private:true,
    },
    {
        name:"Delete List",
        command: showDeleteListMenu,
        _private:true ,
    },
    {
        name: "Remove From Shared",
        command: showRemoveSharedListMenu,
        _private: "only"
    },
    {
        name:"Log Out",
        command: logOut,
        _private:false,
    },

]

function showRemoveSharedListMenu() {
 store.dispatch(showRemoveSharedMenuAction())
}

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