
/*

props: {
    text:string;
    isCompleted:boolean
}
*/
export default function Task(props) {

    const classes = `task-item ${props.isCompleted ? 'completed' : ''}`
    return (
        <div class={classes}>
            <input alt='task completion status' class='checkbox' type="checkbox"/>
            <input class='task-text' type='text' alt='task text' value={props.text}/>
        </div>
    )

}