import './Result.css'

function Result() {
  return (
    <>
      <h1>Result</h1>
      <br />
      <br />
      <div className="container">
        <p>You did absolutely amazing!</p>
        <h1>Your score is 100%</h1>
        <br />
        <br />
        <div className="flexbox">
          <p>Total number of questions</p>
          <span>15</span>
          <p>Number of attempted questions</p>
          <span>15</span>
          <p>Number of correct answers</p>
          <span>15</span>
          <p>Number of wrong answers</p>
          <span>--</span>
        </div>
      </div>
      <div className="buttons">
        <button className="button1">Play Again</button>
        <button className="button2">Back to home</button>
      </div>
    </>
  );
}

export default Result;
