import TaskList from "../Tasks/TaskList.js"
import SectionBar from "./SectionBar.js"

/*
@props: {
    className: "todo-bar| completed-bar";
    sectionTitle: string;
    tasks: TaskItem[]
    showContainer: boolean
}
*/
export default function SectionContainer(props) {
 
    return (
    <div>
        <SectionBar sectionTitle = {props.sectionTitle} className={props.className}/>
        { props.showContainer && <TaskList tasks={props.tasks} />}
    </div>
    )
}