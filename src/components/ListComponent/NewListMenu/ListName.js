import store from "../../../modules/localStore/store";
import {updateNewListName} from "../../../modules/localStore/actions/newListMenuAction";


export default function ListName(props) {

    return (
        <div className="dialog-item">
            <input onChange={(e) => updateText(e)} placeholder="Type in a List Name"/>
        </div>

    )
}


function updateText(event) {
    store.dispatch(updateNewListName(event.currentTarget.value))
}