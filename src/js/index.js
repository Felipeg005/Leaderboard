import _ from 'lodash';// eslint-disable-line
import '../style.css';
import load from './modules/load';
import getScores from './modules/GET-scores';



window.addEventListener('DOMContentLoaded', () => {
  load();
  getScores();
});