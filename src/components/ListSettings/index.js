import ListSettingsHeading from "./ListSettingsHeading";
import ListSettingsBanner from "./ListSettingsBanner";
import SettingsCommandContainer from "./SettingsCommandContainer";
import "../../css/list_settings.css"
import ChangeNameMenu from "./ChangeNameMenu";
import {connect} from "react-redux";
import DeleteListMenu from "../ListComponent/DeleteListMenu";


function ListSettings({showChangeNameMenu,showDeleteListMenu}) {
    return (
        <div className="list-settings">
            <ListSettingsHeading/>
            <ListSettingsBanner/>
            <SettingsCommandContainer/>
            { showChangeNameMenu && <ChangeNameMenu/>}
            { showDeleteListMenu && <DeleteListMenu/>}
        </div>
    )
}

function mapToState({listSettings}) {
    const {
        showChangeNameMenu,
        showDeleteListMenu
    } = listSettings

    return {
        showChangeNameMenu,
        showDeleteListMenu,
    }
}

export default connect(mapToState)(ListSettings)