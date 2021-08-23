import React from 'react';


const Question = (props) => {
    let score=0;

    const answerHandler= (event) => {
        //console.log(props.answer,event.currentTarget.textContent);
            if(event.currentTarget.textContent === props.answer)
            {
                score = score + 5;
                console.log(score);
            }
            else{
                score=score - 3;
            }
            props.scoreHandler(score);
    };
    return (
        <React.Fragment>
            <label>{props.name}</label>
            <div className="d-flex flex-row">
            <p className="form-control" onClick={answerHandler} >{props.options[0]}</p>
            <p className="form-control" onClick={answerHandler} >{props.options[1]}</p>
            </div>
            <div className="d-flex flex-row">
            <p className="form-control" onClick={answerHandler} >{props.options[2]}</p>
            <p className="form-control" onClick={answerHandler} >{props.options[3]}</p>
            </div>
        </React.Fragment>
    );
}

export default Question;