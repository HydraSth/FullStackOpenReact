import React, { useState } from "react";
import { createRoot } from 'react-dom/client';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Stat=({letter,allClicks})=> allClicks.filter((element)=>element.includes(letter)).length;
const AllStats=({allClicks})=> <p>Average {(Stat({letter:"G", allClicks:allClicks})-Stat({letter:"B", allClicks:allClicks}))/allClicks.length}%</p>;
const Statistics=({allClicks})=>{
    if(allClicks.length===0){
        return <p>No feedback given</p>
    }else{
        return(
            <>
                <p>All {allClicks.length}</p>
                <AllStats allClicks={allClicks}/>
                <p>Positive {<Stat letter="G" allClicks={allClicks}/>}</p>
            </>
        )
    }
}
const StatisticLine = ({ text, value }) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
            </tbody>
        </table>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [allClicks, setAll] = useState([])
    const addGood=()=>{
        setGood(good+1);
        setAll(allClicks.concat("G"))
    }
    const addBad=()=>{
        setBad(bad+1);
        setAll(allClicks.concat(""))
        setAll(allClicks.concat("B"))
    }
    const addNeutral=()=>{
        setNeutral(neutral+1);
        setAll(allClicks.concat("N"))
    }

    return(
    <>
        <h4>Give feedback</h4>
        <Button onClick={addGood} text="Good"/>
        <Button onClick={addBad} text="Bad"/>
        <Button onClick={addNeutral} text="Neutral"/>
        <StatisticLine text={"Good:"} value={good}/>
        <StatisticLine text={"Bad:"} value={bad}/>
        <StatisticLine text={"Neutral:"} value={neutral}/>
        <h4>Statistics</h4>
        <Statistics allClicks={allClicks}/>
    </>
    )
}

const elementToRender=document.getElementById("root");
const root= createRoot(elementToRender);
root.render(<App />)