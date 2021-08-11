import React, {Component} from 'react'
import {BrowserRouter
    as Router, Route, Switch} from 'react-router-dom'
import './scss/style.scss'
import {Toaster} from "react-hot-toast";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const RecoveryPassword = React.lazy(() => import('./views/pages/recoveryPassword/recoveryPassword'))


class App extends Component {
  render() {
    return (
      <>
        <Toaster/>
        <Router basename={process.env.REACT_APP_BASEPATH}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />}/>
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />}/>
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />}/>
              <Route path="/dashboard" name="Home" render={(props) => <DefaultLayout {...props} />}/>
              <Route path="/recovery-password" name="Home" render={(props) => <RecoveryPassword {...props} />}/>
            </Switch>
          </React.Suspense>
        </Router>

      </>

    )
  }
}

export default App
