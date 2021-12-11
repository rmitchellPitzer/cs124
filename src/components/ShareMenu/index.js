import ShareMenuBanner from "./ShareMenuBanner";
import "../../css/share_menu.css"
import UsersContainer from "./UsersContainer";
import {connect} from "react-redux";
import ShareWithDialog from "./ShareWithDialog";
import ShareWithDialogTwo from "./ShareWithDialogTwo";

function ShareMenu({showShareDialogOne,showShareDialogTwo}) {
    return (
        <div>
            <ShareMenuBanner/>
            <UsersContainer/>
            {showShareDialogOne && <ShareWithDialog/>}
            {showShareDialogTwo && <ShareWithDialogTwo/>}

        </div>
    )
}

function mapToState({listSettings}) {
    const {showShareDialogOne,showShareDialogTwo} = listSettings

    return {
        showShareDialogTwo,
        showShareDialogOne,
    }
}

export default connect(mapToState)(ShareMenu)