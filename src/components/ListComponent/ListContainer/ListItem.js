import ListController from "../../../modules/listController";


/**
 *
 * @param props {
 *     list
 *
 *     ...;
 * }
 */
export default function ListItem({list}) {

    return (
       <button
           onClick={() => navToList(list)}
           className="list-item"
       >
           {list.title}
       </button>
    )
}

function navToList(list) {
    ListController.navToList(list)
}