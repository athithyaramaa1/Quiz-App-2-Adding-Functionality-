import './Quiz.css'
import Data from '../resources/quizQuestion.json'
import { useState } from 'react';
function Quiz(){
    const [index, setIndex] = useState(0)
    let currentQuestion = Data[index]

    const handlePrevious = () => {
        if(index > 0){
            setIndex(index-1)
        }else if(index == 0){
            setIndex(0)
        }
        
    }

    const handleNext = () => {

        if(index < Data.length - 1){
            setIndex(index+1)
        }else if(index == Data.length - 1 ){
            setIndex(Data.length - 1)
        }
        // setIndex(index+1)
    }

    const handleQuit = () => {
        alert('Are you sure you want to quit?')
    }
    return(
        <>
            <h2 style={{textAlign:"center", fontSize:'4rem'}}>Question</h2>
            <p style={{textAlign:'left', marginLeft:'-300px'}}>{index+1} of {Data.length}</p>
            <br />
            <p>{currentQuestion.question}</p>
            <br />
            <br />
            <br />
            <div className="optionsContainer">
                <button>{currentQuestion.optionA}</button>
                <button>{currentQuestion.optionB}</button>
                <button>{currentQuestion.optionC}</button>
                <button>{currentQuestion.optionD}</button>
            </div>
            <br />
            <br />
            <br />
            <div className="buttons">
                <div><button className="button1" onClick={handlePrevious}>Previous</button></div>
                <div><button className="button2" onClick={handleNext}>Next</button></div>
                <div><button className="button3" onClick={handleQuit}>Quit</button></div>
            </div>
        </>
    )
}

export default Quiz;