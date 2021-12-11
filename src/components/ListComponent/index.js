import ListContainer from "./ListContainer";
import {connect} from "react-redux";


export const YOUR_LISTS = "Your Lists"
export const SHARED_LISTS = "Shared Lists"
export const PENDING_LISTS = "Pending Shared Lists"

function ListComponent(props) {
    return (
        <div>
            <ListContainer
                heading={YOUR_LISTS}
                listItems={props.ownedLists}
                showList={props.showOwnedLists}
                classes="orange"
            />
            <ListContainer
                heading={SHARED_LISTS}
                listItems={props.sharedLists}
                showList={props.showSharedLists}
                classes="red"
            />
            <ListContainer
                heading={PENDING_LISTS}
                listItems={props.pendingLists}
                showList={props.showPendingLists}
                classes="grey"
            />
        </div>
    )
}


function mapToState({lists}) {
    const {
        ownedLists,
        showOwnedLists,
        sharedLists,
        showSharedLists,
        pendingLists,
        showPendingLists
    } = lists

    return {
        ownedLists,
        showOwnedLists,
        sharedLists,
        showSharedLists,
        pendingLists,
        showPendingLists
    }
}


export default connect(mapToState)(ListComponent)


