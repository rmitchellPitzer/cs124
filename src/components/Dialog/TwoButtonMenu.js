/**
 *
 * @props {
 *     leftText:string;
 *     leftCommand:Function
 *     leftClasses:string;
 *
 *     rightText:string;
 *     rightCommand:Function
 *     rightClasses:string;
 * }
 */
import DialogButton from "./DialogButton";

export default function TwoButtonMenu(props) {

    return (
        <div className="dialog-two-button-container">
            <DialogButton
                text={props.leftText}
                classes={props.leftClasses}
                command={props.leftCommand}
            />
            <DialogButton
                text={props.rightText}
                classes={props.rightClasses}
                command={props.rightCommand}
            />
        </div>
    )
}