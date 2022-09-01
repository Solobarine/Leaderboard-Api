// Import Functions
import './style.css';

import submitScores, { refreshScores } from './modules/functions.js';

// Import Elements
import { refBtn, subBtn } from './modules/elements.js';

// Create Eventb Listener For Submit Button
subBtn.addEventListener('click', submitScores);

// Event Listener for Refresh Button
refBtn.addEventListener('click', refreshScores);
