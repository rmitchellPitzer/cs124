import EntryOrderButton from "./EntryOrderButton";
import SortCriteriaDropDown from "./SortCriteriaDropDown";
import IsAscendingButton from "./isAscendingButton";
import DeleteButton from "./DeleteButton";
import "../../../css/sort_entry.css"
/*
@props() {
field
isAscending
index

}
 */

function ariaLabel({field,index,isAscending}) {
    return `Sort by ${field} with index ${index} in ${isAscending ? "ascending" : "descending"} order`
}

export default function SortEntryContainer(props) {
    return (
        <div
            className="entry-container"
            aria-label={ariaLabel(props)}
        >
            <EntryOrderButton
                field={props.field}
                index={props.index}
            />
            <SortCriteriaDropDown
                field={props.field}
            />
            <IsAscendingButton
                isAscending={props.isAscending}
                field={props.field}
            />
            <DeleteButton field={props.field}/>
        </div>
    )
}