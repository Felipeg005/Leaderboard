const myGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fOiEcJqrUPnT8bykVBXu/scores/';

const postScores = (e) => {
  e.preventDefault();
  const inputName = document.querySelector('.input-name');
  const inputScore = document.querySelector('.input-score');
  return fetch(myGameUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: `${inputName.value}`,
      score: `${inputScore.value}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error('Error:', error));// eslint-disable-line
};

export default postScores;