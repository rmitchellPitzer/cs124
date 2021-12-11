import User from "./User";
import {connect} from "react-redux";

 function UsersContainer({activeList}) {
    return (
        <div>
            {activeList.usersSharedWith.map(user => <User email={user}/> )}
        </div>
    )
}

function mapToState({lists}) {
     const {activeList} = lists
     return {activeList}
}

export default connect(mapToState)(UsersContainer)