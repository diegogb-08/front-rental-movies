import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './containers/Home/Home';
import Register from './components/Register/Register';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import User from './containers/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/user" exact component={User}/>
        <Route path="/profile" exact component={ProfileScreen}/>
 

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
