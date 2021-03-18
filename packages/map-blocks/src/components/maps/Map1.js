import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { LeafletStyle } from './LeafletStyle';
import styled from 'styled-components';

const MapContainer = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;

const position = [-2.806755, -40.498815];
export const Map1 = () => (
  <MapContainer>
    <LeafletStyle />
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  </MapContainer>
);
