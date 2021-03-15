import React from 'react';
import firebase from '../../../dbconnection/config';
import { Button } from 'reactstrap';
import { Link} from 'react-router-dom';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table } from 'reactstrap';
class App extends React.Component {
  constructor(props) {
      
      super(props);
     
      this.state = {Incidents : []}
      }
      
    componentDidMount() {
       
        firebase.database().ref("Incidents").on("value", snapshot => {
          let Incidents = [];
          snapshot.forEach(snap => {
              // snap.val() is the dictionary with all keys/values from the 'Incidents' path
              Incidents.push(snap.val());
          });
          this.setState({ Incidents: Incidents });
        });
   }
    render(){
    return (
      <div className="MainDiv">
        <div class="text-center bg-sky">
        
            <Link to='/app'>
              <h1>
                <i class="glyphicon glyphicon-home"></i>
              </h1>
              <Button color="warning" ><strong>SMART POLICE HOME</strong></Button>{' '}
            </Link>
            

            <h1>Reported Incidents By Citizens</h1>
            <h1>  </h1>
        </div>
      
        <div >
            <Table responsive>
              <thead class="table table-dark">
                  <tr >
                  {/* <th>#</th> */}
                      <th >Accident Type</th>
                      <th>Crime Type</th>
                          <tr>
                            <th colspan="2">Location Longitude</th>
                            <th colspan="2">Location Latitude</th>
                          </tr>      
                      <th>address</th>
                      <th>date</th>
                      <th>description</th>
                      <th colspan="2">image</th>
                      <th colspan="2">location</th>
                  </tr>
              </thead>
    
              <tbody>
              {this.state.Incidents.map(data => {      
                  return (
                    
                      <tr>     
                        {/* <th scope="row"></th> */}
                      <td >{data.Accident_Type}</td>
                      <td>{data.Crime_Type}</td>
                      <tr>
                      <td>{data.Location_coords.latitude}</td>
                      <td> {data.Location_coords.longitude}</td>
                      </tr>                    
                      <td>{data.address}</td>
                      <td>{data.date}</td>
                      <td>{data.description}</td>
                      <td >{data.image}</td>
                      <td>{data.location}</td>
                      </tr>  
                  );
                  })}
              </tbody>
           </Table>
       </div>
      </div>
    );
  }
  }
  export default App;


  