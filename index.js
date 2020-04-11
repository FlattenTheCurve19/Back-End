const server = require('./api/server');
const PORT = process.env.PORT || 5000;



server.get('/', (req, res) => {
    res.status(200).send('<h1>flatten the curve API</h1>')
})

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})