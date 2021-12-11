/**
 *
 * @param props {
 *     command: Function,
 *     name:string;
 * }
 */

export default function SettingsCommand({command,name}) {
    return (
        <button
            className="list-settings-command"
            onClick={() => command()}
        >
            {name}
        </button>
    )
}