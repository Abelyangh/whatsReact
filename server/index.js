const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const dist_dir = path.join(__dirname, '../dist');
const html_file = path.join(dist_dir, 'index.html');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

//webpack hmr 
const webpack = require('webpack');
const webpackConfig = require('./../webpack.config');
const compiler = webpack(webpackConfig);

app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(dist_dir));

app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.status(200).send(html_file);
});

app.listen(port, () => {
    console.log('app listen on port' + port);
})