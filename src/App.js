import "./css/global.css"
import "typeface-roboto"
import Main from "./components/Main/index"
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import SignInScreen from "./components/SignInScreen";

function App({isSignedIn}) {
  return (
      <div className='container'>
        <Header/>
        { isSignedIn && <Main/> }
        { !isSignedIn && <SignInScreen/> }
      </div>
  )
}

function mapToState(state) {
  return {
      isSignedIn:state.isSingedIn
  }
}

export default connect(mapToState)(App)