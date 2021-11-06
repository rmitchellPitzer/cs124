import PriorityIcon from "../PriorityIcon";
import AppDataController from "../../../modules/dataController/AppDataController";

const classList = {
    0: "high-priority",
    1: "medium-priority",
    2: "low-priority",
}

function openPriorityMenu(id) {
        AppDataController.showPriorityMenu(id)
}

export default function PriorityButton({id,priority}) {
    const classes = priority == -1 ? "no-priority" : classList[priority]

    return <button
            className={classes + " priority-icon"}
            onClick={() => openPriorityMenu(id)}
            >
    </button>
}