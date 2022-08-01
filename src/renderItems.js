export function renderImg(item) {
  return `<div class="item-wrapper">
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            </div>`;
}

export function renderFuncImg(parentEl, items) {
  for (let item of items) {
    parentEl.insertAdjacentHTML("beforeend", renderImg(item));
  }
}

export function renderAudio(item) {
  return `<div class="item-wrapper">
            <audio controls>
                <source src="${item.audio}" type="audio/mpeg">
            </audio>
            <h3>${item.title}</h3>
        </div>`;
}

export function renderFuncAudio(parentEl, items) {
  for (let item of items) {
    parentEl.insertAdjacentHTML("beforeend", renderAudio(item));
  }
}

export function renderVideo(item) {
  return `<div class="item-wrapper">
            <video controls="controls">
                <source src="${item.video}" type="video/mp4">
            </video>
            <h3>${item.title}</h3>
        </div>`;
}

export function renderFuncVideo(parentEl, items) {
  for (let item of items) {
    parentEl.insertAdjacentHTML("beforeend", renderVideo(item));
  }
}
