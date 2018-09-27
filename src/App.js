import React, { Component } from 'react';
import './App.css';
import PartnerCard from './partner-card';
import LoadingIndicator from './loading-indicator';

class App extends Component {
  constructor() {
    super();
    this.location = 'ny';
    this.state = {
      couples: [],
      isLoading: true
    }
    this.getCouples('ny');
  }

  getCouples() {
    let url = `https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?location=${this.location}`;
    fetch(url)
      .then(response => response.json())
      .then(json => this.matchUsers(json.users));
  }

  matchUsers(users) {
    let posibilitiesArray = this.getPosibilitiesArray(users.length);
    let result = [];
    const actualElement = Object.assign({}, users[0]);

    const couples = this.chainGraphMatch(result, users, actualElement, posibilitiesArray);
    this.setState({
      couples,
      isLoading: false
    });
  }

  getPosibilitiesArray(length) {
    let numbersArray = Array.apply(null, {length: length}).map(Function.call, Number);
    numbersArray.shift();
    return numbersArray;
  }

  chainGraphMatch(result, originalArray, actualElement, posibilitiesArray) {
    if(posibilitiesArray.length > 0) {
      const destinationUserPosition = posibilitiesArray.splice(this.getRandom(0,posibilitiesArray.length -1), 1);
      const match = Object.assign({}, originalArray[destinationUserPosition]);
      const elementToPush = Object.assign({}, actualElement);
      elementToPush.match = match;
      result.push(elementToPush);
      return this.chainGraphMatch(result, originalArray, match, posibilitiesArray);
    } else {
      const firstElement = Object.assign({}, originalArray[0])
      actualElement.match = firstElement;
      result.push(actualElement);
      return result;
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getCouplesHTML(couples) {
    return couples.map((couple, index) => {
      return <PartnerCard key={couple.name.last.concat(index.toString())} employee={couple} />;
    });
  }

  locationChanged(event) {
    this.setState({
      isLoading: true
    });
    this.location = event.target.value;
    this.getCouples();
  }

  render() {
    let mainContent;

    if(this.state.isLoading) {
      mainContent = <div className="loading-indicator-container"><LoadingIndicator /></div>
    } else {
      mainContent = <div className="matches-container">{this.getCouplesHTML(this.state.couples)}</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CAFFE geNEROus</h1>
        </header>
        <div className="main-content-container">
          {mainContent}
        </div>
        <div className="toolbar">
          <div className="option-container">
            <input
              type="radio"
              id="ny-location"
              name="location"
              value="ny"
              onChange={(event) => this.locationChanged(event)}
              checked={this.location === 'ny'}/>
            <label for="ny-location">New York</label>
          </div>
          <div className="option-container">
            <input type="radio"
              id="dub-location"
              name="location"
              value="dub"
              onChange={(event) => this.locationChanged(event)}
              checked={this.location === 'dub'}/>
            <label for="dub-location">Dublin</label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
