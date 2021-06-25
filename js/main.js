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
      return this._quizz.category;
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
    caption.textContent = '取得中';
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const json = await response.json();
    console.log(json);
    const quizDatas = await json.results;
    displayQuiz(quizDatas);
    return quizDatas;
    // displayQuiz(quizDatas, ganre);
    // quizDatas.forEach((quizData, index) => {
    //   console.log(quizData);
    //   let Quiz1 = new Quiz(quizData);
    //   ganre.textContent = Quiz1.getQuizCategory(index);
    // });
  }

  async function displayQuiz(quizDatas) {
    for (let index = 0; index < quizDatas.length; index++) {
      const quizData = quizDatas[index];
      // ganre.innerHTML = '';
      caption.textContent = index + 1;
      const ganre_p = document.createElement('p');
      console.log(quizData);
      let Quiz1 = new Quiz(quizData);
      ganre_p.textContent = Quiz1.getQuizCategory(index);
      ganre.appendChild(ganre_p);

    }
    // quizDatas.forEach((quizData, index) => {
    // });
  }
  startBtn.addEventListener('click', () => {
    // caption.textContent = '取得中';
    callApi();

  });
}