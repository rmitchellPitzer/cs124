import PriorityItem from "./PriorityItem";
import PriorityMenuBar from "./PriorityMenuBar"
import "../../../css/priority.css"

const priorityData = [
    {priorityText:"No Priority",priority:-1},
    {priorityText: "Low Priority", priority:2},
    {priorityText: "Medium Priority", priority:1},
    {priorityText: "High Priority", priority:0}
]
export default function PriorityMenuContainer(props) {

    return (
        <div className="priority-menu-container">
            <PriorityMenuBar/>
            <div className="priority-item-container">
                {
                    priorityData.map((data,index)=> {
                        return <PriorityItem key ={index} {...data}/>
                    })
                }
            </div>
        </div>
    )
}