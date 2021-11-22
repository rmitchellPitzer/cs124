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
        <SectionBar isToDo = {props.isToDo}  menuIsActive = {props.menuIsActive} sectionTitle = {props.sectionTitle} className={props.className}/>
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
    
    return {
        tasks: TaskDataController.completed(),
        menuIsActive: AppDataController.menuIsActive(),
        showContainer: AppDataController.showCompleted(),
        isToDo: false,
        showSortMenu: state.showSortMenu
    }
}

export default connect(mapStateToProps)(SectionContainer)