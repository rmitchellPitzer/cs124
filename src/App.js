import "./css/global.css"
import "typeface-roboto"
import Main from "./components/Main/index"
import { connect } from "react-redux";

function App({isSignedIn}) {
  return
  (
    <div className='container'>
      <Header/>
      { isSignedIn && <Main/> }
      { !isSignedIn && <SignInScreen/> }
    </div>
  )
}

function mapToState(state) {
  return {
  }
}

export default connect(mapToState)(App)