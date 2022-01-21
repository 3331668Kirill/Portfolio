import React from 'react';
import css from './Skills.module.css';
import Skill from "./Skill";
import r from '../assets/img/react.png'
import js from '../assets/img/js.png'
import ts from '../assets/img/ts.png'
import c from '../assets/img/CSS.png'
import h from '../assets/img/HTML.png'
import rdx from '../assets/img/redux.png'
import ax from '../assets/img/axios.png'
import git from '../assets/img/git.png'
import node from '../assets/img/node.png'


function Skills() {
    return (
        <div className={css.skill}>
            <div className={css.conteiner}>
                <h2 className={css.title}> I KNOW AND USE NEXT GENERAL TECHNOLOGIES </h2>
                <div className={css.skill_block}>
                    <Skill title={'React'} description={''} image={r}/>
                    <Skill title={'JavaScript'} description={''} image={js}/>
                    <Skill title={'TypeScript'} description={''} image={ts}/>
                    <Skill title={'CSS'} description={''} image={c}/>
                    <Skill title={'HTML'} description={''} image={h}/>
                    <Skill title={'Redux'} description={''} image={rdx}/>
                    <Skill title={'Axios'} description={''} image={ax}/>
                    <Skill title={'Github'} description={''} image={git}/>
                    <Skill title={'NodeJS'} description={''} image={node}/>
                </div>
            </div>


        </div>
    );
}

export default Skills;