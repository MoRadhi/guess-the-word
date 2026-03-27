# Guess the Word

A React word-guessing game where players try to reveal a hidden word one letter at a time. Tracks correct and incorrect guesses, displays remaining attempts, and handles win/loss states with dynamic UI feedback.

🔗 **Live Demo:** https://moradhi.github.io/guess-the-word/

---
 
## Screenshots
 
<div align="center">
  <img width="400" alt="guess-the-word" src="https://github.com/user-attachments/assets/16607fdb-c2b7-4272-860b-ff6fab316303" />
</div>
 
---

## Features

- 🔤 **Letter-by-letter guessing** — click letters to guess; correct ones reveal their position in the word
- ❌ **Incorrect guess tracking** — wrong guesses are displayed and counted against remaining attempts
- 🏆 **Win / Loss detection** — game ends when the word is fully revealed or attempts run out
- 🔄 **Play Again** — reset and start a new round without refreshing the page
- ⚡ **React state management** — all game logic handled cleanly with `useState` and `useEffect`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| Styling | CSS |
| Deployment | GitHub Pages |

---

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)

### Installation

```bash
git clone https://github.com/MoRadhi/guess-the-word.git
cd guess-the-word
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Play

1. A hidden word is displayed as a row of blank spaces
2. Click any letter from the alphabet displayed on screen
3. Correct guesses reveal the letter in its position(s)
4. Incorrect guesses are tracked — you have a limited number before the game ends
5. Reveal the full word to win, or use up all attempts and lose
6. Click **Play Again** to start a new game

---

## Project Structure

```
src/
├── components/       # GameBoard, LetterInput, WordDisplay, GameStatus
├── App.jsx           # Root component, core game state
└── index.css         # Global styles
```

---

## Deployment

Deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run build
npm run deploy
```
