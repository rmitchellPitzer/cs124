import Overlay from "../../Dialog/Overlay";
import Menu from "../../Dialog/Menu";
import DialogHeading from "../../Dialog/DialogHeading";
import ListName from "./ListName";
import TwoButtonMenu from "../../Dialog/TwoButtonMenu";
import store from "../../../modules/localStore/store";
import {
    hideNewListMenuAction,
    updateNewListName
} from "../../../modules/localStore/actions/newListMenuAction";

import ListController from "../../../modules/listController";
export default function NewListMenu() {
    return (
        <Overlay>
            <Menu>
                <DialogHeading heading="New List"/>
                <ListName/>
                <TwoButtonMenu
                    leftText="Confirm"
                    leftClasses=""
                    leftCommand={ confirmNewList}
                    rightText="Cancel"
                    rightClasses=""
                    rightCommand={closeMenu}
                />
            </Menu>
        </Overlay>
    )
}


function confirmNewList() {
    const {newListName} = store.getState().newListMenu
    if (newListName === "") return
    ListController.createList(newListName)
    closeMenu()
}

function closeMenu() {
    store.dispatch(updateNewListName(""))
    store.dispatch(hideNewListMenuAction())
}

