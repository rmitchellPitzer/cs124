import AppDataController from "../../../modules/dataController/AppDataController";

const classList = {
    0: "high-priority",
    1: "medium-priority",
    2: "low-priority",

}

function openPriorityMenu(id) {
        AppDataController.hideTaskMenu()
        AppDataController.hideSortMenu()
        AppDataController.showPriorityMenu(id)
        const element = document.getElementsByClassName("priority-item")
        if (element[0]) element[0].focus()

}

function priorityText(priority) {
    const p = classList[priority]
    return p ? p : "no-priority"
}

export default function PriorityButton({id,priority,text}) {
    const classes = priority == -1 ? "no-priority" : classList[priority]

    return <button
            aria-label={`Priority Button with ${priorityText(priority)} for task with text ${text}`}
            className={classes + " priority-icon"}
            onClick={() => openPriorityMenu(id)}
            >
            </button>
}