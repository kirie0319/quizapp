'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');

  startBtn.addEventListener('click', () => {
    caption.textContent = '取得中';
    fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

    // await fetch('https://opentdb.com/api.php?amount=10', {
    //   headers: {
    //     Authorization: "Basic " + btoa("username" + ":" + "password"),
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=utf-8"
    //   }
    // });
  });
}