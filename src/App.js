import "./css/global.css"
import "typeface-roboto"
import TaskDataController from './modules/dataController/TaskDataController.js';
import AppDataController from "./modules/dataController/AppDataController";
import Header from './components/Header';
import SectionContainer from "./components/Section/SectionContainer.js"

function App() {

  TaskDataController.createTask()


  return (
    <div class='container'>
      <Header/>
      <SectionContainer 
        tasks = {TaskDataController.todo()} 
        showContainer={AppDataController.showToDo()} 
        className='todo-bar' 
        sectionTitle="To Do"
      />
    </div>
  );
}

export default App;
