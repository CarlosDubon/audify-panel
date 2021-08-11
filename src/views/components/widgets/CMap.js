import React, {useEffect, useState,} from 'react';
import {Map, GoogleApiWrapper, Marker, Circle, InfoWindow} from 'google-maps-react';
import icon from '../../../assets/icons/signal.png';
import iconRed from '../../../assets/icons/signal-red.png';

const LAT_DEFAULT = 13.67957974806625;
const LONG_DEFAULT = -89.23629666639094

const CMap = ({radius=0, height=0, places=[], dashboard = false,...props}) => {
  const [position, setPosition] = useState()
  const [marker, setMarker] = useState()
  const [markerElem, setMarkerElem] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    if(props.place){
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
        }, ()=> {
          setPosition({
            lat: LAT_DEFAULT, 
            long: LONG_DEFAULT
          })
        })
      } else {
        setPosition({
          lat: LAT_DEFAULT, 
          long: LONG_DEFAULT
        })
      }
    }
  }, []);

  const handleClick = (t, element, coord) => {
    if(props.onSelect) {
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
      setInfoVisible(false);

      props.onSelect(lat, lng)
    }
  }

  const handleShowInfo = (p, marker) => {
    if(!dashboard) return;
    
    if(!infoVisible) {
      setMarkerElem(marker);
      setInfoVisible(true);
    } else {
      props.onInfoClick();
    }
  }

  if (!position) {
    return (
      <></>
    )
  }

  const placesFiltered = places.filter((place)=> {
    if(props.place) {
      return props.place._id !== place._id
    }else {
      return true;
    }
  })

  const placeMarkers = placesFiltered.map(place => (
    <Marker 
      key={`${place._id}_marker`}
      position={{
        lat: place.latitude,
        lng: place.longitude
      }}
      icon={{
        url: icon,
        anchor: new google.maps.Point(16,16),
        scaledSize: new google.maps.Size(32,32)
      }}
      onClick={handleClick}
      name={place.name}/>
  ));

  const placeCircles = placesFiltered.map(place => (
    <Circle 
        key={`${place._id}_circle`}
        strokeColor='transparent'
        onClick={handleClick}
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#3F51B588'
        fillOpacity={0.2}
        center={{
          lat: place.latitude,
          lng: place.longitude
        }}
        radius={place.radius} />
  ));

  return (
    <div style={{
      position: "relative",
      minHeight: height || 300,
    }}>
      <div style={{...Style.divider, ...Style.dividerHorizontal}}/>
      <div style={{...Style.divider, ...Style.dividerVertical}}/>
      <Map
        google={props.google}
        zoom={20}
        initialCenter={{lat: position.lat, lng: position.long}}
        onClick={handleClick}>
        
        {placeMarkers}
        {placeCircles}

        {marker && (
          <Marker
              onClick={handleShowInfo}
              name="Selected"
              position={marker.position}
              icon={{
                url: iconRed,
                anchor: new google.maps.Point(16,16),
                scaledSize: new google.maps.Size(32,32)
              }}
            />
        )}
        {marker && radius && (
          <Circle 
            onClick={handleClick}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={5}
            fillColor='crimson'
            fillOpacity={0.2}
            center={marker.position}
            radius={radius || 0} />
        )}
        { marker && dashboard && (
          <InfoWindow
            onClose={()=> setInfoVisible(false)}
            visible={infoVisible}
            marker={markerElem}>
            <div style={Style.info}>
              <span style={Style.text}> 
                Create Speaker 
              </span>
              <span style={Style.auxText}> 
                Click marker again! 
              </span>
            </div>
          </InfoWindow>
        ) }
      </Map>
    </div>
  );
};

const Style = {
  info: {
    userSelect: "none",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    alignText: "center" 
  },
  auxText: {
    fontSize: 12,
    alignText: "center",
    color: "#aaa"
  },
  divider: {
    pointerEvents: "none", 
    position: "absolute",
    backgroundColor: "#aaaaaa88",
    zIndex: 10
  },
  dividerVertical: {
    top: 0,
    left: "50%",
    bottom: "100%",
    height: "100%",
    width: 1,
  },
  dividerHorizontal: {
    left: 0,
    top: "50%",
    right: "100%",
    width: "100%",
    height: 1,
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDAKFbkF15bYuJsKQMjb6M6FBGSVMH9ims'
})(CMap);
