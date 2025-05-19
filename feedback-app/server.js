const express = require("express");
const app = express();
const listener = app.listen(3000, () => { console.log('Your app is listening on port 3000') });

const fs = require('fs');
const path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/feedbacks', (req, res) => {
    const newFeedback = req.body;

    fs.readFile('feedbacks.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }

        let feedbacks = [];
        try {
            feedbacks = JSON.parse(data);
        } catch (parseErr) {
            return res.status(500).json({ message: 'Error parsing JSON' });
        }

        feedbacks.push(newFeedback);

        fs.writeFile('feedbacks.json', JSON.stringify(feedbacks, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error writing file' });
            }
            res.status(201).json({ message: 'Saved', data: newFeedback });
        });
    });
});

app.get('/feedbacks', (req, res) => {
    fs.readFile('feedbacks.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Could not read feedbacks file.' });
        }
        let feedbacks = [];
        try {
            feedbacks = JSON.parse(data);
        } catch (parseErr) {
            return res.status(500).json({ message: 'Invalid JSON format in feedbacks file.' });
        }
        res.json(feedbacks);
    })
})

