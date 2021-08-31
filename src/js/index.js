import _ from 'lodash';// eslint-disable-line
import '../style.css';
import load from './modules/load';
import leaderboard from './modules/request-leaderboard';

window.addEventListener('DOMContentLoaded', () => {
  load();
  leaderboard();
});