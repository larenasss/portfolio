const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: 'postcss-scss',
  plugins: [
    require("postcss-easy-import")({ // Подключает все новые файлы
      extensions: ".pcss"
    }),
    require("autoprefixer")({ // Для кроссбраузерности
      cascade: false
    }),
    require("postcss-advanced-variables")({ // 
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      )
    }),
    require("postcss-nested"), // Вложенности
    require("postcss-rgb"), // Цвет можно передавать в rgba (#fff, .5)
    require("postcss-inline-svg")({ // Для svg
      removeFill: true,
      path: "./src/images/icons"
    }),
    require("cssnano"), // Сжатие CSS
    require("postcss-pxtorem")({ // Перевод пикселей
      rootValue: 16,
      propList: ["*", "!*border*"],
      selectorBlackList: [/^html$/]
    })
  ]
};
