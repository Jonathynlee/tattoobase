
import './App.css';
import Navigation from "./routing/Navigation"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    
    <div className="App">
      <Navigation/>
      <Router>
      <Switch>
        <Route path="/home">

        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
