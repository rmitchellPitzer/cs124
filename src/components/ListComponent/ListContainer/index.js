import ListBanner from "./ListBanner";
import ListItems from "./ListItems"

/**
 *
 * @param props: {
 *     heading:string;
 *     listItems: listItem[];
 *     showList: boolean;
 *     classes:string;
 * }
 */
export default function ListContainer({classes,heading,listItems,showList}) {
    return (
        <div className={"list-container"}>
            <ListBanner
                heading={heading}
                classes={classes}
                showList={showList}
            />
            <ListItems
                heading={heading}
                listItems={listItems}
                showList={showList}
            />
        </div>
    )
}