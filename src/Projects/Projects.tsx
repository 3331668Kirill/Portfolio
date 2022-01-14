import React from 'react';
import css from './Projects.module.css'
import Project from "./Project";


function Projects() {
    return (<div className={css.s}>
            <div className={css.projects}>

                <div className={css.project_block}>

                    <Project title={'4434'} description={'fghfg'} image={''}/>
                    <Project title={'4'} description={'fggfh'} image={''}/>
                    <Project title={'4554'} description={'fghgfh'} image={''}/>
                    <Project title={'777'} description={'gfhgfdh'} image={''}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;