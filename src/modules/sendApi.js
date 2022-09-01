// Function to Send Data to API
async function sendApi() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Ribeye',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then((sentData) => sentData.json()).then((data) => data),

sendApi();
