import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Vehicle Services
          </NavLink>

        </NavItem>
        
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            General Services
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Vehicle Related</h4>

              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Vehicle license Learner</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button className="bg-primary clearfix">Apply</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Vehicle license Renewal</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button className="bg-primary clearfix">Apply</Button>
                  </Card>
                </Col>

                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Vehicle Verification</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button className="bg-primary clearfix">Apply</Button>
                  </Card>
                </Col>
                
              </Row>

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            
            <Col sm="6">
              <Card body>
                <CardTitle>Missing and Lost Report</CardTitle>
                <CardText>After application submition verification process will start.
                       
                        <p>Character Certificate will be Issued or Denied acordingly</p></CardText>
                <Button className="bg-primary clearfix">Apply</Button>
              </Card>
            </Col>

            <Col sm="6">
              <Card body>
                <CardTitle>Tanent Registration</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="bg-warning clearfix">Apply</Button>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Character Certificate</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="bg-success clearfix">Apply</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>General Police Verification</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="bg-danger clearfix">Apply</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;