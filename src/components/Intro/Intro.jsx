import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import { Link } from 'react-scroll';

const Intro = () => {
    const { hero } = useContext(PortfolioContext);
    const { title, name, subtitle } = hero;

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);


    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Fade left={isDesktop} bottom={isMobile} delay={300} distance="50px">
                    <h1 className="hero-title">
                        {title || 'Hi, my name is'}{' '}
                        <span className="text-color-main">{name || 'Name'}</span>
                        <br />
                        {subtitle || "I'm a Tech Enthusiast."}
                    </h1>
                </Fade>
                <Fade left={isDesktop} bottom={isMobile} delay={300} distance="50px">
                    <p className="hero-cta">
                        Placeholder for Icons
                    </p>
                </Fade>
            </Container>
        </section>
    );
};

export default Intro;