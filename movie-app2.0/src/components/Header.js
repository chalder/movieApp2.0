import React from 'react';
import styled from 'styled-components';

import ReactLogo from '../img/@Chalder.png';
import TMDBLogo from '../img/tmdb_logo.svg';



const Header = () => (
    <div className="header-base">
        <div className="header-content">
            <img className="react-logo" src={TMDBLogo} />
            <img className="tmdb-logo" src={ReactLogo} />
        </div>
    </div>
)
export default Header;