import { Switch, Route } from "react-router-dom/cjs/react-router-dom"; 
import Home from './pages/Home'
import About from './pages/About'
 

export default () =>{
    return(
        <Switch>
                <Route exact patch=''>
                        <Home/>
                </Route>

                <Route exact patch='/sobre'>
                        <About/>
                </Route>
        </Switch>
    )
}