path = require('path');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.min.js',
    publicPath: 'dist/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
        loaders: [
          'url-loader',
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader?presets[]=es2015',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/foundation-sites')
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.min.css',
  }),
  new CopyPlugin({
    patterns: [
      { from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img') }
    ]
  }),
  new HandlebarsPlugin({
    // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
    entry: path.join(process.cwd(), "*.hbs"),
    // output path and filename(s). This should lie within the webpacks output-folder
    // if ommited, the input filepath stripped of its extension will be used
    output: path.join(process.cwd(), "dist", "[name].html"),
    // you can als add a [path] variable, which will emit the files with their relative path, like
    // output: path.join(process.cwd(), "build", [path], "[name].html"),

    // data passed to main hbs template: `main-template(data)`
    data: require("./src/data/data.json"),
    // or add it as filepath to rebuild data on change using webpack-dev-server
    // data: path.join(__dirname, "app/data/project.json"),

    // globbed path to partials, where folder/filename is unique
    partials: [
      path.join(process.cwd(), "src", "**", "*.hbs")
    ],

    // register custom helpers. May be either a function or a glob-pattern
    helpers: {
      nameOfHbsHelper: Function.prototype,
      projectHelpers: path.join(process.cwd(), "src", "helpers", "*.helper.js")
    },

    // hooks
    // getTargetFilepath: function (filepath, outputTemplate) {},
    // getPartialId: function (filePath) {}
    onBeforeSetup: function (Handlebars) { },
    onBeforeAddPartials: function (Handlebars, partialsMap) { },
    onBeforeCompile: function (Handlebars, templateContent) { },
    onBeforeRender: function (Handlebars, data, filename) { },
    onBeforeSave: function (Handlebars, resultHtml, filename) { },
    onDone: function (Handlebars, filename) { }
  })
  ]
}