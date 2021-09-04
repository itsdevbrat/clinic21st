import './App.css';
import Signin from './pages/signin/Signin'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./pages/global.css"


function App() {
  return (
    <Router>
      <Route path="/" exact component={Signin} />
      authenticated 
        ? 
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>    
  );
}

export default App;
