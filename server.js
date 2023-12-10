const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Received login information:');
    console.log('Email:', email);
    console.log('Password:', password);

    res.status(200).json({ success: true, message: 'Login information received.' });
});

// Handle requests to the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, this is your server.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
