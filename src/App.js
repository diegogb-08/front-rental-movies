import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './containers/Home/Home';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
 

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
