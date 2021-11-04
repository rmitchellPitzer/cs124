# Data Models


## Sorting Filters
```js
sortingFilters:ISortData[]
```

### ISortData 
```js
@ISortData: {
field:"name"|"time"|"priority",
isAscending:Boolean
}

```

## Task SubCollection

```js 
{
    _id:String (UUIDV4);
    isCompleted:Boolean;
    text:String;
    creationDate:Number (Unix);
    priority: Number;
}
```

##








