const myGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fOiEcJqrUPnT8bykVBXu/scores/';

const getScores = () => {
return fetch(myGameUrl)
.then((response) => response.json())
.then((json) => json)
.catch(err => err)
};

export default getScores;