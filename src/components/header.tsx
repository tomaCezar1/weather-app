import * as React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const Header = ({ siteTitle }) => (
    <header>
        <NavBar />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
