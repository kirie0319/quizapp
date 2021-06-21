'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');
  const content = document.getElementById('content');
  const ganre = document.getElementById('ganre');

  
  class Quiz {
    constructor(quizData) {
      this._quizz = quizData;
      this._correctAnswersNum = 0;
    }
    getQuizCategory(index) {
      return this._quizz[index - 1].category;
    }
    getQuizQuestion(index) {
      return this._quizz[index - 1].question;
    }
    getQuizDifficulty(index) {
      return this._quizz[index - 1].difficulty;
    }
    getQuizCorrect_answer(index) {
      return this._quizz[index - 1].correct_answer;
    }
    getQuizIncorrect_answers(index) {
      return this._quizz[index - 1].incorrect_answers;
    }
  }

  async function callApi() {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const json = await response.json();
    console.log(json);
    const quizDatas = await json.results;
    // displayQuiz(quizDatas, ganre);
    quizDatas.forEach((quizData, index) => {
      console.log(quizData);
      let Quiz1 = new Quiz(quizData);
      ganre.textContent = Quiz1.getQuizCategory(index);
    });
  }

  async function displayQuiz(quizDatas, ganre) {
    quizDatas.foreach((quizData, ganre, index) =>{
      // content.textContent = Quiz1.resetQuizDate(index);
    }); 
  }
  startBtn.addEventListener('click', () => {
    caption.textContent = '取得中';
    callApi();

  });
}