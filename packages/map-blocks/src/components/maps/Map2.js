import React from 'react';
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer
} from 'react-leaflet';
import { LeafletStyle } from './LeafletStyle';
import styled from 'styled-components';

const { BaseLayer, Overlay } = LayersControl;

const MapContainer = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;
const center = [51.505, -0.09];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06]
];
export const Map2 = () => (
  <MapContainer>
    <LeafletStyle />
    <Map center={center} zoom={13}>
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Overlay>
        <Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle center={center} fillColor="blue" radius={200} />
            <Circle
              center={center}
              fillColor="red"
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[51.51, -0.08]}
                color="green"
                fillColor="green"
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </Overlay>
        <Overlay name="Feature group">
          <FeatureGroup color="purple">
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[51.51, -0.06]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </Overlay>
      </LayersControl>
    </Map>
  </MapContainer>
);
