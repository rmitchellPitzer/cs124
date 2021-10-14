import "../../css/bar.css"
import "../../css/todo.css"
import "../../css/completed.css"
import SectionButton from "./SectionButton"

export default function SectionBar(props) {
    const classes = `bar ${props.className}`
    return (
        <div class={classes}>
        <SectionButton/>
        <h1 class="bar-title"> {props.sectionTitle} </h1>
    </div>  
    )
}