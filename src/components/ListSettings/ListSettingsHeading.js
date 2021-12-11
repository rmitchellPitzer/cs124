import {connect} from "react-redux";
import "../../css/list_settings.css"

function ListSettingsHeading({activeList}) {
    return (
        <div className="list-settings-heading orange">
            <h1>{activeList ? activeList.title : ""}</h1>
        </div>
    )
}


function mapToState({lists}) {
    const {activeList} = lists
    return {
        activeList
    }
}


export default connect(mapToState)(ListSettingsHeading)