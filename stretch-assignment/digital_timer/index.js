(function main() {
  const SECONDS_TENS = document.getElementById('secondTens');
  const SECONDS_ONES = document.getElementById('secondOnes');
  const MS_HUNDREDS = document.getElementById('msHundreds');
  const MS_TENS = document.getElementById('msTens');

  let startTime = new Date().getTime();

  function update() {
    startTime = startTime || new Date().getTime();
    const TIME_DIFF_IN_MS = calcTimeSinceInMS();

    if (TIME_DIFF_IN_MS >= 10000) {
      setTimer({ tens: 1, ones: 0, msHundreds: 0, msTens: 0 });
      clearInterval(updater);
      startTime = undefined;
      return;
    }

    setTimer({
      tens: Math.floor(TIME_DIFF_IN_MS / 10000),
      ones: Math.floor(TIME_DIFF_IN_MS % 10000 / 1000),
      msHundreds: Math.floor(TIME_DIFF_IN_MS % 1000 / 100),
      msTens: Math.floor(TIME_DIFF_IN_MS % 100 / 10),
    });
  }

  function setTimer({ tens, ones, msHundreds, msTens }) {
    SECONDS_TENS.textContent = tens;
    SECONDS_ONES.textContent = ones;
    MS_HUNDREDS.textContent = msHundreds;
    MS_TENS.textContent = msTens;
  }

  let updater = setInterval(update, 10);
  function calcTimeSinceInMS() {
    return new Date().getTime() - startTime;
  }

  document.getElementsByTagName('button')[0]
    .addEventListener('click', updater);
}());
