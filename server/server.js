// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());


// Read budget from JSON file
function getBudgetFromFile() {
    const data = fs.readFileSync('budget.json', 'utf8');
    return JSON.parse(data);
}

app.get('/budget', (req, res) => {
    const budget = getBudgetFromFile();
    res.json(budget);
});

app.get('/', express.static('public'));
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});