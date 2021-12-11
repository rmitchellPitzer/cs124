import SettingsButton from "./SettingsButton";
import {connect} from "react-redux";
import ActiveListHeading from "./ActiveListHeading";
import BackButton from "./BackButton";
import firebase from "../../modules/db/firebase"
/**
 * @props {
 *     activeList
 * }
 */
function ActiveListBanner({activeList}) {
    const isOwnedList =  !!firebase.auth().currentUser ? activeList.owner == firebase.auth().currentUser.email : false

    return (
        <div className="active-list-banner">
            <BackButton/>
            <ActiveListHeading heading={activeList.title}/>
            {isOwnedList && <SettingsButton/>}
        </div>
    )
}

function mapToState({lists}) {
    const {activeList} = lists
    return {activeList}
}

export default connect(mapToState)(ActiveListBanner)