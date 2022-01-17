import React from 'react';
import css from './Skill.module.css';


type TypeSkillProps = {
    title:string
    description:string
    image: any
}

const Skill = ({title, description, image}:TypeSkillProps) => {
    return (

                <div className={css.skill_element}>
                    <div className={css.ico}>
                        <img className={css.icon} src={image}/>
                    </div>
                    <h3 className={css.title}>{title}</h3>
                    <span >{description}</span>
                </div>


    );
}

export default Skill;