'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');
  const content = document.getElementById('content');
  const ganre = document.getElementById('ganre');

  
  class Quiz {
    constructor(quizData) {
      this._quizzes = quizData.results;
      this._correctAnswersNum = 0;
    }
    getQuizCategory(index) {
      return this._quizzes[index - 1].category;
    }
    resetQuizDate(index) {
      return this._quizzes[index - 1].question;
    }
  }
  async function callApi(ganre, index) {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const quizData = await response.json();
    console.log(quizData);
    let Quiz1 = new Quiz(quizData);
    ganre.textContent = Quiz1.getQuizCategory(index);
    // content.textContent = Quiz1.resetQuizDate(index);
  }
  startBtn.addEventListener('click', () => {
    caption.textContent = '取得中';
    callApi(ganre, index);

  });
}