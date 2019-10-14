const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const publicPath = '/portfolio/';

  // Тут начинается описание зависимостей
  const pcss = {
    test: /\.(p|post|)css$/, // регулярное выражение для проверки пути (если совпадет, применит файлы обработки ниже)
    use: [
      isProductionBuild ? MiniCssExtractPlugin.loader : "vue-style-loader", // Из строки сгенирирует теги стайл и применит
      "css-loader", // Превратит в строку
      "postcss-loader" // Превращает в обычный css
    ]
  };

  const vue = {
    test: /\.vue$/,  
    loader: "vue-loader"
  };

  const js = {
    test: /\.js$/,
    loader: "babel-loader", 
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    }
  };

  const files = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    loader: "file-loader",
    options: {
      name: "[hash].[ext]"
    }
  };

  const svg = {
    test: /\.svg$/,
    use: [
      {
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
        }
      },
      "svg-transform-loader",
      {
        loader: "svgo-loader",
        options: {
          plugins: [
            { removeTitle: true },
            {
              removeAttrs: {
                attrs: "(fill|stroke)"
              }
            }
          ]
        }
      }
    ]
  };

  const pug = {
    test: /\.pug$/,
    oneOf: [
      {
        resourceQuery: /^\?vue/,
        use: ["pug-plain-loader"]
      },
      {
        use: ["pug-loader"]
      }
    ]
  };

  // Тут заканчивается


  const config = {
    entry: {     // Слежка за файлами js
      main: "./src/main.js",
      admin: "./src/admin/main.js"
    },
    output: {    // Указывает место куда отправляются файлы после обработки
      path: path.resolve(__dirname, "./dist"), // Методом path прописан абсолютный путь,который будет склеен с папкой dist
      filename: "[name].[hash].build.js", // name - имя файла; hash - строка, сгенерированная на основе содержимого файла
      publicPath: isProductionBuild ? publicPath : "",
      chunkFilename: "[chunkhash].js" // отслеживание зависимостей и общие выносит в отдельный файл
    },
    module: { // правила по которым стоит обрабатывать зависимости(указаны в самом начале)
      rules: [pcss, vue, js, files, svg, pug]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        images: path.resolve(__dirname, "src/images")
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    devServer: { // Сервер в браузере для разработки
      historyApiFallback: true, // авто прописка URL
      noInfo: false, // Надписи об успехе либо ошибки
      overlay: true // Оверлей при ошибке
    },
    performance: { // Подсказки вебпака
      hints: false
    },
    plugins: [ // Плагины
      new HtmlWebpackPlugin({
        template: "src/index.pug", // Указываем из какого файла собрать HTML с зависимостями
        chunks: ["main"] // Будет подключен js
      }),
      new HtmlWebpackPlugin({ // -/- для админки
        template: "src/admin/index.pug",
        filename: "admin/index.html",
        chunks: ["admin"]
      }),
      new SpriteLoaderPlugin({ plainSprite: true }), // Соберет спрайт
      new VueLoaderPlugin() // Это требует вью
    ],
    devtool: "#eval-source-map" // Отображет где была строчка в исходнике
  };

  if (isProductionBuild) { // Для продакшена
    config.devtool = "none"; // Убрать все сорсмапы
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        "process.env": { 
          NODE_ENV: '"production"'
        }
      }),
      new MiniCssExtractPlugin({ // Выделение css в отдельные файлы
        filename: "[name].[contenthash].css",
        chunkFilename: "[contenthash].css"
      })
    ]);

    config.optimization = {};

    config.optimization.minimizer = [ // Сжимание js
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({}) // Сжимание CSS
    ];
  }

  return config;
};
