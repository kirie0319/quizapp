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
    getQuizQuestion(index) {
      return this._quizzes[index - 1].question;
    }
    getQuizDifficulty(index) {
      return this._quizzes[index - 1].difficulty;
    }
    getQuizCorrect_answer(index) {
      return this._quizzes[index - 1].correct_answer;
    }
    getQuizIncorrect_answers(index) {
      return this._quizzes[index - 1].incorrect_answers;
    }
  }
  async function callApi() {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const quizDatas = await response.json();
    console.log(quizDatas);
    // displayQuiz(quizDatas, ganre);
  }

  async function displayQuiz(quizDatas, ganre) {
    quizDatas.foreach((quizData, ganre, index) =>{
      let Quiz1 = new Quiz(quizData);
      ganre.textContent = Quiz1.getQuizCategory(index);
      // content.textContent = Quiz1.resetQuizDate(index);
    }); 
  }
  startBtn.addEventListener('click', () => {
    caption.textContent = '取得中';
    callApi();

  });
}