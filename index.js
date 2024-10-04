const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hallo, mijn naam is Milana Ismailov!');
});

app.listen(PORT, () => {
    console.log(`Server is running op http://localhost:${PORT}`);
});