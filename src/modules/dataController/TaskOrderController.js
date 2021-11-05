import db from "../db/index"
import {COLLECTION_NAME,DEFAULT_DOC_ID} from "./constants"
const collectionRef = db.collection(COLLECTION_NAME)

export default class TaskOrderController {

    static async addSortField(field,isAscending) {
        const sortFilters = await getSortFields()
        if (!sortFilters) return
        if (isAlreadyEnabled(field,sortFilters)) return
        else enableFilter(sortFilters,field,isAscending)
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

