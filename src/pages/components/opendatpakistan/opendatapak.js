import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';

import {
    Row,  Col} from "reactstrap";
  import Widget from "../../../components/Widget";
  import s from "../../tables/static/Static.module.scss";


const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      
    <div style={mystyle}>
      <Navbar style={mystyle}>
      <header className={s.logo}>
                    <a href='/' >
                      <h1 style={mystyle}>
                      <strong  > Smart  </strong><span className="webname_c"><strong> Police System</strong></span>                        
                      </h1>
                   
                    </a>
                </header>
        {/* <NavbarBrand href="/" className="page-title" style={mystyle} >Smart Police Home</NavbarBrand> */}
        <NavbarToggler  onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar >
          </Nav>
        </Collapse>
      </Navbar>
    <div>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  Crimes reported by  <span className="fw-semi-bold">type</span>
                </h5>
              }
              settings
              close
              bodyClass={s.mainTableWidget}
            >
                <iframe title="Opendata" width="1350" height="400" 
                src="https://opendata.com.pk/dataset/crimes-reported-by-type/resource/248a92b9-5817-43f2-b0e7-6d45a45a8ee9/view/9aff21d6-bb41-4adb-ada3-565e0b91216a" 
                frameBorder="0">

                </iframe>
            </Widget>
            
          </Col>
        </Row>
    </div>
    
    
    <div>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  Mukhbir Reported   <span className="fw-semi-bold">Crimes</span>
                </h5>
              }
              settings
              close
              bodyClass={s.mainTableWidget}
            >
                <iframe title='opendata' width="1350" height="400" 
                src="https://opendata.com.pk/dataset/mukhbir-reported-crimes/resource/061a0c51-e609-4a0d-b56f-b01949a615bb/view/370ba864-fb6e-47a9-8c36-fb760158999a" 
                frameBorder="0">
                </iframe>
            </Widget>
          </Col>
        </Row>
    </div>
    </div>

  );
}

export default Example;

const mystyle = {
    color: "white",
    backgroundColor: "transparent",
    padding: "5px",
    fontFamily: "Arial",
    
  };