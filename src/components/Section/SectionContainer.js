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
            <SectionBar sectionTitle = {props.sectionTitle} className={props.className}/>
            { props.showContainer && <TaskList tasks={props.tasks} />}
        </div>
    )
}


function mapStateToProps(state,ownProps) {
    const isToDo = ownProps.sectionTitle === "To Do"

    if (isToDo) return { 
        tasks: TaskDataController.todo(),
        showContainer: AppDataController.showToDo()
    }
    
    return {
        tasks: TaskDataController.completed(),
        showContainer: AppDataController.showCompleted()
    }
}

export default connect(
    mapStateToProps,
)(SectionContainer)