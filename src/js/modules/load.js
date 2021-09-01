import postScores from './POST-scores';
import refresh from './refresh';

const load = () => {
  const recentContainer = document.getElementById('recent-scores');
  const addContainer = document.getElementById('add-scores');
  const recentHtml = `<div class="title-container">
    <h2 class="recent-title">Recent Scores</h2>
    <button class="refresh-button">Refresh</button>
  </div>
  <ul class="list">
    <li id="1"><p>Name : 20</p></li>
    <li id="2"><p>Name : 200</p></li>
    <li id="3"><p>Name : 10</p></li>
    <li id="4"><p>Name : 100</p></li>
    <li id="5"><p>Name : 50</p></li>
    <li id="6"><p>Name : 30</p></li>
  </ul>`;
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
  const allLi = document.querySelectorAll('li');
  allLi.forEach((element) => {
    if ((element.id % 2) !== 0) {
      element.style.backgroundColor = 'rgb(231, 231, 231)';
    }
  });
  const form = document.querySelector('.form')
  form.addEventListener('submit', (...e) => {
    postScores(...e)
  })
  const refreshButton = document.querySelector('.refresh-button')
  refreshButton.addEventListener('click', (...e) => {
    refresh(...e)
  })
};

export default load;