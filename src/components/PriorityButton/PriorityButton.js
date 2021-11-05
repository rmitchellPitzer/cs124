



const classes = {
    0: "high-priority",
    1: "medium-priority",
    2: "low-priority",
}

function openPriorityMenu(id) {

}
function PriorityButton({id,priority}) {
    const classes = priority == -1 ? "no-priority" : classes[priority]

    return <button
        className={classes}
        onClick={() => }
    >

    </button>
}