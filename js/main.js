'use strict';

{
  const startBtn = document.getElementById('start');
  const caption = document.getElementById('caption');
  const content = document.getElementById('content');
  const option = document.getElementById('option');
  
  let quiz;
  let quizIndex = 0;

  class Quiz {
    constructor(quizDatas) {
      this._quizz = quizDatas;
      this._correctAnswersNum = 0;
    }

    endQuiz() {

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      caption.textContent = `あなたの正答数は${this._correctAnswersNum}です！！`;

      const hrElement3 = document.createElement('hr');
      content.appendChild(hrElement3);

      const endSentence = document.createElement('p');
      endSentence.textContent = '再度チャレンジしたい場合は以下をクリック！！';
      content.appendChild(endSentence);

      const hrElement4 = document.createElement('hr');
      content.appendChild(hrElement4);

      const endButton = document.createElement('button');
      endButton.textContent = 'ホームに戻る';
      endButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
      option.appendChild(endButton);

    }
    
    displayQuiz(index) {

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      caption.textContent = `問題${index + 1}`;

      const quizGanre = document.createElement('h3');
      quizGanre.style.margin = '0px';
      quizGanre.textContent = `[ジャンル] ${unescape(this._quizz[index].category)}`;
      content.appendChild(quizGanre);

      const quizDifficulty = document.createElement('h3');
      quizDifficulty.style.margin = '0px';
      quizDifficulty.textContent = `[難易度] ${unescape(this._quizz[index].difficulty)}`;
      content.appendChild(quizDifficulty);

      const hrElement1 = document.createElement('hr');
      content.appendChild(hrElement1);
      
      const question = document.createElement('p');
      question.textContent = unescape(this._quizz[index].question);
      content.appendChild(question);
      
      const hrElement2 = document.createElement('hr');
      content.appendChild(hrElement2);
      
      const answerButtonArray = [];

      const correctAnswerButton = document.createElement('button');
      correctAnswerButton.textContent = unescape(this._quizz[index].correct_answer);
      correctAnswerButton.addEventListener('click', () => {
        if (quizIndex === 9) {
          this.endQuiz();
        } else {
          quizIndex++;
          this._correctAnswersNum++;
          this.displayQuiz(quizIndex);
        }
      });
      answerButtonArray.push(correctAnswerButton);

      this._quizz[index].incorrect_answers.forEach((incorrectAnswer) => {
        const incorrectAnswerButton = document.createElement('button');
        incorrectAnswerButton.textContent = unescape(incorrectAnswer);
        incorrectAnswerButton.addEventListener('click', () => {
          if (quizIndex === 9) {
            this.endQuiz();
          } else {
            quizIndex++;
            this.displayQuiz(quizIndex);
          }
        });
        answerButtonArray.push(incorrectAnswerButton);
      });

      let answerLength = answerButtonArray.length;

      while (answerLength) {
        let i = Math.floor(Math.random() * answerLength);
        let str = answerButtonArray[--answerLength];
        answerButtonArray[answerLength] = answerButtonArray[i];
        answerButtonArray[i] = str;
      }

      answerButtonArray.forEach(answerButton => {
        content.appendChild(answerButton);
        const brElement = document.createElement('br');
        content.appendChild(brElement);
      });

    }
  }

  async function callApi() {
    caption.textContent = '取得中';
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const json = await response.json();
    console.log(json);
    const quizDatas = await json.results;
    quiz =  new Quiz(quizDatas);
    quiz.displayQuiz(quizIndex);
  }


  startBtn.addEventListener('click', async () => {
    await callApi();
    option.innerHTML = '';
  });
}