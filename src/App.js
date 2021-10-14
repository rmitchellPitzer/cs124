import "./css/global.css"
import "typeface-roboto"
import TaskDataController from './modules/dataController/TaskDataController.js';
import Header from './components/Header';
import SectionContainer from "./components/Section/SectionContainer.js"

function App() {

  TaskDataController.createTask()


  return (
    <div class='container'>
      <Header/>
      <SectionContainer 
        tasks = {TaskDataController.todo()} 
        showContainer={true} 
        className='todo-bar' 
        sectionTitle="To Do"
      />
    </div>
  );
}

export default App;
