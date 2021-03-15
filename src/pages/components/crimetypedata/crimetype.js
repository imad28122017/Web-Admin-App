import React from "react";
import {
  Row,  Col,Table, Button} from "reactstrap";
import Widget from "../../../components/Widget";
import s from "../../tables/static/Static.module.scss";
import firebase from '../../../dbconnection/config';
import { Link} from 'react-router-dom';

class Static extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Incident_Reported :[]}
  }
  componentDidMount() {
       
    firebase.database().ref("Incident_Reported").on("value", snapshot => {
      let Incident_Reported = [];
      snapshot.forEach(snap => {
          // snap.val() is the dictionary with all keys/values from the 'Incidents' path
          Incident_Reported.push(snap.val());
      });
      this.setState({ Incident_Reported: Incident_Reported });
    });
}
 //? 
  parseDate(date) {
    this.dateSet = date.toDateString().split(" ");

    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`;
  }

  render() {
    return (
      <div className={s.root}>
            <div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Link to='/app'  >
                        <h1 style={{marginLeft:250}}>
                            <i class="glyphicon glyphicon-home"></i>
                        </h1>
                        <Button color="warning" style={{marginLeft:180}}><strong>SMART POLICE HOME</strong></Button>{' '}
                        </Link>
                
                    </Col>
                </Row>
            </div>

        <h2 className="page-title">
          Public - <span className="fw-semi-bold">Reports</span>
        </h2>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  Reported Incident <span className="fw-semi-bold">Details</span>
                </h5>
              }
              settings
              close
              bodyClass={s.mainTableWidget}
            >
              <Table bordered responsive>
              <thead class="table table-dark">
                  <tr >
                  {/* <th>#</th> */}
                      <th>Accident Type</th>
                      <th>Crime Type</th>
                           <tr>
                            <th colspan="5">Location Longitude</th>
                            <th colspan="5">Location Latitude</th>
                          </tr>                        
                      <th>address</th>
                      <th>date</th>
                      <th>description</th>
                      <th colspan="2">image</th>
                      <th colspan="2">location</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.Incident_Reported.map(data => {      
                  return (      
                      <tr>     
                        {/* <th scope="row"></th> */}
                      <td>{data.incident_Detail.Accident_Type}</td>
                      <td>{data.incident_Detail.Crime_Type}</td>
                      <tr>
                      <td colspan="5">{data.incident_Detail.Location_coords.latitude}</td>
                      <td> {data.incident_Detail.Location_coords.longitude}</td>
                      </tr>                    
                      <td>{data.incident_Detail.address}</td>
                      <td>{data.incident_Detail.date}</td>
                      <td>{data.incident_Detail.description}</td>
                      <td>{data.incident_Detail.image}</td>
                      <td>{data.incident_Detail.location}</td>
                      </tr>  
                  );
                  })}
              </tbody>
              </Table>

              <div className="clearfix">
                <p>Incident Report Details</p>
              </div>
            </Widget>
          </Col>
        </Row>
        
        
        <div>

        <h2 className="page-title">
          Public - <span className="fw-semi-bold">Reports</span>
        </h2>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  Police Mobile  <span className="fw-semi-bold">Details</span>
                </h5>
              }
              settings
              close
              bodyClass={s.mainTableWidget}
            >
        <Table  responsive hover>
              <thead class="table table-dark">
                  <tr >
                  {/* <th>#</th> */}
                      <th>Accident Type</th>
                      <th>Crime Type</th>
                           <tr>
                            <th  rowspan="3">Location Longitude</th>
                            <th rowspan="3">Location Latitude</th>
                          </tr>
                      <th>Police Mobile address</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.Incident_Reported.map(data => {      
                  return (      
                      <tr>     
                        {/* <th scope="row"></th> */}
                      <td>{data.incident_Detail.Accident_Type}</td>
                      <td>{data.incident_Detail.Crime_Type}</td>
                      <tr>
                      <td rowspan="5">{data.police_Mobile.location.lat}</td>
                      <td rowspan="3"> {data.police_Mobile.location.lng}</td>
                      </tr>                    
                      <td>{data.police_Mobile.name}</td>
                      </tr>  
                  );
                  })}
              </tbody>
              </Table>
            

              <div className="clearfix">
                <p>Incidents Response Data</p>
              </div>
            </Widget>
          </Col>
        </Row>
       </div>
      </div>
      
    );
  }
}

export default Static;
