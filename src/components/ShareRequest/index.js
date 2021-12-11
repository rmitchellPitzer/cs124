import Overlay from "../Dialog/Overlay";
import Menu from "../Dialog/Menu";
import DialogHeading from "../Dialog/DialogHeading";
import DialogText from "../Dialog/DialogText";
import TwoButtonMenu from "../Dialog/TwoButtonMenu";
import {connect} from "react-redux";
import ListController from "../../modules/listController";
import store from "../../modules/localStore/store";
import {hideShareMenuAction} from "../../modules/localStore/actions/listSettingsActions";
import {hideRequestMenuAction} from "../../modules/localStore/actions/requestAction";

function ShareRequest({list}) {
    const user = list ? list.owner : null
    const title = list ? list.title : null
    return (
        <Overlay>
            <Menu>
                <DialogHeading heading="Share Request"/>
                <DialogText text={`${user} wants to share their ${title} list`}/>
                <TwoButtonMenu
                    leftText="Accept"
                    leftClasses="green"
                    leftCommand={() => accept(list)}

                    rightText="Decline"
                    rightClasses="red"
                    rightCommand={() => reject(list)}
                />
            </Menu>
        </Overlay>
    )
}


async function accept(list) {
    await ListController.acceptShareRequest(list)
    store.dispatch(hideRequestMenuAction())
}

async function reject(list) {
    await ListController.rejectShareRequest(list)
    store.dispatch(hideRequestMenuAction())
}

function mapToState({request}) {
    const {activeRequest} = request

    if (!activeRequest) return {
        list:null
    }

    else return {
        list:activeRequest
    }
}

export default connect(mapToState)(ShareRequest)