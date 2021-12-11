import Overlay from "../Dialog/Overlay";
import SingleButtonMenu from "../Dialog/SingleButtonMenu";
import store from "../../modules/localStore/store";
import {hideShareDialogTwoAction, updateShareUserAction} from "../../modules/localStore/actions/listSettingsActions";
import Menu from "../Dialog/Menu";
import DialogText from "../Dialog/DialogText";
import {connect} from "react-redux";

 function ShareWithDialogTwo({user}){

    return (
        <Overlay>
            <Menu>
                <DialogText
                    text={`if ${user} is a valid user, they have successfully received an invite!`}
                />
                <SingleButtonMenu
                    text="Close"
                    classes="grey"
                    command={closeMenu}
                />
            </Menu>
        </Overlay>
    )
}

function closeMenu() {
    store.dispatch(updateShareUserAction(null))
    store.dispatch(hideShareDialogTwoAction())
}

function mapToState({listSettings}) {
     return {
         user:listSettings.shareWithUser
     }
}

export default connect(mapToState)(ShareWithDialogTwo)