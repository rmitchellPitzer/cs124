import sortingAlgorithm from "../src/modules/sorting/sortingAlgorithm"
function mapID(array) {
    return array.map(d => d._id)
}


describe("Single Sort",() => {
    const sortDataList = [{field:"time",isAscending: true}]
    const tasks = [
        {_id:1,text:"Z", creationDate:0, priority:0},
        {_id:2,text:"V", creationDate:5, priority:3},
        {_id:3,text:"A", creationDate:2, priority:2}
    ]

    it("can sort this input by text in Ascending order",() => {
        const result = sortingAlgorithm([{field:"name",isAscending: true}],tasks)
        expect(mapID(result)).toEqual([3,2,1])
    })

    it("can sort this input by text in Descending order",() => {
        const result = sortingAlgorithm([{field:'name',isAscending:false}],tasks)
        expect(mapID(result)).toEqual([1,2,3])
    })

    it("can sort this input by creationDate in Ascending order",() => {
        const result = sortingAlgorithm([{field:"time",isAscending:true}],tasks)
        expect(mapID(result)).toEqual([1,3,2])
    })

    it("can sort this input by creationDate in Descending order",() => {
        const result = sortingAlgorithm([{field:"time",isAscending:false}],tasks)
        expect(mapID(result)).toEqual([2,3,1])
    })

    it("can sort this input by priority in Ascending order",() => {
        const result = sortingAlgorithm([{field:"priority",isAscending:true}],tasks)
        expect(mapID(result)).toEqual([2,3,1])
    })

    it("can sort this input by priority in Descending order",() => {
        const result = sortingAlgorithm([{field:'priority',isAscending:false}],tasks)
        expect(mapID(result)).toEqual([1,3,2])
    })

})

describe("Multi Sort",() => {
    const tasks = [
        {_id:0,text:"Z", creationDate:0, priority:5},
        {_id:1,text:"Z", creationDate:1, priority:4},
        {_id:2,text:"V", creationDate:2, priority:3},
        {_id:3,text:"V", creationDate:3, priority:2},
        {_id:4,text:"A", creationDate:4, priority:1},
        {_id:5,text:"A", creationDate:5, priority:0}
    ]

    it("can sort by name -> priority ", () => {
        const sortDataList = [{field:"name",isAscending: true},{field:"priority",isAscending: false}]
        const result = sortingAlgorithm(sortDataList,tasks)
        expect(mapID(result)).toEqual([5,4,3,2,1,0])
    })

    it("can sort by name -> creationDate", () => {
        const sortDataList = [{field:"name",isAscending: true},{field:"time",isAscending: true}]
        const result = sortingAlgorithm(sortDataList,tasks)
        expect(mapID(result)).toEqual([4,5,2,3,0,1])
    })

    it("can sort by creationDate -> priority",() => {
        const sortDataList = [{field:"time",isAscending: true},{field:"priority",isAscending: false}]
        const result = sortingAlgorithm(sortDataList,tasks)
        expect(mapID(result)).toEqual([0,1,2,3,4,5])
    })
})