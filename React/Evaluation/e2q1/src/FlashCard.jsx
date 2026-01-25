import { useEffect, useState } from "react";


const flashcards = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is 5 + 7?",
    answer: "12",
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    id: 5,
    question: "What is the speed of light in a vacuum?",
    answer: "299,792,458 meters per second",
  }
];

function Flashcards()
{
    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [timeLeft, setTimeLeft] = useState(90);
    const [summary, setSummary] = useState(false);

    useEffect(()=>{
        if(timeLeft<=0)
        {
            setSummary(true)
            return
        }
        const timer = setInterval(()=>{
            setTimeLeft(t=>t-1);
        },1000);

        return ()=> clearInterval(timer);

    }, [timeLeft]);

    function nextCard()
    {
        setFlip(false);
        if(index==flashcards.length-1)
            setSummary(true)
        else
            setIndex(i=>i+1)
    }
    function markCorrect()
    {
        setCorrect(c=>c+1)
        nextCard();
    }

    function markIncorrect()
    {
        setIncorrect(c=>c+1)
        nextCard();
    }

    if(summary)
    {
        return(
            <div>
                <h2>Session Summary</h2>
                <p style={{background:"gray"}}>Total Stidied: {correct+incorrect}</p>
                <p style={{background:"green"}}>Correct: {correct}</p>
                <p style={{background:"red"}}>Incorrect: {incorrect}</p>
                <p style={{background:"yellow"}}>Unanswered: {flashcards.length-(correct+incorrect)}</p>
            </div>
        )
    }

    return(
        <div style={{border:"1px solid black", margin:"5px 10px 5px", padding:"5px 10px 5px", background:"lightpink"}}>
            <h1 style={{color:"rebeccapurple"}}>Flashcard App</h1>

            <p>
                Time left: {Math.floor(timeLeft/60)}:{(timeLeft%60)}
            </p>

            <div onClick={()=> setFlip(!flip)} style={{border:"2px solid #301616", padding:"15px", cursor:"pointer", background:"white"}}>
                {flip ? flashcards[index].answer : flashcards[index].question}
            </div>

            <div style={{margin:"15px"}}>
                <button onClick={()=> setIndex(i=>Math.max(i-1, 0))} style={{marginRight:"5px"}}> {"<<"}Previous</button>
                <button onClick={nextCard} style={{marginLeft:"5px"}}>Next{">>"}</button>
            </div>

            {flip && (<div style={{margin: "10px"}}>
                <button onClick={markCorrect} style={{marginRight:"5px"}}>Correct</button>
                <button onClick={markIncorrect} style={{marginLeft:"5px"}}>Incooect</button>
            </div>)}
        </div>
    )
}

export default Flashcards;