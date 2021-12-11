# Data Model

---
# Firebase Collection

## Top Level: UserCollection
```ts
interface UserCollection {
    id: string
    email: string
    pendingRequests: shareRequest[]
    sentRequestIDs: string[]
}

interface shareRequest {
    from:string
    to:string
    listTitle:string
    listID:string
    id:string
}

```

## Top Level: ListCollection 
```ts
interface ListCollection {
    id:string
    tasks: TaskCollection
    title: string
    owner:string
    usersSharedWith:string[]
    pendingUsers:string[]
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











