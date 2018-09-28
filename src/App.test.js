import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mockdata = require('./mock-data.json');

global.fetch = require('jest-fetch-mock')


describe('Testing app', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    fetch.mockResponseOnce(JSON.stringify(mockdata));
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

});
