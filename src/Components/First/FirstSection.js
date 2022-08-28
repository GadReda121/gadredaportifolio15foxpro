import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FirstSection.css';
import './FirstSection-mob.css';

function FirstSection(props){
    return (
        <section className = 'firstSection'>
        {/* NAVBAR */}
        <div className='navbar justify-content-around'>
            <h5><FontAwesomeIcon icon="fa-solid fa-feather-pointed" className='mr-1'></FontAwesomeIcon>{props.navOne}</h5>
            <h5><a href=''>{props.navTwo}</a></h5>
        </div>
        {/* Home section */}
        <div className='home'>
            {/* Text-Home */}
            <div className='text-home animate__animated animate__slideInLeft'>
                <h1>{props.h1}</h1>
                <h3>{props.h3}</h3>
                <a href=''><FontAwesomeIcon icon="fa-solid fa-circle-play" className='mr-3'></FontAwesomeIcon>{props.a}</a>
            </div>
            {/* Img-Home */}
            <div className='img-home animate__animated animate__slideInRight' style={{zIndex : '-1'}}>
                <img src={props.img} alt='' />
            </div>
        </div>
        </section>
    );
}

export default FirstSection;