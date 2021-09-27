const readlineSync = require('readline-sync');

const user = {
  name: "",
  score: 0
}

const highScorer =[
  {
    name: "Arjun",
    score: 4
  }
]

const questions = [
  {
    question: "What is my name?",
    answer: "Arjun" 
  },
  {
    question: "What is my age?",
    answer: "21" 
  },
  {
    question: "Do i love programming?",
    answer: "yes" 
  },
  {
    question: "what can i do whole life?",
    answer: "programming" 
  },
  {
    question: "What is my dream company?",
    answer: "Google" 
  }
  ,
  {
    question: "Which is my dream country?",
    answer: "usa" 
  }
  
]
  const checkAnswer = (opt, ans) => {
    opt = opt.toUpperCase();
    ans = ans.toUpperCase();
    if(opt === ans){
      return true;
    }
    else{
      return false;
    }

  }

  const game = () => {
    questions.forEach(question => {
      console.log('\n', question.question)
      let opt = readlineSync.question(": ")

      if(checkAnswer(opt, question.answer)){
        user.score +=1;
      }

      console.log('Score : ', user.score)
      console.log('___________________')

    })
  }

  const checkHighScore = (finalScore) => {
    highScorer.forEach( e => {
      if(e.score <= finalScore){
        highScorer.push(user)
      }
    })

    console.log('_______________')
    console.log('Top Scorers :')
    highScorer.forEach( e => {
      console.log(e.name + ' : ' + e.score)
    })
    console.log('_______________')

  }
  console.log('Welcome to the game : \n \n *** How well do you know me *** \n')

  user.name = readlineSync.question("\nYour Name : ")

  console.log("\nLet's Play ", user.name)

  game();

  console.log("\nHey your Final Score : ", user.score)

checkHighScore(user.score)
