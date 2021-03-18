import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { LeafletStyle } from './LeafletStyle';
import L from 'leaflet';

// THIS COMPONENT IS MUCH LIGHER WEIGHT
// DOESN NOT DEPEND ON react-leaflet

const MapContainer = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;
const center = [51.505, -0.09];
// https://cherniavskii.com/using-leaflet-in-react-apps/
// THEMES: https://leaflet-extras.github.io/leaflet-providers/preview/
export const Map3 = props => {
  const ref = useRef();
  useEffect(() => {
    const map = L.map(ref.current, {
      center,
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    L.marker(center).addTo(map);
    return () => {};
  }, []);
  return (
    <MapContainer>
      <LeafletStyle />
      <div ref={ref} />
    </MapContainer>
  );
};
