


/* 


props: {
    text: string;
    command: Function 
}
*/

function ActionMenuItem(props) {

    return (
        <button onClick={props.command} class="action-item">
            <i class="fas fa-plus"></i>
            <div class="action-text">
                <p> {props.text} </p>
            </div>
        </button>
    )
}