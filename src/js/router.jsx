import React from 'react'
import { Route, Switch,BrowserRouter as Router, browserHistory} from 'react-router-dom'
import HomeContainer from './container/home'
import LoginContainer from './container/login'


const Routes = () => (
    <div>
        
        <Switch>
            <Route exact path='/' component={ LoginContainer }/>
            <Route exact path='/home' component={ HomeContainer }/>                        
        </Switch>        
    </div>
)
export default Routes
