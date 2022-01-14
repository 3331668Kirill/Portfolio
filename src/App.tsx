import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";
import Skills from "./Skill/Skills";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";


function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="skill" element={<Skills/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>


        </div>
    );
}

export default App;
