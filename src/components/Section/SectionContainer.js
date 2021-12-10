import { connect } from "react-redux"
import AppDataController from "../../modules/dataController/AppDataController.js"
import TaskDataController from "../../modules/dataController/TaskDataController.js"
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

function SectionContainer(props) {
    return (


    <div>
        <SectionBar isToDo = {props.isToDo} hasCompletedTask = {props.hasCompletedTasks} menuIsActive = {props.menuIsActive} sectionTitle = {props.sectionTitle} className={props.className}/>
        { props.showContainer && <TaskList tasks={props.tasks} />}
    </div>

    )
}

function mapStateToProps(state,ownProps) {
    const isToDo = ownProps.sectionTitle === "To Do"

    if (isToDo) return { 
        tasks: TaskDataController.todo(),
        showContainer: AppDataController.showToDo(),
        isToDo: true,
        showSortMenu: state.showSortMenu
    }

    const hasCompletedTask = TaskDataController.completed().length > 0
    return {
        tasks: TaskDataController.completed(),
        menuIsActive: AppDataController.menuIsActive(),
        showContainer: AppDataController.showCompleted(),
        hasCompletedTasks:hasCompletedTask,
        isToDo: false,
        showSortMenu: state.showSortMenu
    }
}

export default connect(mapStateToProps)(SectionContainer)