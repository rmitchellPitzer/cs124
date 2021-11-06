import TaskOrderController from "../../../modules/dataController/TaskOrderController";
import "../../../css/sort_entry.css"

function change(old,event) {
    TaskOrderController.changeSortField(old,event.currentTarget.value)
}

export default function SortCriteriaDropDown(props) {

    return(
        <div >
            <label> By </label>
            <select
                className="sort-type"
                onChange={(event) => change(props.field,event)}
                value={props.field}
            >
                <option value='name' > Name </option>
                <option value="time"> Creation Date</option>
                <option value="priority"> Priority </option>
            </select>
        </div>
    )
}


