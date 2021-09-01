import getScores from './GET-scores';

const loadScores = async () => {
  
  // const ulList = document.querySelector('.list');
  const scoresObject = await getScores();
  console.log(scoresObject);
  // scoresObject.forEach((element) => {
  
  //   // ulList.innerHTML += `<li id="${scoresObject.length}"><p>${element.user} : ${element.score}</p></li>`
  // })
}

export default loadScores;