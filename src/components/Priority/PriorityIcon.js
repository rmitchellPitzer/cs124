
const classes = {
    0: "high-priority",
    1: "medium-priority",
    2: "low-priority",
}


export default function PriorityIcon({priority}) {
    const classList = priority == -1 ? "no-priority" : classes[priority]
    return (
        <div className={classList + " priority-icon"}/>
    )
}