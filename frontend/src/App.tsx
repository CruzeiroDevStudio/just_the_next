import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Components/Layout'
import SignUp from './Components/Auth/SignUp'
import LogIn from './Components/Auth/LogIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/'>
          <Layout />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
