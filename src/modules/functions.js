// Import Necessary Elements
import { name, score } from './elements.js';
import getApi from './getApi.js';
import sendScores from './sendScore.js';

// Function For Submit Event Button
function submitScores(e) {
  e.preventDefault();
  const boardName = name.value;
  const boardScore = score.value;
  sendScores(boardName, boardScore);
}

export default submitScores;

// Function to Refresh Scores
export function refreshScores(e) {
  e.preventDefault();
  getApi();
}
