const leaderboardData = 'http://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const leaderboard = () => {
fetch(leaderboardData, JSON.stringify({
  method: 'POST',
  body: JSON.stringify({
    name: 'My Pokemon Game'
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error('Error:', error))
)};

export default leaderboard;