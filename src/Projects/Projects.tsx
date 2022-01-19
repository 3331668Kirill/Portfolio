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

                    <Project title={'Account forms'} description={accountFormDescription} image={forms} link={''}/>
                    <Project title={'Social network'} description={socialNetworkDescription} image={socialnetwork} link={''}/>
                    <Project title={'Todo list'} description={todoDescription} image={todo} link={''}/>
                    <Project title={'English words reminder'} description={englishDescription}
                             image={english} link={'https://3331668kirill.github.io/EnglishWordLearn/'}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;