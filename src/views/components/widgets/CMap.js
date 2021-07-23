import React, {useEffect, useState} from 'react';
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react';

import { RiSignalTowerLine } from 'react-icons/ri'

const CMap = ({radius=0,...props}) => {
  const [position, setPosition] = useState()
  const [marker, setMarker] = useState()
  useEffect(() => {
    if(props.place){
      console.log(props.place);
      setPosition({
        lat: props.place.latitude,
        long: props.place.longitude
      });
      setMarker({
        title: "",
        name: "",
        position: {
          lat: props.place.latitude,
          lng: props.place.longitude 
        }
      })
    }else{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            lat: position.coords.latitude,
            long: position.coords.longitude
          })
        })
      } else {
        setPosition({})
      }
    }
  }, [])

  const handleClick = (t, map, coord) => {
    const {latLng} = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    setMarker({
      title: "",
      name: "",
      position: {
        lat, lng
      }
    })
    props.onSelect(lat, lng)
  }

  if (!position) {
    return (
      <></>
    )
  }

  return (
    <div style={{
      position: "relative",
      height: 300
    }}>
    <div style={{
      pointerEvents: "none", 
      position: "absolute",
      left: 0,
      top: "50%",
      right: "100%",
      width: "100%",
      height: 1,
      backgroundColor: "#aaaaaa88",
      zIndex: 10
    }}/>
    <div style={{
      pointerEvents: "none", 
      position: "absolute",
      top: 0,
      left: "50%",
      bottom: "100%",
      height: "100%",
      width: 1,
      backgroundColor: "#aaaaaa88",
      zIndex: 10
    }}/>
      <Map
        google={props.google}
        zoom={20}
        initialCenter={{lat: position.lat, lng: position.long}}
        onClick={handleClick}>
        
        {marker && (
          <Marker
              name="Selected"
              position={marker.position}
            />
        )}
        {marker && (
          <Circle 
              strokeColor='transparent'
              strokeOpacity={0}
              strokeWeight={5}
              fillColor='crimson'
              fillOpacity={0.2}
              center={marker.position}
              radius={radius || 0} />
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDAKFbkF15bYuJsKQMjb6M6FBGSVMH9ims'
})(CMap);
