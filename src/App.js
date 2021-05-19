import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Loading from "./components/Loading";
import { auth } from "./config/firebase";

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // props.history.push("/loading");
        console.log(user.toJSON());
        user.getIdToken(true).then((token) => {
          // This is where to call the API
          console.log(token);
        });
      }
    });
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/loading" component={Loading} />
    </Switch>
  );
}

export default withRouter(App);
