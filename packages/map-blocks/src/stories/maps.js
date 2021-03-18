import React from 'react';
import { storiesOf } from '@storybook/react';

import { Map1 } from '../components/maps/Map1';
import { Map2 } from '../components/maps/Map2';
import { Map3 } from '../components/maps/Map3';
import { Map4 } from '../components/maps/Map4';

storiesOf('maps', module).add('map1', () => <Map1 />);
storiesOf('maps', module).add('map2', () => <Map2 />);
storiesOf('maps', module).add('map3', () => <Map3 />);
storiesOf('maps', module).add('map4', () => <Map4 />);
