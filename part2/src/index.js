import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import AppIndex from './components/App';

const App=()=>{
    return(
        <AppIndex/>
    )
} 

const container=document.getElementById("root");
const root= createRoot(container);
root.render(<App/>)