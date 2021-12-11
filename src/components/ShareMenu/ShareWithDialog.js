import Overlay from "../Dialog/Overlay";
import DialogHeading from "../Dialog/DialogHeading";
import TextInput from "../Dialog/TextInput";
import store from "../../modules/localStore/store";
import {
    hideShareDialogOneAction,
    showShareDialogTwoAction,
    updateShareUserAction
} from "../../modules/localStore/actions/listSettingsActions";
import SingleButtonMenu from "../Dialog/SingleButtonMenu";
import Menu from "../Dialog/Menu";
import ListController from "../../modules/listController";


export default function ShareWithDialog(props) {

    return (
        <Overlay>
            <Menu>
                <DialogHeading heading="Share List"/>
                <TextInput
                    placeholder="Enter User Email"
                    changeEvent={updateShareUser}
                />
                <SingleButtonMenu
                    text="Submit"
                    classes="green"
                    command={sendRequest}
                />
            </Menu>
        </Overlay>
    )
}

async function sendRequest() {
    const {shareWithUser} = store.getState().listSettings
    if (!shareWithUser) return
    await ListController.sendShareRequest(shareWithUser)
    store.dispatch(hideShareDialogOneAction())
    store.dispatch(showShareDialogTwoAction())

}

function updateShareUser(event) {
    const text = event.currentTarget.value
    store.dispatch(updateShareUserAction(text))
}