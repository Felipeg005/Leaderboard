const myGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fOiEcJqrUPnT8bykVBXu/scores/';

const getScores = () => {
fetch(myGameUrl)
.then(response => response.json())
.then((json) => {
  return new Promise(resolve => {
    resolve(json);
  })
});
};

export default getScores;