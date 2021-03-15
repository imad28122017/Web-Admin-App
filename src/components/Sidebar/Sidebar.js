import React from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';
import {changeActiveSidebarItem} from '../../actions/navigation';
import {Progress } from "reactstrap";

import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
            return (
            <nav
                className={cx(s.root)}
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <div className="text-center">
                <animate></animate>
                </div>
                                
                <div>
                    
                <header className={s.logo}>
                    <a href='/' >
                   <strong  > Smart  </strong><span className="webname_c"><strong> Police System</strong></span>                        
                    </a>
                </header>
                    
                <Progress multi>
                    <Progress bar animated color="primary"  value="34" type="grow"></Progress>
                    <Progress bar striped animated color="light" value="34"></Progress>
                    <Progress bar animated color="danger" value="34"></Progress>
                </Progress>
                </div>

                <ul className={s.nav}>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard"
                        isHeader
                        iconName="flaticon-home"
                        link="/app/main"
                        index="main"
                    />

                {/*Our Services*/}

                    <h5 className={[s.navTitleblue, s.groupTitle].join(' ')}>
                        Our Services
                    </h5>
                    
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Public Reports"
                        isHeader
                        iconName="flaticon-map-location"
                        link="/app/tables"
                        index="tables"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Challans & Payments"
                        isHeader
                        iconName="flaticon-layers"
                        link="/app/challanhistory"
                        index="ui"
                    />

                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Apply for Liscense"
                        isHeader
                        iconName="flaticon-list"
                        link="/app/forms"
                        index="forms"
                        childrenLinks={[
                            {
                                header: 'Driving License Learner', link: '/app/verification',
                            },
                            {
                                header: 'Endorsment of License', link: '/app/license',
                            },
                            {
                                header: 'Driving License Renewal', link: '/app/maps',
                            },
                        ]}
                    />
            {/*Crime Statistics*/}
                    <LinksGroup                   
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Crime Statistics"
                        isHeader
                        
                        iconName="flaticon-database-3"
                        link="/app/forms"
                        index="forms"
                        childrenLinks={[
                            {
                                header: 'Charts', link: '/app/charts',
                            },
                            {
                                header: 'Map Hotspots', link: '/app/maps',
                            },
                            
                         ]}
                    />

            {/* Quick Serices*/}
                </ul>
                <h5 className={s.navTitle}>
                    Quick Services
                    {/* eslint-disable-next-line */}
                    <a className={s.actionLink}>
                        <i className={`${s.glyphiconSm} glyphicon glyphicon-plus float-right`}/>
                    </a>
                </h5>
                {/* eslint-disable */}
                <ul className={s.sidebarLabels}>
                    <li>
                            <a >
                                <Link to='/app/opendatapak'>   
                                <i className="fa fa-folder text-success mr-2"/>
                                <span className={s.labelName} style={{color: "white"}}>Open Data</span>
                                </Link>
                                
                            </a>
                    </li>
                    <li>
                        <a>
                        <Link to='/app/crimetype'> 
                        <i className="fa fa-file text-primary mr-2"/>
                            <span className={s.labelName} style={{color: "white"}}>Reported Incident Details</span>
                        </Link>    
                        </a>
                    </li>
                    <li>
                        <a style={{color: "red"}}>
                            <Link to="/app/crimesdata">
                            <i className="fa fa-bars text-danger mr-2"/>
                            <span className={s.labelName} style={{color: "white"}} >Reported Incidents</span>
                            </Link>    
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarStatic: store.navigation.sidebarStatic,
        alertsList: store.alerts.alertsList,
        activeItem: store.navigation.activeItem,
    };
}
export default withRouter(connect(mapStateToProps)(Sidebar));
