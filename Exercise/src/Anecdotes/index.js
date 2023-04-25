import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Button=({handleClick, text})=>{
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const MostVotes=({votes, anecdotes})=>{
    let max= votes.reduce(function(a, b) {
        return (Math.max(a, b))
    }, -Infinity);
    let index=votes.indexOf(max)
    return anecdotes[index];
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0,0,0,0,0,0])
    function generateNumber(){
        let newNumber;
        do{
            newNumber=Math.round(Math.random()*10)
        }while(newNumber===0 || newNumber>5);
        return newNumber;
    }
    function handleClick(){
        setSelected(generateNumber);
    }
    function handleVote(){
        const newVotes=[...votes];
        newVotes[selected]+=1;
        setVotes(newVotes);
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <Button handleClick={handleClick} text={"next anecdote"}/>
            <p>Has {votes[selected]} votes</p>
            <Button handleClick={handleVote} text={"vote"}/>
            <h4>Anecdote with most votes</h4>
            <MostVotes votes={votes} anecdotes={anecdotes}/>
        </div>
    )
}

const anecdotes = [
'If it hurts, do it more often',
'Adding manpower to a late software project makes it later!',
'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
'Premature optimization is the root of all evil.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const container=document.getElementById("root");
const root= createRoot(container);
root.render(<App anecdotes={anecdotes}/>)