'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');
  const quizData = 'https://opentdb.com/api.php?amount=10';

  class Quiz {
    constructor(quizData) {
      this._quizzes = quizData.results;
      this._correctAnswersNum = 0;
    }
    getQuizCategory(index) {
      return this._quizzes[index - 1].category;
    }
    resetQuizResults() {
      this._quizzes.questions =  '';

    }
  }

  startBtn.addEventListener('click', () => {
    caption.textContent = '取得中';
    // fetch('https://opentdb.com/api.php?amount=10')
    // .then((response) => response.text())
    // .then((text) => console.log(text))
    // .catch((error) => console.log(error));

    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const quizData = await response.json();
    console.log(quizData);


    // await fetch('https://opentdb.com/api.php?amount=10', {
    //   headers: {
    //     Authorization: "Basic " + btoa("username" + ":" + "password"),
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=utf-8"
    //   }
    // });
  });
}