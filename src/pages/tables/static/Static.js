import React from "react";
import firebase from '../../../dbconnection/config';
import firebaseConfig from '../../../dbconnection/config';

import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
} from "reactstrap";


import Widget from "../../../components/Widget";
import s from "./Static.module.scss";

const tableData = [
  {
    id: 1,
    name: "Ali", // eslint-disable-line global-require
    report_details: "Accident",
    info: {
      sector: "G-9",
      coordinates: "33.6882° N, 73.0351° E",
    },
    date: new Date("September 14, 2020"),
    time: "01:35 PM",
    progress: {
      percent: 29,
      colorClass: "success",
    },
  },
  {
    id: 2,
    name: "Ahmad", // eslint-disable-line global-require
    report_details: "Theft",
    info: {
      sector
      : "G-10",
      coordinates: "33.6769° N, 73.0149° E",
    },
    date: new Date("November 14, 2020"),
    time: "11:37 PM",
    progress: {
      percent: 50,
      colorClass: "warning",
    },
  },
  {
    id: 3,
    name: "Ahsan", // eslint-disable-line global-require
    report_details: "Robbery",
    label: {
      colorClass: "primary",
    },
    info: {
      sector: "F-10",
      coordinates: "33.6907° N, 73.0057° E",
    },
    date: new Date("September 14, 2020"),
    time: "12:30 AM",
    progress: {
      percent: 75,
      colorClass: "info",
    },
  },
  

]

class Static extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      tableStyles: tableData,
      incidentData: null,
      // Incidents:null,
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  componentDidMount(){
    this.connection();
    this.fetchIncident()
  }

  connection(){
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      console.log("Connection Established..")
    }
  }

  fetchIncident (){
    var database= new firebase.database();

    var iref = database.ref('Incidents') ;
    console.log(iref)
    iref.on('value', (snapshot) => {
      
       console.log('flag',snapshot)
    });
   
    
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(" ");

    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = new Array(this.state[checkbox].length).fill(
      ev.target.checked
    );
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">
          Public - <span className="fw-semi-bold">Reports</span>
        </h2>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  Tracking <span className="fw-semi-bold">Reports</span>
                </h5>
              }
              settings
              close
              bodyClass={s.mainTableWidget}
            >
              <Table striped>
                <thead>
                  <tr className="fs-sm">
                    <th className="hidden-sm-down">#</th>
                    <th>Citizen</th>
                    <th>Report Details</th>
                    <th className="hidden-sm-down">Location Info</th>
                    <th className="hidden-sm-down">Date</th>
                    <th className="hidden-sm-down">Time</th>
                    <th className="hidden-sm-down">Progress Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableStyles.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>
                        {row.name}
                        {/* <img
                          className="img-rounded"
                          src={row.picture}
                          alt=""
                          height="50"
                        /> */}
                      </td>
                      <td>
                        {row.report_details}
                        {row.label && (
                          <div>
                            <Badge color={row.label.colorClass}>
                              {row.label.text}
                            </Badge>
                          </div>
                        )}
                      </td>
                      <td>
                        <p className="mb-0">
                          <small>
                            Area:
                            <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.sector}
                            </span>
                          </small>
                        </p>
                        <p>
                          <small>
                            Coordinates:
                            <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.coordinates}
                            </span>
                          </small>
                        </p>
                      </td>
                      <td className="text-muted">{this.parseDate(row.date)}</td>
                      <td className="text-muted">{row.time}</td>
                      <td className="width-150">
                        <Progress
                          color={row.progress.colorClass}
                          value={row.progress.percent}
                          className="progress-sm mb-xs"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="clearfix">
                <div className="float-right">
                  <Button color="default" className="mr-2" size="sm">
                    Send to...
                  </Button>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      color="inverse"
                      className="mr-xs"
                      size="sm"
                      caret
                    >
                      Clear
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Clear</DropdownItem>
                      <DropdownItem>Move ...</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <p>Public Reports Table</p>
              </div>
            </Widget>
          </Col>
        </Row>
        <div>
        </div>
      </div>      
    );
  }
}

export default Static;
