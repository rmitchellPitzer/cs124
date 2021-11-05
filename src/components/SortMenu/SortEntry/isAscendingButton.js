import TaskOrderController from "../../../modules/dataController/TaskOrderController";

async function change(field,value) {
    await TaskOrderController.changeAscending(field,!value)
}

export default function IsAscendingButton(props) {

    return (
        <div>
            <label> isAscending </label>
            <input
                type='checkbox'
                value={props.isAscending}
                checked= {props.isAscending}
                onChange= {() => change(props.field,props.isAscending)}
            />
        </div>

    )
}