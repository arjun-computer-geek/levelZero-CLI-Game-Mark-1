const readlineSync = require('readline-sync');

const user = {
  name: "",
  score: 0
}

const highScorer =[
  {
    name: "Arjun",
    score: 3
  }
]

const questions = [
  {
    question: "Short name of Shah Rukh Khan?",
    answer: "srk" 
  },
  {
    question: "SRK's spouse Name?",
    answer: "Gauri Khan" 
  },
  {
    question: "How many children SRK have?",
    answer: "3" 
  },
  {
    question: "First movie which was released on theater?",
    answer: "Deewana" 
  },
  {
    question: "First appearance of SRK in which movies or serial?",
    answer: "Fauji" 
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
  console.log('Welcome to the game : \n \n *** How well do you know Shah Rukh Khan *** \n')

  user.name = readlineSync.question("\nYour Name : ")

  console.log("\nLet's Play ", user.name)

  game();

  console.log("\nHey yor Final Score : ", user.score)

checkHighScore(user.score)
  