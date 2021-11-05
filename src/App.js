import "./css/global.css"
import "typeface-roboto"
import ActionButton from "./components/Action Commands/ActionButton";
import AppDataController from "./modules/dataController/AppDataController";
import Header from './components/Header';
import SectionContainer from "./components/Section/SectionContainer.js"
import ActionMenu from "./components/Action Commands/ActionMenu";
import { connect } from "react-redux";
import UndoButton from "./components/Undo/UndoButton";
import SortMenuContainer from "./components/SortMenu/SortMenuContainer";

function App({menuIsActive,showUndo,showSortMenu}) {
  return (
    <div class='container'>
      <Header/>
      <SectionContainer 
        className='todo-bar' 
        sectionTitle="To Do"
      />
        {
            !showSortMenu && <SectionContainer
                className='completed-bar'
                sectionTitle="Completed"
            />
        }

      { menuIsActive && <ActionMenu/> }
      <ActionButton/>
      { showUndo && <UndoButton/> }
    {showSortMenu && <SortMenuContainer/>}


    </div>
  )
}

function mapToState(state) {
  return {
    menuIsActive: AppDataController.menuIsActive(),
    showUndo: AppDataController.undoIsActive(),
      showSortMenu: AppDataController.showSortMenu()
  }
}
export default connect(mapToState)(App)