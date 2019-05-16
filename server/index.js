const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};
app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.status(200).send('hello word');
});

app.listen(port, () => {
    console.log('app listen on port' + port);
})