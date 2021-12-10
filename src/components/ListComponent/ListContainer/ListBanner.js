import  "../../../css/list.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {PENDING_LISTS, SHARED_LISTS, YOUR_LISTS} from "../index";


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
            <button onClick={() => toggleList(heading)}>
                <FontAwesomeIcon icon={showList ? faChevronDown : faChevronRight}/>
            </button>
            <h2> { heading }</h2>
        </div>
    )
}


function toggleList(listType) {
    switch(listType) {
        case YOUR_LISTS:
        case SHARED_LISTS:
        case PENDING_LISTS:
    }
}