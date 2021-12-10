import  "../../../css/list.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {PENDING_LISTS, SHARED_LISTS, YOUR_LISTS} from "../index";
import ListController from "../../../modules/listController";

/**
 *
 * @param props {
 *     heading: string;
 *     showList: boolean;
 *
 * }
 */
export default function ListBanner({heading,showList}) {
    return (
        <div className="list-banner">
            <button
                className="list-banner-toggle"
                onClick={() => toggleList(heading)}
            >
                <FontAwesomeIcon icon={showList ? faChevronDown : faChevronRight}/>
            </button>
            <h2 className="list-banner-heading"> { heading }</h2>
        </div>
    )
}


function toggleList(listType) {
    switch(listType) {
        case YOUR_LISTS: return ListController.toggleOwnListMenu()
        case SHARED_LISTS: return ListController.toggleSharedListMenu()
        case PENDING_LISTS: return ListController.togglePendingListMenu()
    }
}