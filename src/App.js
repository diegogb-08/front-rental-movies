import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './containers/Home/Home';
import Register from './components/Register/Register';
import User from './containers/User/User';
import Rental from './containers/Rental/Rental';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/user" exact component={User}/>
        <Route path="/rental" exact component={Rental}/>
 

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
