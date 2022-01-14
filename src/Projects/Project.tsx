import React from 'react';
import css from './Projects.module.css';


type TypeSkillProps = {
    title:string
    description:string
    image: any
}

const Project = ({title, description, image}:TypeSkillProps) => {
    return (

                <div className={css.project_element}>
                    <div className={css.ico}>
                        <img className={css.icon} src={image}/>
                    </div>
                    <h3>{title}</h3>
                    <span >{description}</span>
                </div>


    );
}

export default Project;