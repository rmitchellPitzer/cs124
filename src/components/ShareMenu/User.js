import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

export default function User({email}) {
    return (
       <div>
           <p> {email}</p>
           <button
               onClick={() => showRemoveUserDialog(email)}
           >
               <FontAwesomeIcon icon={faTimesCircle}/>
           </button>
       </div>
    )
}

function showRemoveUserDialog(user) {


}