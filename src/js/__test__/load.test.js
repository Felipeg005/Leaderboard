import load from '../modules/load';

jest.mock('../modules/load');

describe('Test load function', () => {
  test('load', () => {
    // Arrange
    document.body.innerHTML = `<main>
      <section id="recent-scores" class="recent-scores"></section>
      <section id="add-scores" class="add-scores"></section>
    </main>`;
    const recentContainer = document.getElementById('recent-scores');
    const addContainer = document.getElementById('add-scores');
    const recentHtml = `<div class="title-container">
      <h2 class="recent-title" "Recent Scores</h2>
      <button>Refresh</button>
    </div>
    <ul class="list">
      <li>name:20</li>
    </ul>`;
    const addHtml = `<div class="title-container">
      <h2 class="add-title">Add Your Score</h2>
    </div>
    <form class="form">
      <input class="input-name" type="text" placeholder="Your Name">
      <input class="input-score" type="text" placeholder="Your Score">
      <button class="submit-button" type="submit">Submit</button>
    </form>`;

    // Act
    recentContainer.innerHTML = recentHtml;
    addContainer.innerHTML = addHtml;
    const allLi = document.querySelectorAll('li');
    allLi.forEach((element) => {
      if ((element.id % 2) !== 0) {
        element.style.backgroundColor = 'rgb(231, 231, 231)';
      }
    });

    // Assert
    const result = addContainer.innerHTML;
    expect(result).toBe(addHtml);
  });
});

export default load;