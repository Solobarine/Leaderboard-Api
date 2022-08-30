// Import Functions
import './style.css'
import leadArray from './modules/array.js';
import submitScores from './modules/functions.js';
import {refreshPage} from './modules/fillDOM.js';

// Import Elements
import {subBtn} from './modules/elements.js'

const store = JSON.parse(localStorage.getItem('leaderboard'));
if (store) {
	leadArray.push(...store);
} else {
	leadArray;
}
// Refresh Page
refreshPage();

// Create Eventb Listener For Submit Button
subBtn.addEventListener('click', submitScores);

