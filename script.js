let noCount = 0;

const noTexts = [
  "Think again 😏",
  "Are you sure? 😳",
  "Last chance 😭",
  "Last chance Again 😭",
  "You will regret this 😤"
];

const bearImgs = [
  "./images/bear1.png",
  "./images/bear2.png",
  "./images/bear3.png",
  "./images/bear5.png",
  "./images/bear4.png"
];

function noClick() {
  noCount++;

  // Change NO button text
  const noBtn = document.getElementById("noBtn");
  noBtn.innerText = noTexts[noCount % noTexts.length];
 
    document.getElementById("noMsg").innerText =
    noTexts[noCount % noTexts.length];
	
  // Change teddy
  document.getElementById("bearImg").src =
    bearImgs[noCount % bearImgs.length];

  // Grow YES button
  let yes = document.getElementById("yesBtn");
  let size = 1 + noCount * 0.7;
  yes.style.transform = `scale(${size})`;
}

function yesClick() {
  window.location.href = "GoodChoice.html";
}
