import SettingsButton from "./SettingsButton";
import {connect} from "react-redux";
import ActiveListHeading from "./ActiveListHeading";
import BackButton from "./BackButton";

/**
 * @props {
 *     activeList
 * }
 */
function ActiveListBanner({activeList}) {

    return (
        <div className="active-list-banner">
            <BackButton/>
            <ActiveListHeading heading={activeList.title}/>
            <SettingsButton/>
        </div>
    )
}

function mapToState({lists}) {
    const {activeList} = lists
    return {activeList}
}

export default connect(mapToState)(ActiveListBanner)