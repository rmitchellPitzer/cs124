import TaskOrderController from "../../../modules/dataController/TaskOrderController";
import {connect} from "react-redux"

function EntryOrderButton(props) {

    return (
        <div>
            <label> Order </label>
            <select
                onChange={ (result) => onOrderChange(props.field,parseInt(result.currentTarget.value))}
                value={props.index}
            >
                {
                    props.sortingFields.map((_,i) => {
                        return <option key={i} value={i}> {i + 1} </option>
                    })
                }
            </select>
        </div>

    )
}

async function onOrderChange(field,newOrder) {
    console.log(newOrder)
    await TaskOrderController.changeSortFieldOrder(field,newOrder)
}

function mapState(state) {
    return {
        sortingFields:state.sortingFields
    }
}

export default connect(mapState)(EntryOrderButton)

