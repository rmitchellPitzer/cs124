/**
 *
 *
 * @param props {
 *     showList: boolean;
 *     listItems: listItem[];
 *     heading:string;
 * }
 *
 * interface listItem {
 *     listID: string;
 *     title:string;
 * }
 */
import ListItem from "./ListItem";
import {YOUR_LISTS} from "../index";
import NewListButton from "./NewListButton";

export default function ListItems({heading,showList,listItems}) {


    return (
        <div className={showList ? "list-item-container" : "hide-list"}>
            {
                heading === YOUR_LISTS &&  <NewListButton/>
            }
            {
                listItems.map(list => <ListItem list={list}/>)
            }
        </div>
    )
}