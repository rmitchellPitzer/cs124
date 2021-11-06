import TaskOrderController from "../../../modules/dataController/TaskOrderController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountUp, faSortAmountDown} from "@fortawesome/free-solid-svg-icons"
async function change(field,value) {
    console.log(field,value)
    await TaskOrderController.changeAscending(field,!value)
}

export default function IsAscendingButton(props) {
    const icon = props.isAscending ? faSortAmountUp :faSortAmountDown
    return (
        <div>
            <button className="direction-button" onClick={() => change(props.field,props.isAscending)}>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </button>
        </div>

    )
}