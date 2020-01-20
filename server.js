const express = require('express');
const server = express();
server.use(express.json());

const PORT = process.env.PORT || 7000;

//GET ENDPOINT
server.get('/', (req, res) => {
    console.log('Rendering Welcome Message')
    res.send('Welcome to the Icebreaker API')
});



server.listen(PORT, () => console.log(`running on port ${PORT}`));
