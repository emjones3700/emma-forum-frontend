import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import { fetchCategories } from './actions/forum'
const Home = () => <div>this is home</div>
const Forum = () => <div>this is a Forum</div>
const Articles = () => <div>this is the Articles</div>
const Main = () => (
    <main>
        <BrowserRouter>
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/forum' component={Forum} />
            <Route exact path='/articles' component={Articles} />
        </Switch>
        </BrowserRouter>
        <fetchCategories/>
    </main>
)
export default Main;