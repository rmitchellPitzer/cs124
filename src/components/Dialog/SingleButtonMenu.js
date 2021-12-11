import DialogButton from "./DialogButton";

export default function SingleButtonMenu({text,classes,command}) {
    return (
        <div className="dialog-button-container">
            <DialogButton
                text={text}
                classes={classes}
                command={command}
            />
        </div>
    )
}