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
        // console.log(user.toJSON());
        user.getIdToken(true).then((idToken) => {
          // This is where to call the API

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken }),
          };

          fetch(
            `${process.env.REACT_APP_BACKEND_URL}/verify-token`,
            requestOptions
          )
            .then((response) => response.json())
            .then((data) => {
              // Do stuff

              // console.log(data);

              // props.history.push(`/customToken=${data.customToken}`);

              window.location =
                window.location.origin + `/customToken=${data.customToken}`;
            })
            .catch((error) => console.error(error));

          // console.log(idToken);
        });
      }
    });
  }, [props.history]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="*" component={Loading} />
    </Switch>
  );
}

export default withRouter(App);
