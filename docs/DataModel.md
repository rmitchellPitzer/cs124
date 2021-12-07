# Data Model

---
# Firebase Collection

## Top Level: UserCollection
```ts
interface UserCollection {
    userID: string
    email: string
    blockedUsers:string[]
    lists: ListCollection
    pendingRequests: shareRequest[]
    sharedList: listID[]
}

interface shareRequest {
    email:string
    listTitle:string
    listID:string
}

```

## ListCollection 
```ts
interface ListCollection {
    id:string
    tasks: TaskCollection
    title: string
    sortingFields: ISortData[]
}

interface ISortData {
    field: "name"|"time"|"priority"
    isAscending: boolean
}
```

## TaskCollection
```ts
interface TaskCollection {
    id:string
    isCompleted: boolean
    text:string
    creationDate: number
    priority: number
}
```











