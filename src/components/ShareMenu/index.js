import ShareMenuBanner from "./ShareMenuBanner";
import "../../css/share_menu.css"
import UsersContainer from "./UsersContainer";
import {connect} from "react-redux";
import ShareWithDialog from "./ShareWithDialog";
import ShareWithDialogTwo from "./ShareWithDialogTwo";
import RemoveDialog from "../RemoveDialog";

function ShareMenu({showShareDialogOne,showRemoveMenu,showShareDialogTwo}) {
    return (
        <div>
            <ShareMenuBanner/>
            <UsersContainer/>
            {showShareDialogOne && <ShareWithDialog/>}
            {showShareDialogTwo && <ShareWithDialogTwo/>}
            {  showRemoveMenu && <RemoveDialog/>}

        </div>
    )
}

function mapToState({listSettings,request}) {
    const {showShareDialogOne,showShareDialogTwo} = listSettings
    const {showRemoveMenu} = request

    return {
        showShareDialogTwo,
        showRemoveMenu,
        showShareDialogOne,
    }
}

export default connect(mapToState)(ShareMenu)