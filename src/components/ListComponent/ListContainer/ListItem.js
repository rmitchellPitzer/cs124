import ListController from "../../../modules/listController";
import {PENDING_LISTS, SHARED_LISTS, YOUR_LISTS} from "../index";
import store from "../../../modules/localStore/store";
import {showRequestMenuAction, updateActiveRequestAction} from "../../../modules/localStore/actions/requestAction";


/**
 *
 * @param props {
 *     list
 *
 *     ...;
 * }
 */
export default function ListItem({heading,list}) {

    return (
       <button
           onClick={() => navToList(heading,list)}
           className="list-item"
       >
           {list.title}
       </button>
    )
}


function showRequest(list) {
    store.dispatch(updateActiveRequestAction(list))
    store.dispatch(showRequestMenuAction())
}

function navToList(heading,list) {
    switch(heading) {
        case YOUR_LISTS: return ListController.navToList(list);
        case PENDING_LISTS: return showRequest(list)
        case SHARED_LISTS: return ListController.navToList(list)
    }

}