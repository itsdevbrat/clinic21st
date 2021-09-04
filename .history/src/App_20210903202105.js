import './App.css';
import Signin from './pages/signin/Signin'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./pages/global.css"
import useLocalStorage from './customHooks/useLocalStorage'


function App() {

  const authenticated = ;

  return (
    <Router>
      <Route path="/" exact component={Signin} />
      {authenticated
        ? <Route path="/dashboard" exact component={Dashboard} />
        : <Redirect to="/" />}
    </Router>
  );
}

export default App;
