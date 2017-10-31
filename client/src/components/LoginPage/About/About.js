import React from 'react';
import { Parallax } from 'react-materialize';
import './About.css';
import Map from './landing-img1.jpeg';
import Photos from './landing-img2.jpeg';

const About = () => {
    return (
        <div>
            <Parallax imageSrc={Map} />
            <div className="section white">
                <div className="row container">
                    <h2 className="header">About WanderSpark</h2>
                    <p className="grey-text text-darken-3 lighten-3">
                    Every individual possesses their own level of wanderlust.  WanderSpark was designed and built to inspire you
                    to plan your dream trip all in one beautiful dashboard.  Search for places to dine at, attractions, and entertainment, based
                    on your desired destination.  Pin up to twelve of your search results to the WanderSpark dashboard to visualize your ideas
                    and plans.  Simply put, WanderSpark is your own digital corkboard-planner.
                    </p>
                </div>
            </div>
            <Parallax imageSrc={Photos} />
        </div>
    );
};

export default About;
