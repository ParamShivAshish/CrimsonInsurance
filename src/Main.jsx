import React, { useState } from 'react'
import { Route, Link, Switch} from 'react-router-dom'
import Clients from './components/Clients'
import DisAgreed from './components/DisAgreed'
import Home from './components/Home'
import Insights from './components/Insights'
import Interested from './components/Interested'
import Ldata from './components/Ldata'
import Leads from './components/Leads'
import Profile from './components/Profile'
import Nav from './Nav'

function Main() {
   
    const [active, setActive] = useState("")

   

    
    return (
        <div>
            <Nav active={window.location.pathname.slice(1)}/>
            <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leads" component={Leads} />
            <Route exact path="/disagreed" component={DisAgreed} />
            <Route exact path="/yourclients" component={Clients} />
            <Route exact path="/interested" component={Interested} />
            <Route exact path="/insights" component={Insights} />
             <Route exact path='/profile' component={Profile} />
             <Route path='/ldata' component={Ldata} />

          </Switch>
          </div>

        </div>
    )
}

export default Main
