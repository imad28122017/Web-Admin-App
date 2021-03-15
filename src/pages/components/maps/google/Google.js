import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Circle
} from 'react-google-maps';

import firebase from '../../../../dbconnection/config';
import Widget from '../../../../components/Widget';
import s from './Google.module.scss';

class Maps extends React.Component {
  state = {
    coords : null
  }
  componentDidMount() {
       
    firebase.database().ref("Incident_Reported").on("value", snapshot => {
      let Incident_Reported = [];
      snapshot.forEach(snap => {

          
          Incident_Reported.push(snap.val());
      });
      // this.setState({ Incident_Reported: Incident_Reported });
      // console.log('flag', Incident_Reported);
      let tempCoords =[];
      for(let x in Incident_Reported){
        // console.log("2nd flag,",Incident_Reported[x].incident_Detail.Location_coords)
        tempCoords.push(Incident_Reported[x].incident_Detail.Location_coords)
      }

      this.setState({coords: tempCoords})

    });
}

  render() {
    const BasicMap = withScriptjs(withGoogleMap(() =>
    <GoogleMap
  
      defaultZoom={12}
      defaultCenter={{ lat: parseFloat(33.738045), lng: parseFloat(73.084488) }}
    >
      {/* <Marker position={{ lat: 33.738045, lng: 73.084488 }} />
      <Marker position={{ lat: 33.63, lng: 73.084488 }} />
      <Marker position={{ lat: 33.59724470866989, lng: 73.05297883227468 }}/>  */}
      {
        (this.state.coords) ? (
          this.state.coords.map(item=>
            (
              <Circle
          defaultCenter={{
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          }}
          radius={700}
          options={{
            // fill: "rgba(153,0,0,0.4)",
            strokeColor: "rgba(153,0,0,0.4)",
            fillColor: '#ff0000'
          }}
        />
          )) 
        ) : null
      }    
    </GoogleMap>,
      
  ));

    return (
      <div>
        <h1 className="page-title">
          Google <span className="fw-semi-bold">Maps</span>
        </h1>
        <Widget
          title={<h4>Google Maps <small className="text-muted">Default and customized</small></h4>}
          collapse close
        >
          <div className={s.MapContainer}>
            <BasicMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
            //
              loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
              containerElement={<div style={{ height: 'inherit' }} />}
              mapElement={<div style={{ height: 'inherit' }} />}
            />
  
          </div>
        </Widget>
      </div>);   
  }
}
export default Maps;
