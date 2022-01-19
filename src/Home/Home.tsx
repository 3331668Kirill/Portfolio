import React from 'react';
import css from './Home.module.css';
import photo from "./photo16.png"


function Home() {

    return (
        <div className={css.home}>
            <audio className="audio"
                   src="https://new.muzikavsem.org/dl/993730849/Michael_Vignola_-_Knowing_(new.muzikavsem.org).mp3"
                   autoPlay>
            </audio>
            <div className={css.conteiner}>

                <div className={css.text}>
                <span>
                    <div className={css.hi}>Hi</div>
                    EVERYBODY
                </span>
                    <h1> I am Mitko Kirill </h1>
                    <p className={css.front}> Frontend Developer from Minsk, Belarus </p>
                    <p className={css.about}> I`m hard working and responsible person. I`m very active, organized and
                        patient man. I always do my best to achieve my goals. My strong points is the ability to deal
                        with difficult problems. I`m very flexible and adaptive to learning new things.</p>
                </div>

                <div className={css.photo}>
                    <img className={css.photo_img} src={photo}/>
                </div>


            </div>

        </div>
    );
}

export default Home;