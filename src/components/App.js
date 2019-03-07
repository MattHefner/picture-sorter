import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";


class App extends React.Component {

  //making get request to root url, gets search based on params

onSearchSubmit(term) {
  axios.get('https://api.unsplash.com/search/photos', {
    params: {query: term},
    headers: {
      Authorization: 'Client-ID 77c3edb542e9c554a16098a8a6e3811c804ffd7ecef9c9015c09e3040a17aa92'
    }
  });
}

  render(){
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit= {this.onSearchSubmit}/>
    </div>
  );
  }
}

export default App;
