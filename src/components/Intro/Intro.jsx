import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


const Header = () => {
    return (
        <section id="hero" className="jumbotron">
            <Container>
                <h1>Hello World</h1>
            </Container>
        </section>
    );
};

export default Header;