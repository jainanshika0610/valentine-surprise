const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const afterYes = document.getElementById("afterYes");
const changePanel = document.getElementById("changePanel");
const changeBtn = document.getElementById("changeBtn");
const tooLateMsg = document.getElementById("tooLateMsg");

let scale = 1;
let tries = 0;

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const parentWidth = noBtn.parentElement.offsetWidth;
  const maxX = parentWidth / 2 - noBtn.offsetWidth / 2;
  const x = Math.random() * maxX * 2 - maxX;
  noBtn.style.transform = `translateX(${x}px)`;

  scale += 0.1;
  yesBtn.style.transform = `scale(${scale})`;
});

function goNext() {
  window.location.href = "surprise.html";
}

function yesClick() {
  // hide yes/no
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // show panda + messages
  afterYes.style.display = "block";

  // show change panel ALSO
  changePanel.style.display = "block";
}

// RUNNING "Actually No" button
changeBtn.addEventListener("mouseover", () => {
  const box = changeBtn.parentElement;
  const maxX = box.offsetWidth - changeBtn.offsetWidth;
  const maxY = box.offsetHeight - changeBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  changeBtn.style.left = x + "px";
  changeBtn.style.top = y + "px";

  tries++;

  if (tries >= 5) {
    changeBtn.style.display = "none";
    tooLateMsg.style.display = "block";
  }
});
