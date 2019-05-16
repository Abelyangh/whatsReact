# whatsReact
react javascript 

## setup workspace steps
- npm install --save express or webpack-dev-server
- npm install --save-dev webpack webpack-cli
- npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
  config .babelrc file 
  ```
  {"presets" : ["@babel/preset-env", "@babel/preset-react"]}
  ```
- config webpack.config.js 
  ```
  modules: {
      rules: {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader"
          },
      }
      }
  ```
- npm install --save react react-dom 
- init the index.js and index.html 
- npm install --save-dev html-webpack-plugin  and config the html plugin for app entry point
- config the index.html entry into express file
- npm install --save node-sass css-loader style-loader sass-loader
  config the css rule into rules array
  ```
  {
            test: /.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
  }
  ```
- add hot loader 
  npm install --save-dev webpack-dev-middleware webpack-hot-middleware -D
  npm install --save-dev react-hot-loader
  setup middleware
  ```
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
  ```
  add hmr into webpack.config
  
  ```
  entry: {
    index: [
      'webpack-hot-middleware/client?path/__webpack_hmr&timeout=20000',
      './src/index.js'
    ]
  }

  plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()]

  ```


