import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import FormUser from "./components/FormUser";

class App extends Component {
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    // console.log(user);
    Axios.get(`https://api.github.com/users/${user}`).then((res) => {
      console.log(res);
    });
  };

  //https://api.github.com/users/faishalalbarkah
  render() {
    return (
      <div className="App">
        <header style={{ height: 150, backgroundColor: "red", marginTop: -40 }}>
          <p style={{ fontSize: 45, fontWeight: "bold" }}>Call Github</p>
        </header>
        <FormUser getUser={this.getUser} />
      </div>
    );
  }
}
export default App;
