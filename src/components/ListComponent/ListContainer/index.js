import ListBanner from "./ListBanner";
import ListItems from "./ListItems"

/**
 *
 * @param props: {
 *     heading:string;
 *     listItems: listItem[];
 *     showList: boolean;
 * }
 */
export default function ListContainer({heading,listItems,showList}) {
    return (
        <div className="list-container">
            <ListBanner
                heading={heading}
                showList={showList}
            />
            <ListItems
                listItems={listItems}
                showList={showList}
            />
        </div>
    )
}