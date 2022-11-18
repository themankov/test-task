const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timerId;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (seconds) => {
  if (seconds < 0) {
    return clearInterval(timerId);
  }
  let second = Math.floor(seconds) % 60;
  let minutes = Math.floor(seconds / 60) % 60;
  let hours = Math.floor(seconds / 60 / 60) % 24;
  timerEl.innerText = `${formatData(hours)}:${formatData(minutes)}:${formatData(
    second
  )}`;
  seconds--;
};

const formatData = (value) => {
  return value > 9 ? value : `0${value}`;
};
const animateTimer = (seconds) => {
  createTimerAnimator(seconds);
};

inputEl.addEventListener('input', (e) => {
  if (isNaN(e.target.value)) {
    return (e.target.value = e.target.value.slice(0, -1));
  }
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);

  animateTimer(seconds);
  if (!timerId) {
    timerId = setInterval(() => animateTimer(--seconds), 1000);
  } else {
    clearInterval(timerId);
    timerId = setInterval(() => animateTimer(--seconds), 1000);
  }

  inputEl.value = '';
});
