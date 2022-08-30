// Import Necessary Elements
import leadArray from './array.js';
import {name, score} from './elements.js'
import addUserScores from './fillDOM.js';

// Add Score Function
export function addScore(x, y) {
	const obj = {user: x, hiScore: y};
	leadArray.push(obj);
	console.log(leadArray);
}
// Function For Submit Event Button
function submitScores(e) {
	e.preventDefault();
	const boardName = name.value;
	const boardScore = score.value;
	const index = leadArray.length;
	addScore(boardName, boardScore);
	addUserScores(index);
	localStorage.setItem('leaderboard', JSON.stringify(leadArray));
}

export default submitScores;
