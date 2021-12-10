import "./css/global.css"
import "typeface-roboto"
import Main from "./components/Main/index"
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import SignInScreen from "./components/SignInScreen";
import ListComponent from "./components/ListComponent";
import NewListMenu from "./components/ListComponent/NewListMenu";

function App({isSignedIn,activeList,showNewListMenu}) {
  return (
      <div className='container'>
        <Header/>
        { (isSignedIn && activeList) && <Main/> }
        { (isSignedIn && !activeList) && <ListComponent/> }
        { !isSignedIn && <SignInScreen/> }
        { showNewListMenu && <NewListMenu/> }
      </div>
  )
}

function mapToState(state) {
  return {
      isSignedIn:state.auth.isSignedIn,
      activeList: state.lists.activeList,
      showNewListMenu: state.newListMenu.showNewListMenu
  }
}
export default connect(mapToState)(App)