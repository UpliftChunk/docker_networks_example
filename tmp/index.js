const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`http://${process.env.SECOND_CONTAINER}:${process.env.ORIGIN_PORT}/`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Some Error");
    }
});

const PORT = process.env.LOCAL_PORT || 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
