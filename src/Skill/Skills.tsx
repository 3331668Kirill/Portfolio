import React from 'react';
import css from './Skills.module.css';
import Skill from "./Skill";
import r from './react.jpeg'
import js from './JS4.jpeg'
import ts from './TS.jpeg'
import c from './CSS.jpeg'
import h from './HTML.jpeg'
import rdx from './redux.jpeg'
import ax from './axios.jpeg'
import git from './git.jpeg'
import node from './node.jpeg'


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