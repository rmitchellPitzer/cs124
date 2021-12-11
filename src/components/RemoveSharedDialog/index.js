import Overlay from "../Dialog/Overlay";
import DialogText from "../Dialog/DialogText";
import TwoButtonMenu from "../Dialog/TwoButtonMenu";
import Menu from "../Dialog/Menu";
import store from "../../modules/localStore/store";
import {hideListSettingsAction, hideRemoveSharedMenuAction} from "../../modules/localStore/actions/listSettingsActions";
import firebase from "../../modules/db/firebase"
import ListController from "../../modules/listController";
import {navToListAction} from "../../modules/localStore/actions/listActions";

export default function RemoveSharedDialog() {
    return (
        <Overlay>
            <Menu>
                <DialogText
                    text={'Are you sure you want to remove your access to this list?'}
                />
                <TwoButtonMenu
                    leftText="Yes"
                    leftClasses="red"
                    leftCommand={removeAccess}

                    rightText="No"
                    rightClasses="grey"
                    rightCommand={closeMenu}
                />
            </Menu>
        </Overlay>
    )

}


async function removeAccess() {
    const {email} = firebase.auth().currentUser
    await ListController.removeAccess(email)
    store.dispatch(hideListSettingsAction())
    store.dispatch(navToListAction(null))
    closeMenu()
}

function closeMenu() {
    store.dispatch(hideRemoveSharedMenuAction())
}
