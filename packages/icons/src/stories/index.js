import React from 'react';
import { color, text } from '@storybook/addon-knobs';

import icons from '../icons';
import { Icon } from '../index';

import styled from 'styled-components';

export default {
  title: 'Icons',
  parameters: {
    component: Icon
  }
};

const CardSvgWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-color: #e6faff;
  color: #01a1ff;
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s linear, color 0.4s linear;
  &:hover {
    background-color: #01a1ff;
    color: #ffffff;
  }
`;

const Wrapper = styled.div`
  margin: 24px 0;
`;

const Title = styled.h2`
  margin-bottom: 0;
  font-size: 32px;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -32px;
  margin-left: -32px;
`;

const Column = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 0 0 auto;
    // 1 column will take size of 3 columns out of 12. So total columns inside 1 row will be 12/4 = 3.
    width: ${100 * (3 / 12)}%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 auto;
    // 1 column will take size of 2 columns out of 12. So total columns inside 1 row will be 12/2 = 6.
    width: ${100 * (2 / 12)}%;
  }
`;

const Box = styled.div`
  background-color: #f8f9fa;
  border-radius: 4px;
  text-align: center;
  padding: 24px 16px;
  margin-bottom: 8px;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  &:hover {
    background-color: #01a1ff;
    svg {
      color: #ffffff !important;
    }
  }
`;

const Text = styled.div`
  padding-top: 4px;
  color: #6c757d;
  font-size: 12px;
  text-align: center;
`;

export const outlinedIcons = () => {
  const iconColor = color('color', '#000000');
  const val = text('size', '32');
  const num = parseInt(val);
  return (
    <Container>
      <Wrapper>
        <Title>Outlined</Title>
      </Wrapper>
      <Row>
        {Object.keys(icons).map(iconName => (
          <Column key={iconName}>
            <Box>
              <Icon name={iconName} size={num} color={iconColor} />
            </Box>
            <Text>{iconName}</Text>
          </Column>
        ))}
      </Row>
    </Container>
  );
};

outlinedIcons.story = {
  name: 'outlined'
};

export const styledIcons = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Styled</Title>
      </Wrapper>
      <Row>
        {Object.keys(icons).map(iconName => (
          <Column key={iconName}>
            <CardSvgWrapper>
              <Icon name={iconName} size={25} />
            </CardSvgWrapper>
            <Text>{iconName}</Text>
          </Column>
        ))}
      </Row>
    </Container>
  );
};

styledIcons.story = {
  name: 'styled'
};
