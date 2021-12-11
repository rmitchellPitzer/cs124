import ListSettingsHeading from "./ListSettingsHeading";
import ListSettingsBanner from "./ListSettingsBanner";
import SettingsCommandContainer from "./SettingsCommandContainer";
import "../../css/list_settings.css"
import ChangeNameMenu from "./ChangeNameMenu";
import {connect} from "react-redux";
import DeleteListMenu from "../ListComponent/DeleteListMenu";
import ListSettingsShareBanner from "./ListSettingsShareBanner";
import ShareMenu from "../ShareMenu";

function ListSettings({showChangeNameMenu,showDeleteListMenu,showShareMenu}) {
    return (
        <div className="list-settings">
            <ListSettingsHeading/>
            { !showShareMenu && <ListSettingsBanner/> }
            { showShareMenu && <ListSettingsShareBanner/> }
            {!showShareMenu && <SettingsCommandContainer/>}
            { showShareMenu && <ShareMenu/> }
            { showChangeNameMenu && <ChangeNameMenu/>}
            { showDeleteListMenu && <DeleteListMenu/>}
        </div>
    )
}

function mapToState({listSettings}) {
    const {
        showChangeNameMenu,
        showDeleteListMenu,
        showShareMenu
    } = listSettings

    return {
        showChangeNameMenu,
        showDeleteListMenu,
        showShareMenu,
    }
}

export default connect(mapToState)(ListSettings)