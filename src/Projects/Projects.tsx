import React from 'react';
import css from './Projects.module.css'
import Project from "./Project";
import forms from './accountforms.png'
import {accountFormDescription, englishDescription, socialNetworkDescription, todoDescription} from "./decriptions";
import socialnetwork from './social.png'
import todo from './todo.png'
import english from './english.png'

function Projects() {
    return (<div className={css.s}>
            <div className={css.projects}>

                <div className={css.project_block}>

                    <Project title={'Account forms'} description={accountFormDescription} image={forms} link={'http://5.53.124.33:3000/act_form'}/>
                    <Project title={'Social network'} description={socialNetworkDescription} image={socialnetwork} link={''}/>
                    <Project title={'Todo list'} description={todoDescription} image={todo} link={'https://3331668kirill.github.io/TodoList/'}/>
                    <Project title={'English words reminder'} description={englishDescription}
                             image={english} link={'https://3331668kirill.github.io/EnglishWordLearn/'}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;