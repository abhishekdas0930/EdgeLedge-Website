const typedText = document.querySelector(".sentence");

const text = ["financial assistance...", "financial assistance..."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
  if (charIndex < text[textArrayIndex].length) {
    typedText.textContent += text[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    //erase
    setTimeout(erase, newTextDelay + 250);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = text[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    textArrayIndex++;
    if (textArrayIndex >= text.length)
      textArrayIndex = 0;

    setTimeout(type, typingDelay+1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});

