import React, { useState, Component, useEffect } from 'react';
import MapBanniere from './MapBanniere';
import './MapScreen.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const MapScreen = ({onCounterChange}) => {

  const [position, setPosition] = useState([48.864716, 2.349014]);
  const [counter, setCounter] = useState(0);
  const [markers, setMarkers] = useState([]);

  const addMarker = (e) =>{
    const marker = e.latlng;
    setMarkers(prev => {
      prev.push(marker);
      return prev;
    });
    setCounter(prev => prev+1);
  }

  const deleteMarker = (e) =>{
    const marker = e.latlng;
    setMarkers(prev => {
      prev.splice(marker, 1);
      return prev;
    })
    setCounter(prev => prev-1);
  }

  useEffect(()=> onCounterChange(counter), [counter, onCounterChange])

  return(
    <div>
      <div className="leaflet-container" id="map">
        <Map center={position} zoom={4} onClick={ addMarker }>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position}>
              <Popup>
                <div>Popup</div>
                <button onClick={ deleteMarker }>Supprimer</button>
              </Popup>
            </Marker>
          )}
        </Map>
      </div>
    </div>
  )
}

export default MapScreen;
