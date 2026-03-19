const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});
app.post('/data', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
});
app.put('/data/:id', (req, res) => {
    res.json({ message: `Updated item ${req.params.id}`, data: req.body });
});
app.delete('/data/:id', (req, res) => {
    res.json({ message: `Deleted item ${req.params.id}` });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});