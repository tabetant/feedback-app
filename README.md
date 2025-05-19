# 📝 Feedback App

A simple full-stack web app that allows users to submit feedback messages and see all previously submitted feedback.

## 🔧 Features
- Submit a text-based feedback message
- See a list of all feedbacks
- Feedbacks are stored in a local JSON file (`feedbacks.json`)

## 💻 Technologies Used
- HTML, CSS, JavaScript
- Node.js with Express.js
- File-based persistence with the `fs` module

## 📂 Project Structure
feedback-app/
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── feedbacks.json
└── server.js


## 🚀 How to Run

1. Clone the repository
2. Run `npm install express`
3. Start the server:
   ```bash
   node server.js
4. Open index.html in your browser or use Live Server
5. Submit feedback and view responses instantly

Make sure feedbacks.json contains at least an empty array [] when starting
This is a beginner-friendly full-stack project
