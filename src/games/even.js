const getRandomQuestion = () => {
    const num = Math.floor(Math.random() * 100);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const question = num.toString();
  
    return { question, correctAnswer };
  };
  
  export default getRandomQuestion;
  