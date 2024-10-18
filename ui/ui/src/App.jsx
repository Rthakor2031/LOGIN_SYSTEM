import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Components/auth/SignUp';
import Login from './Components/auth/Login';
import Logout from './Components/auth/Logout';
import BlogForm from './Components/blog/BlogForm';
import BlogDetails from './Components/blog/BlogDetails';
import BlogList from './Components/blog/BlogList';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/blogs/new" component={BlogForm} />
        <Route path="/blogs/:id/edit" component={BlogForm} />
        <Route path="/blogs/:id" component={BlogDetails} />
        <Route path="/" component={BlogList} />
      </Switch>
    </Router>
  );
}

export default App;
