import "../../css/dialog.css"
/**
 *
 * @props {
 *     placeholder:string;
 *     changeEvent:(event) => void
 * }
 */
export default function TextInput({placeholder,changeEvent}) {
    return (
        <div className="dialog-input-container">
            <input
                className="dialog-input"
                placeholder={placeholder}
                onChange={(e) =>changeEvent((e)) }
            />
        </div>
    )
}