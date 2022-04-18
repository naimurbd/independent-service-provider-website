import React from 'react';
import './About.css'
import myself1 from '../../images/myself1.png'

const About = () => {
    return (
        <div className='about-container'>
            <div className='header-container'>
                <div>
                    <h2> Hello, Everyone.I am Naimur Rahaman. </h2>
                    <h3>I am a dream lover boy.It has already been four month past I started 0f 2022. </h3>

                </div>
                <br />
                <div>
                    <img src={myself1} alt="" />
                </div>
                <br />
            </div>
            <h4>My goal below there</h4>
            <ul>
                <li>1. I want to become a web devoloper.</li>
                <li>Now I learn HTML, CSS, Javascript and React. </li>
                <li>As a beginner firstly I want to get a intership.</li>
                <li>I learn from web.programming-hero batch-5</li>
                <li>After this course I want to get a job.</li>
                <li>I believe as soon as perfect time will come when I become a web devoloper.</li>
            </ul>
        </div>
    );
};

export default About;