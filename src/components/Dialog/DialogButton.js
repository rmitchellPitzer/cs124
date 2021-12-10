/**
 *
 * @param props {
 *     text:string;
 *     command: Function;
 *     classes: string;
 * }
 */

export default function DialogButton({text,command,classes}) {
    return (
        <button
            className={"dialog-button" + classes}
            onClick={() => command()}
        >
            {text}
        </button>
    )
}