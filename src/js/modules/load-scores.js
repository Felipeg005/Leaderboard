import getScores from './GET-scores';

const loadScores = async () => {
  const ulList = document.querySelector('.list');
  const scoresObject = await getScores();
  const scoresArray = scoresObject.result;
  let count = 1;
  scoresArray.forEach((element) => {
    ulList.innerHTML += `<li id="${count}"><p>${element.user} : ${element.score}</p></li>`;
    count += 1;
  });
  const allLi = document.querySelectorAll('li');
  allLi.forEach((element) => {
    if ((element.id % 2) !== 0) {
      element.style.backgroundColor = 'rgb(192 252 255 / 37%)';
      element.style.color = 'white';
    }
  });
};

export default loadScores;