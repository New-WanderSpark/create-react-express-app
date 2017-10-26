import React from 'react';
import { Link } from 'react-router-dom';
import WanderSparkLogo from './wandersparkLogo.png';
import './logo.css';

const Logo = () =>
    <Link to="/">
        <div>
            <img className='WanderSparkLogo' src={WanderSparkLogo} alt='WanderSparkLogo' />
        </div>
    </Link>;

export default Logo;
