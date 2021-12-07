import db from "../db/index"
import {COLLECTION_NAME,DEFAULT_DOC_ID} from "../localStore/constants"
import {NAME, PRIORITY, TIME} from "../sorting/sortingAlgorithm";
const collectionRef = db.collection(COLLECTION_NAME)


export default class TaskOrderController {

    static async addSortField(field,isAscending) {
        if (!TaskOrderController.hasValidField(field)) return

        const sortFilters = await getSortFields()
        if (!sortFilters) return
        if (isAlreadyEnabled(field,sortFilters)) return
        else enableFilter(sortFilters,field,!!isAscending)
    }

    static hasValidField(field) {
        return field == NAME || field == PRIORITY || field == TIME
    }

    static async changeSortField(old,newField) {
        if (!TaskOrderController.hasValidField(old)) return
        if (!TaskOrderController.hasValidField(newField)) return

        const sortFilters = await getSortFields()
        const prevField = sortFilters.find(f => f.field == old)
        const hasFieldAlready = sortFilters.find(f => f.field == newField)
        if (!prevField) return
        prevField.field = hasFieldAlready ? old : newField
        await updateSortFields(sortFilters)
    }

    static async changeAscending(field,isAscending) {
        const sortFilters = await getSortFields()
        const prevField = sortFilters.find(f => f.field == field)
        if (!prevField) return
        prevField.isAscending = !!isAscending
        await updateSortFields(sortFilters)


    }

    static async addRandomField() {
        const sortFilters = await getSortFields()
        if (!sortFilters) return

        const hasName = !!sortFilters.find(f => f.field == "name")
        const hasTime = !!sortFilters.find(f => f.field == "time")
        const hasPriority = !!sortFilters.find(f => f.field == "priority")

        if (!hasName) await TaskOrderController.addSortField("name",true)
        else if (!hasTime) await TaskOrderController.addSortField("time",true)
        else if (!hasPriority) await TaskOrderController.addSortField("priority",true)


    }

    static async removeSortField(field) {
        const sortFields = await getSortFields()
        const doc = getDoc()
        if (!sortFields) return
        const newSortingFields = sortFields.filter(f => f.field !== field)
        await updateSortFields(newSortingFields)
    }

    static async changeSortFieldOrder(field,newIndex) {
        const sortFields = await getSortFields()
        if (!sortFields || newIndex < 0 || newIndex >= sortFields.length) return

        const currentIndex = getCurrentIndexOfField(field,sortFields)
        if (currentIndex == -1 ) return

        const entry = sortFields.splice(currentIndex,1)
        sortFields.splice(newIndex,0,entry[0])

        await updateSortFields(sortFields)
    }

}

function getDoc() {
    return collectionRef.doc(DEFAULT_DOC_ID)
}

async function getSortFields() {
    const data = await getDoc().get()
    return data ? data.data().sortingFields : null
}

async function updateSortFields(sortingFields) {
    const doc = getDoc()
    await doc.update({sortingFields})
}

function getCurrentIndexOfField(field,sortFields) {
        for (let i = 0 ; i < sortFields.length ;i++) {
            const data = sortFields[i]
            if (data.field == field) return i
        }
        return -1
}

function isAlreadyEnabled(field,sortFilters) {
    return !!sortFilters.find(filter => filter.field == field)
}

async function enableFilter(sortingFields,field,isAscending) {
    const doc = getDoc()
    sortingFields.push({field,isAscending})
    await updateSortFields(sortingFields)
}

