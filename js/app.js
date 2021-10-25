/**
 * UX Improvements
 * Create a form rather than 2 single inputs (#)
 * Make the field auto focused (#)
 */

/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

/**
 * Pseudo Code
 * SET random number to guess
 * SET number of tries allowed to reach the correct number
 * READ guessed number from user
 IF guessed number == generated guess number
    PRINT "Correct"
    CHANGE button value
    OR make it disabled
 ELSE IF guessed number != generated guess number && number of available tries !== 0
    PRINT "Incorrect, you have x tries"
    numberOfTries--
 ELSE
    PRINT "Game over, please try again later"
    DISABLE guess field
 */

/**
 * Read UIs
 * Min and max numbers to max between them
 * An input for submitting guessed number
 * A submit button to check guessing status
 */

/**
 * Game values
 * READ min & max numbers
 * GENERATE a random number to guess
 * SHOW the number of guesses left
 */
let min = 1
let max = 10
let winningNum = 2
let guessesLeft = 3

// UI elements
const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessForm = document.querySelector('#guess-form')
const guessInput = document.querySelector('#guess-input')
const guessBtn = document.querySelector('#guess-btn')
const message = document.querySelector('.message')

// Load event listeners
loadEventListeners()
function loadEventListeners() {
	guessInput.addEventListener('keyup', validateGuessInput)
	guessForm.addEventListener('submit', guessGameResults)
}

// Assign UI with min & max
minNum.textContent = min
maxNum.textContent = max

// Validate guess input
function validateGuessInput() {
	const guess = parseInt(guessInput.value)

	if (guessInput.value.split('').length > 0) {
		if (isNaN(guess)) {
			setMessage('Please enter a number not a text', 'red')
		} else if (guess < min || guess > max) {
			setMessage(`Please enter a number between ${min} and ${max}`, 'red')
		} else {
			setTimeout(() => (message.style.display = 'none'), 500)
		}
	} else {
		// Hide the message when the input back to empty
		setTimeout(() => (message.style.display = 'none'), 500)
	}
}

function guessGameResults(e) {
	e.preventDefault()

	const guess = parseInt(guessInput.value)
	/**
	 * Win & loose case
	 */

	if (guess === winningNum) {
		guessInput.disabled = true
		guessBtn.disabled = true
		setMessage(`You won! Your guess of ${guess} was correct.`, 'green')
	} else {
		guessesLeft -= 1
		setMessage(`Your guess is wrong! You've ${guessesLeft} guesses left.`, 'red')
	}
}

// Print success/fail message
function setMessage(msg, color) {
	message.textContent = msg
	message.style.color = color
	message.style.display = 'block'
}
