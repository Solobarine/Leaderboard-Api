async function getApi() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GX34ss8TE5Jp1Jkswg9/scores';
  const recieve = await fetch(url);
  const data = await recieve .json();
  console.log(data);
  console.log(data.result);
}
getApi();