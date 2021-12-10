import "../../css/dialog.css"



export default function Overlay(props) {
    return (
        <div>
            <div className="dialog-overlay"/>
            {props.children }
        </div>
    )
}