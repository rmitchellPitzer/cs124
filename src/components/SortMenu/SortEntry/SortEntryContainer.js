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

export default function SortEntryContainer(props) {
    console.log(props)
    return (
        <div className="entry-container">
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