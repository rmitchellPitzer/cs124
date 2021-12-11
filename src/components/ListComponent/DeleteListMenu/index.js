import Overlay from "../../Dialog/Overlay";
import Menu from "../../Dialog/Menu";
import DialogHeading from "../../Dialog/DialogHeading";
import TwoButtonMenu from "../../Dialog/TwoButtonMenu";
import store from "../../../modules/localStore/store";
import {
    hideDeleteListMenuAction,
    hideListSettingsAction
} from "../../../modules/localStore/actions/listSettingsActions";
import ListController from "../../../modules/listController";
import DialogText from "../../Dialog/DialogText";


export default function DeleteListMenu(props) {

    return (
        <Overlay>
            <Menu>
                <DialogHeading heading="Delete List"/>
                <DialogText
                    text="Are you sure you want to delete this list?"
                />
                <TwoButtonMenu
                    leftText="Yes"
                    leftClasses="red"
                    leftCommand={deleteList}

                    rightText="Cancel"
                    rightClasses="grey"
                    rightCommand={hideMenu}
                />
            </Menu>
        </Overlay>
    )
}


async function deleteList() {
    await ListController.deleteActiveList()
    hideMenu()
    store.dispatch(hideListSettingsAction())
}


function hideMenu() {
    store.dispatch(hideDeleteListMenuAction())
}