

export default function Menu(props) {
    return (
        <div className="dialog-menu">
            <div className="dialog-menu-container">
                {props.children}
            </div>
        </div>
    )
}