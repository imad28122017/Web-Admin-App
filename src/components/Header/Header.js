import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button

} from "reactstrap";

import { logoutUser } from "../../actions/user";
import {
  openSidebar,
  closeSidebar,
  changeSidebarPosition,
  changeSidebarVisibility,
} from "../../actions/navigation";


import s from "./Header.module.scss";
import "animate.css";
import NavbarText from "reactstrap/lib/NavbarText";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleMessagesDropdown = this.toggleMessagesDropdown.bind(this);
    this.toggleSupportDropdown = this.toggleSupportDropdown.bind(this);
    this.toggleSettingsDropdown = this.toggleSettingsDropdown.bind(this);
    this.toggleAccountDropdown = this.toggleAccountDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);

    this.state = {
      visible: true,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
    };
  }

  toggleNotifications = () => {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  };

  onDismiss() {
    this.setState({ visible: false });
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  toggleMessagesDropdown() {
    this.setState({
      messagesOpen: !this.state.messagesOpen,
    });
  }

  toggleSupportDropdown() {
    this.setState({
      supportOpen: !this.state.supportOpen,
    });
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
    });
  }

  toggleAccountDropdown() {
    this.setState({
      accountOpen: !this.state.accountOpen,
    });
  }

  toggleSearchOpen() {
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
  }

  toggleSidebar() {
    this.props.isSidebarOpened
      ? this.props.dispatch(closeSidebar())
      : this.props.dispatch(openSidebar());
  }

  moveSidebar(position) {
    this.props.dispatch(changeSidebarPosition(position));
  }

  toggleVisibilitySidebar(visibility) {
    this.props.dispatch(changeSidebarVisibility(visibility));
  }

  render() {
    return (
      
      <Navbar className={`d-print-none main-navbar ${s.root}`}>
        <NavbarText> 
              <div >
              <Fade left>
                <h2 >Emergency Contact <strong className="bg-danger " > 15 </strong> </h2>
              </Fade>
              </div>
        </NavbarText>
                
        <Nav className="ml-md-0 d-flex nav-responsive">

          
            
             <Button  striped color="warning">
               <strong>
                  Admin
               </strong>
             </Button>
                
             
              
          
          <NavItem className={`${s.divider} d-none d-sm-block`} />

          <NavItem>
            <NavLink
              onClick={this.doLogout}
              className={`${s.navItem} `}
              href="#"
            >
              <i className="glyphicon glyphicon-off" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-none">
            <NavLink
              onClick={this.toggleSidebar}
              className={`${s.navItem} text-white`}
              href="#"
            >
              <i className="fa fa-bars" />             

            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
