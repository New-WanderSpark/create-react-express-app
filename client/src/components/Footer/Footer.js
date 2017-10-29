import React from 'react';
import './Footer.css';
import { Footer } from 'react-materialize';

const footer = () =>
    <Footer copyrights="&copy; 2017 WanderSpark" className="center">
        <h5 className="white-text" className="center">About Us</h5>
        <p className="grey-text text-lighten-4" className="center">Hi!  We are a team of full-stack web developers who just graduated from the Coding Bootcamp from UCSD Extension in October 2017.
We are a group of individuals with a passion for creativity because creativity makes us happy.  We hope you finally pursue your
wanderlust and enjoy using WanderSpark!

- Jasmine, Julie, Susan, Teddy, John & Matt</p>
    </Footer>;

export default footer;
