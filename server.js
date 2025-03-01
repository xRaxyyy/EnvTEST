require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/config', (req, res) => {
    res.json({
        apiKey: process.env.API_KEY,
        spreadsheetId: process.env.SPREADSHEET_ID
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
