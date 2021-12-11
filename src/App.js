import "./css/global.css"
import "typeface-roboto"
import Main from "./components/Main/index"
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import SignInScreen from "./components/SignInScreen";
import ListComponent from "./components/ListComponent";
import NewListMenu from "./components/ListComponent/NewListMenu";
import ListSettings from "./components/ListSettings";
import ShareRequest from "./components/ShareRequest";

function App({ showRequestMenu,showListSettings,isSignedIn,activeList,showNewListMenu}) {
  return (
      <div className='container'>
        <Header/>
        { (isSignedIn && activeList &&!showListSettings) && <Main/> }
        { (isSignedIn && !activeList) && <ListComponent/> }
        { !isSignedIn && <SignInScreen/> }
        { showNewListMenu && <NewListMenu/> }
        { showListSettings && <ListSettings/>}
          { showRequestMenu && <ShareRequest/> }
      </div>
  )
}

function mapToState(state) {
  return {
      isSignedIn:state.auth.isSignedIn,
      activeList: state.lists.activeList,
      showNewListMenu: state.newListMenu.showNewListMenu,
      showListSettings: state.listSettings.showListSettings,
      showRequestMenu: state.request.showRequestMenu
  }
}
export default connect(mapToState)(App)