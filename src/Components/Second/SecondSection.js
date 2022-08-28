import React from 'react';
import '../First/FirstSection.css'

function SecondSection(props){
    return (
        <section className = 'firstSection'>
        {/* Home section */}
        <div className='home'>
            {/* Img-Home */}
            <div className='img-home'>
                <img src={props.img} alt='' />
            </div>
            {/* Text-Home */}
            <div className='text-home second'>
                <h1>{props.h1}</h1>
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
                <p>{props.p2}</p>
            </div>
        </div>
        </section>
    );
}

export default SecondSection;