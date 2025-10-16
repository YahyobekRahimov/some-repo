function main() {
  const title = document.querySelector(".title");
  const titleText = title.textContent;

  startTyping(title, titleText, 100, 1000);
}

function startTyping(element, text, interval, delay) {
  let counter = 1;
  const intervalId = setInterval(() => {
    if (counter > text.length) {
      clearInterval(intervalId);
      return setTimeout(
        () => unType(element, text, interval, delay),
        delay
      );
    }

    element.textContent = text.slice(0, counter);
    counter++;
  }, interval);
}

function unType(element, text, interval, delay) {
  let counter = 1;
  const intervalId = setInterval(() => {
    if (counter == text.length) {
      clearInterval(intervalId);
      return setTimeout(
        () => startTyping(element, text, interval),
        delay
      );
    }

    element.textContent = text.slice(0, text.length - counter);
    counter++;
  }, interval);
}

document.addEventListener("DOMContentLoaded", main);
