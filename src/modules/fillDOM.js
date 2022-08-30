// Import Necessary Element
import leadArray from './array.js';
import {scoreBoard} from './elements.js';

// Function to Add to Score
const addUserScores = (i) => {
	scoreBoard.innerHTML += `<li class="leader-score">${leadArray[i].user} : ${leadArray[i].hiScore}</li>`
}

export default addUserScores;

// Function to Refresh Page
export const refreshPage = () => {
	for (let i = 0; i < leadArray.length; i++) {
		scoreBoard.innerHTML += `<li class="leader-score">${leadArray[i].user} : ${leadArray[i].hiScore}</li>`
	}
}
