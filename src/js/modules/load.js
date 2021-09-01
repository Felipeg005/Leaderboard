import postScores from './POST-scores';
import refresh from './refresh';

const load = () => {
  const recentContainer = document.getElementById('recent-scores');
  const addContainer = document.getElementById('add-scores');
  const recentHtml = `<div class="title-container">
    <h2 class="recent-title">Recent Scores</h2>
    <button class="refresh-button">Refresh</button>
  </div>
  <ul class="list"></ul>`;
  const addHtml = `<div class="title-container">
    <h2 class="add-title">Add Your Score</h2>
  </div>
  <form class="form">
    <input class="input-name" type="text" placeholder="Your Name">
    <input class="input-score" type="text" placeholder="Your Score">
    <button class="submit-button" type="submit">Submit</button>
  </form>`;
  recentContainer.innerHTML = recentHtml;
  addContainer.innerHTML = addHtml;
  const form = document.querySelector('.form');
  form.addEventListener('submit', (...e) => {
    postScores(...e);
  });
  const refreshButton = document.querySelector('.refresh-button');
  refreshButton.addEventListener('click', (...e) => {
    refresh(...e);
  });
};

export default load;