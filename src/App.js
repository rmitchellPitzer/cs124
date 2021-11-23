import "./css/global.css"
import "typeface-roboto"
import ActionButton from "./components/Action Commands/ActionButton";
import AppDataController from "./modules/dataController/AppDataController";
import Header from './components/Header/Header';
import SectionContainer from "./components/Section/SectionContainer.js"
import { connect } from "react-redux";
import UndoButton from "./components/Undo/UndoButton";
import SortMenuContainer from "./components/SortMenu/SortMenuContainer";
import PriorityMenu from "./components/Priority/PriorityMenu/PriorityMenuContainer"
import TaskMenu from "./components/TaskMenu/TaskMenu";

function App({showTaskMenu,showUndo,showSortMenu,showPriorityMenu}) {
  return (
    <div class='container'>
      <Header/>
      <SectionContainer 
        className='todo-bar' 
        sectionTitle="To Do"
      />
        {
            !showSortMenu && !showPriorityMenu && <SectionContainer
                className='completed-bar'
                sectionTitle="Completed"
            />
        }


            <ActionButton/>
      { showUndo && <UndoButton/> }
    {showSortMenu && <SortMenuContainer/>}
    {showPriorityMenu && <PriorityMenu/>}
    {showTaskMenu && <TaskMenu/>}


    </div>
  )
}

function mapToState(state) {
  return {
    menuIsActive: AppDataController.menuIsActive(),
    showUndo: AppDataController.undoIsActive(),
    showSortMenu: AppDataController.showSortMenu(),
    showPriorityMenu: state.showPriorityMenu,
    showTaskMenu: state.showTaskMenu
  }
}
export default connect(mapToState)(App)