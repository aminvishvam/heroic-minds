import React, { Component } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import ProfilePic from '../../assets/ProfilePic.svg';
import Nav from "react-bootstrap/Nav";
import history from "../../history";

import {logout} from '../../actions/Auth'
import { connect } from "react-redux";


class TopNavProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileNode: null,
            shouldOpenMenuProfileMenu: false,
        }
    }

    handleProfileClick = (e) => {
        this.setState({
            shouldOpenMenuProfileMenu: !this.state.shouldOpenMenuProfileMenu,
            profileNode: e.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            profileNode: null,
            shouldOpenMenuProfileMenu: false,
        })
        
    }
    handleLogOut = () => {
        this.setState({
            profileNode: null,
            shouldOpenMenuProfileMenu: false,
        })
        this.props.logout()
    }
    render() {
        return (
            <Nav.Link style={{ border: 'none !important', marginRight: '10px' }} className="border-left pl-2 ml-auto">
                <div onClick={this.handleProfileClick}>

                    <img height="35px" width="35px" src={ProfilePic} />
                    <Menu
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorEl={this.state.profileNode}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        keepMounted
                        open={this.state.shouldOpenMenuProfileMenu}
                        onClose={this.handleClose}
                    >
                        <label style={{ fontSize: '20px', marginLeft: '15px', lineHeight: '24px' }} >User Name</label>
                        <MenuItem onClick={this.handleClose}>Connect with Friends</MenuItem>
                        <div style={{ height: '1px', backgroundColor: '#A8A8A8' }}></div>
                        <MenuItem onClick={() => {
                            history.push('/edit-profile');
                            this.handleClose();
                        }}>Profile Settings</MenuItem>
                        <MenuItem onClick={this.handleClose}>Billing & Payments</MenuItem>
                        <div style={{ height: '1px', backgroundColor: '#A8A8A8' }}></div>
                        <MenuItem onClick={this.handleClose}>Get Help & Give Feedback</MenuItem>
                        <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>

                    </Menu>
                </div>
            </Nav.Link>
        );
    }
}

export default connect(null, {logout}) (TopNavProfile)
