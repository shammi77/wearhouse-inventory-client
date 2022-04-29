import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-">
            <p><small className="w-40 text-center">copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;