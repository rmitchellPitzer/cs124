import "../../css/bar.css"
import "../../css/todo.css"
import "../../css/completed.css"
import SectionButton from "./SectionButton"
import FilterButton from "./FilterButton"
import DropDownButton from "../Header/DropDownButton";
import ActionMenu from "../Action Commands/ActionMenu";

export default function SectionBar(props) {
    const classes = `bar ${props.className}`
    return (
        <div class={classes}>
            <SectionButton isToDo = { props.className === "todo-bar" }/>
            <h1 class="bar-title"> {props.sectionTitle} </h1>
             <FilterButton isToDo={props.isToDo}/>
            {!props.isToDo && <DropDownButton/>}
             { !props.isToDo && props.menuIsActive && <ActionMenu/> }
        </div>  
    )
}