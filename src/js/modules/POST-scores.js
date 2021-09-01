const myGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fOiEcJqrUPnT8bykVBXu/scores/';

const postScores = (e) => {
  e.preventDefault();
  const inputName = document.querySelector('.input-name');
  const inputScore = document.querySelector('.input-score');
  fetch(myGameUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: `${inputName.value}`,
      score: `${inputScore.value}`
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error('Error:', error))
};

export default postScores;