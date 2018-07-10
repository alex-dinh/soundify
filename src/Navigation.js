import React, {Component} from "react";
import SvgIcon from 'react-icons-kit';
import {ic_business} from "react-icons-kit/md/ic_business";
import {ic_aspect_ratio} from "react-icons-kit/md/ic_aspect_ratio";
import {Grid, Row, Col} from "react-bootstrap";
import {Nav, NavItem} from "react-bootstrap";
import Playlists from './pages/UserPlaylists.js'



class SideNav extends React.Component {
    constructor(props) {
        super(props)
    }

    getSideBar() {
        return (<div style={{width:'20%'}}>
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <Nav bsStyle="tabs" stacked>
                        <NavItem style={{textAlign:'center'}} eventKey={2} href="#">Playlists</NavItem>
                        <NavItem eventKey={2} href="#">Playlists</NavItem>
                    </Nav>
                    <Playlists/>
                </ul>

        </div>
    </div>)
    }
    render() {
        return (
            <div style={{overflow:''}} id="wrapper">
                {this.getSideBar()}
            </div>
        );
    }
}

export default SideNav;