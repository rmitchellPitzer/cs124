import TaskOrderController from "../../../modules/dataController/TaskOrderController";
import {connect} from "react-redux"

function EntryOrderButton(props) {

    return (
        <div>
            <label> Order </label>
            <select
                onChange={ (result) => onOrderChange(props.field,result.currentTarget.value)}
                value={props.index}
            >
                {
                    props.sortingFields.map((_,i) => {
                        return <option value={i}> {i + 1} </option>
                    })
                }
            </select>
        </div>

    )
}

async function onOrderChange(field,newOrder) {
    await TaskOrderController.changeSortFieldOrder(field,newOrder - 1)
}

function mapState(state) {
    return {
        sortingFields:state.sortingFields
    }
}

export default connect(mapState)(EntryOrderButton)

