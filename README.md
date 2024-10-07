# 🦊 Fox in the Hole Puzzle

This app is a simulator for the **Fox in the Hole** logic puzzle. The goal is to catch a hidden fox that moves around the holes after each guess. Your task is to find the smallest sequence of moves that guarantees finding the fox. The app simulates all possible games, so even if there is one possible game where the fox could avoid being found, the game goes on!

## 🚀 Features

- **Interactive Game Interface**: Click on holes to guess where the fox is hiding.
- **Fox Movement**: If the fox is not found, it moves to an adjacent hole after each guess.
- **Game Simulation**: The app simulates all possible games based on your moves.
- **Win Condition**: You win when your sequence of moves guarantees finding the fox in every possible game.
- **Dynamic Game Info**: Track your guesses, foxes found, and the chances of success.
- **Rules Modal**: Displays the rules of the game in an easy-to-read format.

## 🎮 How to Play

- **Objective**: Find the hidden fox by selecting a hole on each move.
- **Rules**:
    - The game simulates a logic puzzle where a fox hides in one of the holes, and your goal is to find the fox by selecting a hole in each move.
    - If you don’t find the fox, it moves to an adjacent hole after each guess.
    - The app simulates all possible games where the fox could be hiding, so the game continues if there’s even one possible game where the fox could avoid being found with your sequence of moves.
    - You win if your sequence guarantees finding the fox in every possible game.
- **Challenge**: Try to find the shortest sequence of moves that guarantees finding the fox!

## 🛠️ Installation and Setup

### Prerequisites
- **Node.js** (v16.x or later)
- **npm** (v7.x or later)

### Step-by-Step Guide

1. Clone the repository:
    ```bash
    git clone https://github.com/Mat-Nishi/fox-in-the-hole.git
    cd fox-in-the-hole
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and go to:
    ```
    http://localhost:3000
    ```

## 🌐 Access the App

You can access the deployed version of the Fox in the Hole Puzzle app at the following link:

- [Fox in the Hole Puzzle](https://mat-nishi.github.io/fox-in-the-hole/)

## 📚 Tech Stack

- **Frontend**: React, TypeScript, CSS Modules,
- **Build Tool**: Vite

## 📦 Project Structure

```bash
├── src
│   ├── assets          # Images and static assets
│   ├── components      # React components like Holes, Header, RulesScreen
│   ├── styles          # CSS Modules and general styles
│   └── App.tsx         # Main application component
├── README.md           # This file
└── package.json        # App dependencies and scripts
```
---

### Enjoy the challenge of outsmarting the fox! 🦊
