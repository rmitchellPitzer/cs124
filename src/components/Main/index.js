import "../../css/global.css"
import "typeface-roboto"
import { connect } from "react-redux";
import SectionContainer from "../Section/SectionContainer";
import UndoButton from "../Undo/UndoButton";
import SortMenuContainer from "../SortMenu/SortMenuContainer";
import TaskMenu from "../TaskMenu/TaskMenu";
import PriorityMenu from "../../components/Priority/PriorityMenu/PriorityMenuContainer"
import ActionButton from "../Action Commands/ActionButton";
import ActiveListBanner from "../ActiveListBanner";

function Main(
    {showTaskMenu,showUndo,showSortMenu,showPriorityMenu}
) {
    return (
    <div>
        <ActiveListBanner/>
        <SectionContainer
            className='todo-bar'
            sectionTitle="To Do"
        />
        {
            !showSortMenu && !showPriorityMenu &&
            <SectionContainer
                className='completed-bar'
                sectionTitle="Completed"
            />
        }
        <ActionButton/>
        { showUndo && <UndoButton/> }
        { showSortMenu && <SortMenuContainer/> }
        { showPriorityMenu && <PriorityMenu/> }
        { showTaskMenu && <TaskMenu/> }

    </div>
    )
}

function mapToState(state) {
    return {
        showUndo: state.tasks.showUndo,
        showSortMenu: state.sortMenu.showSortMenu,
        showPriorityMenu: state.priority.showPriorityMenu,
        showTaskMenu: state.taskMenu.showTaskMenu,
        showListSettings: state.listSettings.showListSettings
    }
}
export default connect(mapToState)(Main)