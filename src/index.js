import scss from "../scss/main.scss";
import { itemsImg, itemsAudio, itemsVideo } from "./items.js";
import {
  renderFuncImg,
  renderFuncAudio,
  renderFuncVideo,
} from "./renderItems.js";

const containerEl = document.querySelector(".container");
renderFuncImg(containerEl, itemsImg);
renderFuncAudio(containerEl, itemsAudio);
renderFuncVideo(containerEl, itemsVideo);

const imgsEl = document.querySelectorAll("div > img");
imgsEl.forEach((item) => {
  item.classList.add("item-img");
  item.nextElementSibling.classList.add("item-title");
});
const audiosEl = document.querySelectorAll("div > audio");
audiosEl.forEach((item) => {
  item.classList.add("item-audio");
  item.nextElementSibling.classList.add("item-title");
});
const videosEl = document.querySelectorAll("div > video");
videosEl.forEach((item) => {
  item.classList.add("item-video");
  item.nextElementSibling.classList.add("item-title");
});
