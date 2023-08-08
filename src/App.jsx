import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import * as k from './components/MainComponents'
import './App.css'

function App(props) {
  return (
    <BrowserRouter>
    <k.Template>
      <Header/>
      <Routes/>
      <Footer/>
    </k.Template>
    </BrowserRouter>
  )
}

const mapStateProps = (state) =>{
  return{
    user:state.user
}
}
const mapDispatchToProps = (dispatch)=>{
  return {
    
  }
}
export default connect(mapStateProps, mapDispatchToProps )(App)
