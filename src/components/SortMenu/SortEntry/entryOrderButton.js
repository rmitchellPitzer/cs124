import TaskOrderController from "../../../modules/dataController/TaskOrderController";
import {connect} from "react-redux"

function entryOrderButton(props) {

    return (
        <select
            onChange={ (result) => onOrderChange(props.field,result.currentTarget.value)}
            value={props.index}
        >
        {
            props.sortingFields.map((_,index) => {
                <option value={i}> i + 1</option>
            })
        }
        </select>
    )
}

function onOrderChange(field,newOrder) {
    TaskOrderController.changeSortFieldOrder(field,newOrder - 1)
}

function mapState(state) {
    return {
        sortingFields:state.sortingFields
    }
}

export default connect(mapState)(entryOrderButton)

