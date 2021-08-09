import './App.css';
import ContactList from './components/ContactList';
import User from './components/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ContactList} />
          <Route exact path="/:id" render={({ match: { params: { id } } }) => 
            <User id={id} /> }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
