# Sorting Implementation


## Goal
The goal if this feature is to allow for **multi-key**
sorting of a given field.

## Parameters
We have available to us a variety of fields,
specifically text which is a string, priority which is a number,
and creation date which is a unix time number.

##Sequence Diagram


### Example 


### Case 1 No Overlap
```
_id: 1, name: AB, time: 10, priority: 0 
_id: 2, name: AC, time: 12, priority: 5
_id: 3, name: AE, time: 22, priority: 3 
```
Sorting Priority: name > time > priority
order: [1,2,3]
Sorting Priority: time > name > priority
order: [1,2,3]
Sorting Priority: priority > name > time 
order: [1,3,2]


### Case 2: Single Overlap
```
_id: 1, name: AB, time: 10, priority: 0 
_id: 2, name: AB, time: 12, priority: 5
_id: 3, name: AD, time: 22, priority: 3 
```

Sorting Priority: name > time > priority
order: [1,2,3]
Sorting Priority: time > name > priority
order: [1,2,3]
Sorting Priority: priority > name > time
order: [1,3,2]

### Case 3: Multi-Overlap
```
_id: 1, name: AB, time: 10, priority: 0 
_id: 2, name: AB, time: 12, priority: 5
_id: 3, name: AB, time: 5, priority: 3 
```
Sorting Priority: name > time > priority 
order: [3,1,2]

Sorting Priority: time > name > priority
order: [1,2,3]

Sorting Priority: priority > name > time
order: [1,3,2]

### Pseudo-Code
```
dataModel {
    sorting: [fields...]
}

sortData: {field: name | time | priority, direction: 0 | 1 }

sortFieldBy(field,direction) => 


sortingAlgorithm: sortData[]
    if isFirstField => normalSort
    else  sort((a-b) => if prevSortCriteria are equal then
           sort by this specific field)
    
   
    
```


### Sorting Data Model
``` 
sortData: { 
field:"name"|"time"|"priority", 
isAscending:Boolean
}
``` 

