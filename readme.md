# TypeRightr

![TypeRightr Logo](src/assets/keyboard-icon.svg)

A modern, interactive typing test application with multiplayer functionality built using React, Firebase, and Socket.IO.

## 🌟 Features

- **Test Your Typing Speed**: Measure your typing speed (WPM) and accuracy
- **Real-time Multiplayer Races**: Challenge friends or random opponents
- **User Accounts**: Create an account to track your progress
- **Performance Statistics**: View detailed stats and improvement over time
- **Responsive Design**: Works on desktop and tablet devices
- **Dark/Light Themes**: Choose your preferred visual style

## 🚀 Live Demo

Try out TypeRightr now at: [typerightr.onrender.com](https://typerightr.onrender.com)

## 💻 Technologies Used

- **Frontend**: React, Styled Components, Chart.js
- **Backend**: Node.js, Express, Socket.IO
- **Authentication & Database**: Firebase (Authentication, Firestore)
- **Hosting**: Render.com

## 📝 Usage

### Single Player Mode

1. Start typing right away - no login required
2. See your WPM (words per minute), accuracy, and character statistics
3. View a graph of your WPM over time during the test
4. Create an account to save your results

### Multiplayer Mode

1. Sign in to your account
2. Click the "Multiplayer" button
3. Wait for an opponent to join
4. Race against them in real time, seeing their progress as you type
5. View your results and see who won after the race

## 📊 Statistics

TypeRightr tracks and displays:
- Words Per Minute (WPM)
- Accuracy percentage
- Correct characters
- Incorrect characters
- Missed characters
- Extra characters

## 🔧 Installation & Setup

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/TypeRightr.git
cd TypeRightr

# Install dependencies
npm install

# Create .env file with your Firebase config
# See .env.example for required variables

# Start the development server
npm run dev

# In a separate terminal, start the WebSocket server
cd server
node server.cjs