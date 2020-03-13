import React, { Component } from "react";
import "./styles/App.css";

import UserList from "./UserList";
import Header from "./Header";

import fetchApiData from "../services/fetchJSONPlaceholder";

import retrievingList from "../helpers/isRetrievingList";
import retrievingEmptyList from "../helpers/isRetrievingEmptyList";
import receivingError from "../helpers/isReceivingError";

class App extends Component {
  state = {
    name: "Malcolm",
    usersList: [],
    status: "initial"
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const results = await fetchApiData();
      this.setState({ usersList: results, status: "done" });
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  render() {
    const { status, usersList } = this.state;
    return (
      <div className="app">
        <header className="header">
          <Header name={this.state.name} />
        </header>
        {retrievingList(status)}
        {retrievingEmptyList(status, usersList)}
        {receivingError(status)}
        <UserList retrievedUsers={this.state.usersList} />
      </div>
    );
  }
}

export default App;
