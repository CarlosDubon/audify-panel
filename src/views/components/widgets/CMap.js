import React, {useEffect, useState} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const CMap = (props) => {
  const [position, setPosition] = useState()
  const [marker, setMarker] = useState()
  useEffect(() => {
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
      <Map
        google={props.google}
        zoom={20}
        initialCenter={{lat: position.lat, lng: position.long}}
        onClick={handleClick}
      >
        {marker && (
          <Marker
            position={marker.position}
          />
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDAKFbkF15bYuJsKQMjb6M6FBGSVMH9ims'
})(CMap);
