import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Metronome from './Metronome';

const express = require("express");

ReactDOM.render(
  <Metronome />, document.getElementById('root')
);

App.use(express.static(__dirname + "/docs"))