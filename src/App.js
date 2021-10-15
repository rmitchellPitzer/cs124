import "./css/global.css"
import "typeface-roboto"
import ActionButton from "./components/Action Commands/ActionButton";
import AppDataController from "./modules/dataController/AppDataController";
import Header from './components/Header';
import SectionContainer from "./components/Section/SectionContainer.js"
import ActionMenu from "./components/Action Commands/ActionMenu";
import { connect } from "react-redux";

function App({menuIsActive}) {

  return (
    <div class='container'>
      <Header/>
      <SectionContainer 
        className='todo-bar' 
        sectionTitle="To Do"
      />
      <SectionContainer 
        className='completed-bar' 
        sectionTitle="Completed"
      />
      { menuIsActive && <ActionMenu/> }
      <ActionButton/>
    </div>
  );
}


function mapToState(state) {
  return {
    menuIsActive: AppDataController.menuIsActive()
  }
}

export default connect(mapToState)(App)