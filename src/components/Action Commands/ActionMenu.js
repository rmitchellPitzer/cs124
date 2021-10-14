import ActionMenuItem from "./ActionMenuItem.js"
/*

props: {
    menuItems: MenuItem[]
}

*/


export default function ActionMenu(props) {

    return (
        <div class='action-container'>
            { props.menuItems.map(menuItem => {
                return <ActionMenuItem {...menuItem} />
            })}
        </div>
    )


}