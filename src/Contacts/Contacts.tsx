import React from 'react';
import css from './Contacts.module.css';
import phone from './phone.png'
import telegram from './telegram.png'
import mail from './mail.png'
import viber from './viber.png'
import linkedin from './linkedin.png'



function Contacts() {
    return (
        <div className={css.contact}>
            <div className={css.contact_block}>
                <div className={css.contact_element}>
                    <img src={phone} className={css.contact_img}/>
                    <div className={css.contact_value}>+375 (29) 333 16 68</div>
                </div>
                <div className={css.contact_element}>
                    <img src={telegram} className={css.contact_img}/>
                    <a href="https://telegram.im/@kir_san_new" className={css.contact_value}
                       style={{color:"wheat"}} target="_blank">@kir_san_new</a>
                </div>
                <div className={css.contact_element}>
                    <img src={mail} className={css.contact_img}/>
                    <div className={css.contact_value}>3331668@mail.ru</div>
                </div>
                <div className={css.contact_element}>
                    <img src={viber} className={css.contact_img}/>
                    <div className={css.contact_value}>+375 (29) 333 16 68</div>
                </div>
                <div className={css.contact_element}>
                    <img src={linkedin} className={css.contact_img}/>
                    <a href={'https://linkedin.com/in/kirill-mitsko-14b5aa226'}
                             className={css.contact_value} style={{color:"wheat"}}>linkedin.com/in/kirill-mitsko-14b5aa226</a>
                </div>
            </div>


        </div>
    );
}

export default Contacts;