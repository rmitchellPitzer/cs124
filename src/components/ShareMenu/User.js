import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import store from "../../modules/localStore/store";
import {showRemoveMenuAction, updateSelectedUser} from "../../modules/localStore/actions/requestAction";

export default function User({email}) {
    return (
       <div className="users-container">
           <p> {email}</p>
           <button
               className="button"
               onClick={() => showRemoveUserDialog(email)}
           >
               <FontAwesomeIcon icon={faTimesCircle}/>
           </button>
       </div>
    )
}

function showRemoveUserDialog(user) {
    store.dispatch(updateSelectedUser(user))
    store.dispatch(showRemoveMenuAction())

}