# whatsReact
react javascript 

##setup workspace steps
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

