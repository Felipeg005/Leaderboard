const leaderboardData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const leaderboard = () => {
  fetch(leaderboardData, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My Pokemon Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.error('Error:', error));// eslint-disable-line
};

export default leaderboard;