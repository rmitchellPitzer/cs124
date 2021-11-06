import PriorityIcon from "../PriorityIcon";

export default function PriorityItem(props) {
    return (
        <div className="priority-item">
            <span> {props.priorityText}</span>
            <PriorityIcon priority={props.priority}/>
        </div>
    )
}