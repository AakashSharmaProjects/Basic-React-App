import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Course from './component/Course';
import Login from './component/Login';
import Result from './component/Result';
import auth  from './auth/Auth';

function App() {
  
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
        <Route path="/course" render={data=>auth.getLogInStatus()?(
      <Course {...data}></Course>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
        <Route path="/result" render={data=>auth.getLogInStatus()?(
      <Result {...data}></Result>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
          
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
