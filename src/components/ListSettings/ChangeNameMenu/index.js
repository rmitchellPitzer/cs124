import Overlay from "../../Dialog/Overlay";
import Menu from "../../Dialog/Menu";
import TwoButtonMenu from "../../Dialog/TwoButtonMenu";
import DialogHeading from "../../Dialog/DialogHeading";
import store from "../../../modules/localStore/store";
import {hideChangeNameMenuAction, updateListNameAction} from "../../../modules/localStore/actions/listSettingsActions";
import TextInput from "../../Dialog/TextInput";
import ListController from "../../../modules/listController";


export default function ChangeNameMenu() {
    return (
       <Overlay>
           <Menu>
               <DialogHeading heading="list Name"/>
               <TextInput
                   placeholder="Enter List Name"
                   changeEvent={updateName}
               />
               <TwoButtonMenu
                   leftText="Confirm"
                   leftClasses=""
                   leftCommand={setListName}
                   rightText="Cancel"
                   rightClasses=""
                   rightCommand={hideMenu}
               />
           </Menu>
       </Overlay>
    )
}


async function setListName() {
    const name = store.getState().listSettings.listTitle
    if (!name) return
    await ListController.updateListName(name)
    store.dispatch(updateListNameAction(null))
    hideMenu()

}

function updateName(e) {
    const text = e.currentTarget.value
    store.dispatch(updateListNameAction(text))

}
function hideMenu() {
    store.dispatch(hideChangeNameMenuAction())
}