// Import Elements
import { scoreBoard } from './elements.js';

// Function to Get data from API
async function getApi() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GX34ss8TE5Jp1Jkswg9/scores';
  const recieve = await fetch(url);
  const leadArray = await recieve.json();
  scoreBoard.innerHTML = '';
 for (let i = 0; i < leadArray.result.length; i += 1) {
    scoreBoard.innerHTML += `<li class="leader-score">${leadArray.result[i].user} : ${leadArray.result[i].score}</li>`;
  }
};

// Export Function
export default getApi;
