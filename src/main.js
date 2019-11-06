import "./styles/main.pcss"; // Подгружаются стили
if (process.env.NODE_ENV === "development") { // Если идет разработка то подлкючаем pug
  require("file-loader!./index.pug"); // Здесь обработан pug
}

// Ниже подключать js файлы
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/fullscreen-menu";
import "./scripts/form";