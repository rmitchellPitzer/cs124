import Overlay from "../Dialog/Overlay";
import DialogText from "../Dialog/DialogText";
import TwoButtonMenu from "../Dialog/TwoButtonMenu";
import ListController from "../../modules/listController";
import store from "../../modules/localStore/store";
import {hideRemoveMenuAction} from "../../modules/localStore/actions/requestAction";
import {connect} from "react-redux";
import Menu from "../Dialog/Menu";


function RemoveDialog({selectedUser}){
    return (
        <Overlay>
            <Menu>
                <DialogText text={`Are you sure you want to remove access from
                ${selectedUser} to this list?`}
                />
                <TwoButtonMenu
                    leftText="Yes"
                    leftClasses="red"
                    leftCommand={() => removeUser(selectedUser)}

                    rightText="No"
                    rightClasses="grey"
                    rightCommand={closeMenu}
                />

            </Menu>
        </Overlay>
    )
}

function mapToState({request}) {
    const {selectedUser} = request
    return {selectedUser}
}

function closeMenu() {
    store.dispatch(hideRemoveMenuAction())
}

async function removeUser(user) {
    await ListController.removeAccess(user)
    closeMenu()
}

export default connect(mapToState)(RemoveDialog)