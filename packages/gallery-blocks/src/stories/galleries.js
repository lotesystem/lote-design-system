import React from 'react';
import { storiesOf } from '@storybook/react';

import { PhotoGallery1 } from '../components/galleries/PhotoGallery1';
import { PhotoGallery2 } from '../components/galleries/PhotoGallery2';
import { PhotoGallery3 } from '../components/galleries/PhotoGallery3';
import { PhotoGallery4 } from '../components/galleries/PhotoGallery4';

storiesOf('galleries', module).add('PhotoGallery1', () => (
  <PhotoGallery1 />
));

storiesOf('galleries', module).add('PhotoGallery2', () => (
  <PhotoGallery2 />
));

storiesOf('galleries', module).add('PhotoGallery3', () => (
  <PhotoGallery3 />
));

storiesOf('galleries', module).add('PhotoGallery4', () => (
  <PhotoGallery4 />
));
