import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
