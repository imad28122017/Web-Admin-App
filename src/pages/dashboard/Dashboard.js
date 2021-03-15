import React from 'react';
import { Button, Jumbotron} from "reactstrap";
import { Link} from 'react-router-dom';
import Ticker from 'react-ticker'
import s from "./Dashboard.module.scss";

class Dashboard extends React.Component {

  render() {
    return (

      <div className={s.root}>
          <Ticker className="bg-warning clearfix" style={{ padding: '.3rem' }} offset="run-in" speed={7}           
          duration={3000}
          loop bounce repeatSpacer={50} marqueeDelay={1000}>
                    {({ index }) => (
                        <>
                            <h5 className="bg-success clearfix" style={{ padding: '.5rem' }}> Smart Police service is being launched in Islamabad to make citizens security better than ever </h5>
                        </>
                    )}
            </Ticker>          
      <div>

            <Jumbotron>
              <h1 className="display-3">Smart Police Services</h1>
              <p className="lead">
                <strong> Office Timing 09:00 AM to 05:00 PM </strong> </p>
              <hr className="my-2" />
              <p>Smart Police System is here To protect and to serve You </p>
              <p className="lead">
                
                <Link to='/app/tabs'>
                  <Button color="primary"> 
                  <strong>
                  All Services
                  </strong></Button>
                </Link> 
              </p>
            </Jumbotron>

          </div>    
      </div>
    );
  }
}
export default Dashboard;
