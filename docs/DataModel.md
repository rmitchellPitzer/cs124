# Data Model

---
# Firebase Collection

## Top Level: UserCollection
```ts
interface UserCollection {
    id: string
    email: string
    pendingRequests: shareRequest[]
}

interface shareRequest {
    email:string
    listTitle:string
    listID:string
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











