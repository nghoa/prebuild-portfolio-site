import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';

export const Intro = () => {
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>Hi There!</h1>
          <h4>I’m Hoa and I’m Software Developer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};