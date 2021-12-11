import ListSettingsHeading from "./ListSettingsHeading";
import ListSettingsBanner from "./ListSettingsBanner";
import SettingsCommandContainer from "./SettingsCommandContainer";
import "../../css/list_settings.css"
import ChangeNameMenu from "./ChangeNameMenu";
import {connect} from "react-redux";
import DeleteListMenu from "../ListComponent/DeleteListMenu";
import ListSettingsShareBanner from "./ListSettingsShareBanner";
import ShareMenu from "../ShareMenu";
import RemoveSharedDialog from "../RemoveSharedDialog";

function ListSettings({showRemoveSharedMenu,activeList,showChangeNameMenu,showDeleteListMenu,showShareMenu}) {
    return (
        <div className="list-settings">
            <ListSettingsHeading/>
            { !showShareMenu && <ListSettingsBanner/> }
            { showShareMenu && <ListSettingsShareBanner/> }
            {!showShareMenu && <SettingsCommandContainer activeList={activeList}/>}

            { showShareMenu && <ShareMenu/> }
            { showChangeNameMenu && <ChangeNameMenu/>}
            { showDeleteListMenu && <DeleteListMenu/>}
            { showRemoveSharedMenu && <RemoveSharedDialog/>}

        </div>
    )
}

function mapToState({listSettings,lists}) {
    const {activeList,showRemoveSharedMenu} = lists
    const {
        showChangeNameMenu,
        showDeleteListMenu,
        showShareMenu
    } = listSettings

    return {
        showChangeNameMenu,
        showDeleteListMenu,
        showShareMenu,
        activeList,
        showRemoveSharedMenu
    }
}

export default connect(mapToState)(ListSettings)