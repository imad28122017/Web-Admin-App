import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import TablesStatic from '../../pages/tables/static';
import MapsGoogle from '../../pages/components/maps/google';
import Charts from '../../pages/components/charts/Charts';
import Dashboard from '../../pages/dashboard';
import opendatapak from '../../pages/components/opendatpakistan/opendatapak';
import crimesdata from '../../pages/components/crimesdata/crimesdata';
import crimetype from '../../pages/components/crimetypedata/crimetype';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import verification from '../../pages/components/verify/verification';
import tabs from '../../pages/components/contents/tabs';
import challanhistory from '../../pages/components/payments/challanhistory';
class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }
  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          'sidebar-' + this.props.sidebarPosition,
          'sidebar-' + this.props.sidebarVisibility,
        ].join(' ')}
      >
        <div className={s.wrap}>
          <Header />
          
              <Sidebar />
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
    
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/charts" exact component={Charts} />
                    <Route path="/app/tables" exact component={TablesStatic} />
                    <Route path="/app/maps" exact component={MapsGoogle} />
                    <Route path="/app/verification" exact component={verification} />
                    <Route path= "/app/tabs" exact component ={tabs} />
                    <Route path="/app/crimetype" exact component={crimetype}/>
                    <Route path='/app/crimesdata' exact component={crimesdata}/>
                    <Route path='/app/opendatapak' exact component={opendatapak}/>
                    <Route path="/app/challanhistory" exact component={challanhistory} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>

              <footer className={s.contentFooter}>
                Smart Police System - Admin Dashboard 
              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
