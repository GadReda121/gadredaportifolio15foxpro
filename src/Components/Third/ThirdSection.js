import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../First/FirstSection.css'

function ThirdSection(props){
    return (
        <section className = 'firstSection'>
        {/* NAVBAR */}
        <div className='navbar justify-content-around'>
            <h5><FontAwesomeIcon icon="fa-solid fa-quote-left" />{props.navOne}</h5>
            <h5><a href='#'>{props.navTwo}</a></h5>
        </div>
        {/* Home section */}
        <div className='home'>
            {/* Text-Home */}
            <div className='text-home third'>
                <h1>{props.h1}</h1>
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
                <p>{props.p2}</p>
                <a href='#'>{props.a}</a>
            </div>
            {/* Img-Home */}
            <div className='img-home'>
                <img src={props.img} alt='' />
            </div>
        </div>
        </section>
    );
}

export default ThirdSection;