'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');
  const content = document.getElementById('content');
  const ganre = document.getElementById('ganre');
  let category = '';

  const end = document.getElementById('end');

  
  class Quiz {
    constructor(quizData) {
      this._quizz = quizData;
      this._correctAnswersNum = 0;
    }
    getQuizCategory(index) {
      return this._quizz[index].category;
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
    let Quiz1 = new Quiz(quizDatas);
    for (let index = 0; index < quizDatas.length; index++) {
      let foo = Quiz1.getQuizCategory(index);
      end.addEventListener('click', () => {
        console.log(foo);
      })
    }
    // displayQuiz(quizDatas);
    return quizDatas;
  }

  async function displayQuiz(quizDatas) {
    for (let index = 0; index < quizDatas.length; index++) {
      const quizData = quizDatas[index];
      // ganre.innerHTML = '';
      caption.textContent = index + 1;
      const ganre_p = document.createElement('p');
      console.log(quizData);
      let Quiz1 = new Quiz(quizData);
      category = Quiz1.getQuizCategory(index);
      ganre_p.textContent = category;
      ganre.appendChild(ganre_p);

    }
  }
  startBtn.addEventListener('click', () => {
    callApi();
  });
}