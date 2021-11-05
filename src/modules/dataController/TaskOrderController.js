import db from "../db/index"
import {COLLECTION_NAME,DEFAULT_DOC_ID} from "./constants"
const collectionRef = db.collection(COLLECTION_NAME)



async function getSortFilters() {
    const data = await getDoc().get()
    return data ? data.sortFilter : null
}

function getDoc() {
    return collectionRef.doc(DEFAULT_DOC_ID)
}



export default class TaskOrderController {

    static sortBy(field,isAscending) {

    }

    static async addSortFilter(field,isAscending) {
        const sortFilters = await getSortFilters()
        if (!sortFilters) return
        if (isAlreadyEnabled(field,sortFilters)) return
        enableFilter(sortFilters,field,isAscending)
    }

    static async removeSortFilter(field) {

    }


}


    function isAlreadyEnabled(field,sortFilters) {
        return !!sortFilters.find(filter => filter.field == field)
    }

    async function enableFilter(sortFilters,field,isAscending) {
        const doc = getDoc()
        sortFilters.push({field,isAscending})
        await doc.update({
            sortingFields:sortFilters
        })
    }