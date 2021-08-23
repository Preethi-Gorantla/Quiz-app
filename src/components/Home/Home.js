import Game from '../Game/Game';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import React,{useState,useEffect} from 'react';
import Score from '../Score/Score';
const Home = (props) => {
  const [counter, setCounter] = useState(60);
  const [quesCount,setNewCount] = useState("0");
  const [score,setNewScore] = useState("0");
  
  console.log(score);
  const [submit,setNewSubmit] = useState(false);
  const scoreMaintainer = (score) => {
    setNewScore(score);
  };
  const questionCount = (curques) => {
    setNewCount(curques)
  };
  const modalHandler = () => {
    setNewSubmit(true);
  };
  

    const hideScore = () => {
    setNewSubmit(false);
  };

  useEffect(() => {
     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

    
  return (
    <Card className={classes.home}>
      <div className="d-flex flex-row justify-content-between">
      <h1>Trivia Quiz</h1>
      <Card className="mb-3 p-8 w-50">
      <h5> {counter>=0 ? counter : "Timeup"}</h5>
      </Card>
      </div>
      <Game onScore={scoreMaintainer} onCount={questionCount}/>
       <Button disabled= {quesCount} className="mt-4" onClick={modalHandler}>Submit</Button>
       {submit && <Score newscore={score} time={counter} onClose={hideScore}/>}
    </Card>
  );
};

export default Home;
