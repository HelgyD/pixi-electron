import { Application } from "pixi.js";

const app = new Application();
app.init({
  view: document.getElementById("stage") as HTMLCanvasElement,
  width: 900,
  height: 760,
  backgroundColor: "#222034",
});

app.ticker.add((delta) => {});
