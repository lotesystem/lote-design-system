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
export const Map4 = props => {
  const ref = useRef();
  useEffect(() => {
    const map = L.map(ref.current, {
      center,
      zoom: 16,
      layers: [
        L.tileLayer(
          'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
          {
            attribution:
              'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
          }
        )
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
