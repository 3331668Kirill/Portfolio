import React from 'react';
import css from './Home.module.css';
import photo from "./photo12.png"


function Home() {
    return (
        <div className={css.home}>

            <div className={css.conteiner}>

                <div className={css.text}>
                <span>
                    <div className={css.hi}>Hi</div>
                    EVERYBODY
                </span>
                    <h1> I am Mitko Kirill </h1>
                    <p> some text </p>


                </div>
                <div className={''}>
                    <img className={css.photo} src={photo}/>
                </div>

            </div>

        </div>
    );
}

export default Home;