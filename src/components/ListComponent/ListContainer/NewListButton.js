import store from "../../../modules/localStore/store";
import {showNewListMenuAction} from "../../../modules/localStore/actions/newListMenuAction";


export default function NewListButton(props) {

    return (
        <button onClick={showMenu}>
            Add New List
        </button>
    )
}


function showMenu() {
    store.dispatch(showNewListMenuAction())
}