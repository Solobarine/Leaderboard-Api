async function sendScores(inputName, tally) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GX34ss8TE5Jp1Jkswg9/scores';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: inputName,
      score: tally,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((sentData) => sentData.json()).then((data) => data);
}

// Export Function
export default sendScores;
