import { Switch, Route } from "react-router-dom/cjs/react-router-dom"; 
import RouteHandler from "./components/RouteHandler";
import Home from './pages/Home'
import About from './pages/About'
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdPage from "./pages/AdPage";
import AddAd from "./pages/AddAd";
import Ads from "./pages/Ads";

export default () =>{
    return(
        <Switch>
                <RouteHandler private={false} exact path='/'>
                        <Home/>
                </RouteHandler>

                <RouteHandler private={false} exact path='/sobre'>
                        <About/>
                </RouteHandler>
                <RouteHandler private={false} exact path='/signin'>
                        <SignIn/>
                </RouteHandler>
                <RouteHandler private={false} exact path='/signup'>
                        <SignUp/>
                </RouteHandler>
                <RouteHandler private={false} exact path='/ad/:id'>
                        <AdPage/>
                </RouteHandler>
                <RouteHandler private={true} exact path='/post-an-ad'>
                        <AddAd/>
                </RouteHandler>
                <RouteHandler private={false} exact path='/ads'>
                        <Ads/>
                </RouteHandler>
                <RouteHandler>
                        <NotFound/>
                 </RouteHandler>
        </Switch>
    )
}