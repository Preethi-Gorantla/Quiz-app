import classes from "./Game.module.css";
import Card from "../UI/Card/Card";
import React,{useState} from "react";
const Game = (props) => {
      const dummy_Ques=[
    {
			ques: 'Who is CEO of Tesla?',
			options: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
    {
    ques: 'The iPhone was created by which company?',
			options: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
	console.log(showScore);
    const [queslen,setNewqueslen] = useState(false);
    const formSubmitHandler = (event) => {
        event.preventDefault();
    }
     

    const nextQuestionHandler = () => {
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < dummy_Ques.length) {
			setCurrentQuestion(nextQuestion);
        }
        if(nextQuestion === dummy_Ques.length)
        {
            setNewqueslen(true);
        }
        props.onCount(queslen);
};
    const prevQuestionHandler = () => {
        const nextQuestion = currentQuestion - 1;
		if (nextQuestion < dummy_Ques.length) {
			setCurrentQuestion(nextQuestion);
    }
};  
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < dummy_Ques.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
        props.onScore(score);
	};
    return(
        <Card>
            <form className={classes.quiz} onSubmit={formSubmitHandler}>
                <div className='question-section'>
					<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{dummy_Ques.length}
					</div>
					<div className='question-text'>{dummy_Ques[currentQuestion].ques}</div>
				</div>
				<div className='answer-section'>
						{dummy_Ques[currentQuestion].options.map((answerOption) => (
							<button className="form-control mb-1 mt-2" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
				</div>
                <div className="d-flex flex-row justify-content-between">
                    <button className="btn btn-primary mt-3 " onClick={prevQuestionHandler} disabled={currentQuestion===0}>Prev</button>
                    <button className="btn btn-primary mt-3" onClick={nextQuestionHandler}>Next</button>
                </div>
            </form>
        </Card>
    )
};

export default Game;