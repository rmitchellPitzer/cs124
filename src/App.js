import "./css/global.css"
import "typeface-roboto"
import DataController from './modules/dataController/index.js';
import Header from './components/Header';
import SectionContainer from "./components/Section/SectionContainer.js"

function App() {

  DataController.createTask()
  DataController.todo()

  return (
    <div class='container'>
      <Header/>
      <SectionContainer className='todo-bar' sectionTitle="To Do">
        
      </SectionContainer>
    </div>
  );
}

export default App;
