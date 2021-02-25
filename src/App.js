import React from 'react';
import Login from './components/Login';
import Registrasi from './components/Registrasi';
import TodoList from './components/TodoList';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="todo-app">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/daftar" component={Registrasi}/>
        <Route path="/todolist" component={TodoList}/>    
      </Switch>
    </div>
  );
}

export default App;
