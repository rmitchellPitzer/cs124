






function ListItem(props) {

    return (
       <button
           onClick={() => navToList(props.listID)}
           className="list-item"
       >
           {props.title}
       </button>
    )
}

function navToList(listID) {

}