/*

@ISortData: {
field:"name"|"time"|"priority",
isAscending:Boolean
}

@ITask: {
    _id:String (UUIDV4);
    isCompleted:Boolean;
    text:String;
    creationDate:Number (Unix);
    priority: Number;
}
 */

export const NAME = "name"
export const TIME = "time"
export const PRIORITY = "priority"

export default function applySorting(sortDataList,tasks) {
    for (let i = 0; i < sortDataList.length; i++) {
        const sortData = sortDataList[i]
        const sortFunction = getSortFunction(sortData)
        if (isFirstSortField(i)) {
           sortTasks(tasks,sortFunction,sortData)
        }
        else {
            const prevSortData = sortDataList[i - 1]
            const prevSortFunction = getSortFunction(prevSortData)
            sortBySecondaryKey(prevSortData,prevSortFunction,sortData,tasks,sortFunction)
        }

    }
    return tasks.map(x => x)
}

function isFirstSortField(index) {
    return index == 0
}

function sortTasks(tasks,sortFunction,sortData) {
    tasks.sort((a, b) => sortFunction(a, b, sortData.isAscending))
}

function sortBySecondaryKey(prevSortData,prevSortFunction,sortData,tasks,sortFunction) {
    tasks.sort((a,b) => {
        if (valuesAreEqual(prevSortData,prevSortFunction,a,b)) {
            return sortFunction(a,b,sortData.isAscending)
        }
    })
}

function valuesAreEqual(sortData,sortFunction,a,b) {
    return sortFunction(a,b,sortData.isAscending) == 0
}

function getSortFunction({field,isAscending}) {
    switch (field) {
        case NAME : return sortByName;
        case TIME: return sortByTime;
        case PRIORITY: return sortByPriority;
        default: return
    }
}

function sortByName(taskA,taskB,isAscending) {
    const comparison = taskA.text.localeCompare(taskB.text)
    return isAscending ? comparison : -1 * comparison
}

function sortByPriority(taskA,taskB,isAscending) {
    const comparison = taskA.priority - taskB.priority
    return isAscending ? -1 * comparison : comparison
}

function sortByTime(taskA,taskB,isAscending) {
    const comparison = taskA.creationDate - taskB.creationDate
    return isAscending ? comparison : -1 * comparison
}