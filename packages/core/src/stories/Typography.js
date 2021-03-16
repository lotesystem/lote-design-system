import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Text } from '../components';

export default {
  title: 'Typography',
  parameters: {
    component: Text
  }
};

export const simple = () => {
  return (
    <div style={{ maxWidth: '760px', margin: '26px auto', padding: '0 30px' }}>
      <h1>40px (8) Discover new products every day.</h1>
      <h2>32px (7) Discover new products every day.</h2>
      <h3>28px (6) Discover new products every day.</h3>
      <h4>24px (5) Discover new products every day.</h4>
      <h5>20px (4) Discover new products every day.</h5>
      <h6>16px (2) Discover new products every day.</h6>

      <h5>Paragraph</h5>
      <Text tag="p" fontSize={4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Text>
      <h5>Inline Elements</h5>
      <p>
        Using mark element <mark>highlight</mark> text.
      </p>
      <p>
        <del>Deleted text.</del>
      </p>
      <p>
        <s>No longer accurate.</s>
      </p>
      <p>
        <ins>An addition to the document.</ins>
      </p>
      <p>
        <u>Render as underlined</u>
      </p>
      <p>
        <small>Treated as fine print.</small>
      </p>
      <p>
        <strong>Rendered as bold text.</strong>
      </p>
      <p>
        <em>Rendered as italicized text.</em>
      </p>
    </div>
  );
};

export const responsiveFont = () => {
  const val = text('fSize', '80');
  const num = parseInt(val);

  return (
    <div style={{ maxWidth: '560px', margin: '26px auto', padding: '0 30px' }}>
      <p>
        Allowing text to scale more naturally across device and viewport sizes.
        Remember font-size is explicitly converted into `rem` unit with base 16
        pixel size. To check real <b>Demo</b> Open the canvas in a new tab
        behind the scenes a media query is generated.
      </p>
      <Text fSize={parseInt(num)}>Hello World</Text>
    </div>
  );
};
