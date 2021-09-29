import React, { Component } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import DropdownArrow from "../DropdownArrow/DropdownArrow";
import { NavLink } from "react-router-dom";

class TopNavLibrary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            shouldOpenMenu: false,
        }
    }

    handleClick = (e) => {
        this.setState({
            shouldOpenMenu: !this.state.shouldOpenMenu,
            anchorEl: e.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null,
            shouldOpenMenu: false,
        })
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', marginTop: '5px', flexDirection: 'row', lineHeight: '30px' }}  >
                    <NavLink to='/library' >
                        <label className="Nav-text s18">Library</label>
                    </NavLink>
                    <span onClick={this.handleClick}><DropdownArrow /></span>

                    <Menu
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={this.state.shouldOpenMenu}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Keep Listening</MenuItem>
                        <MenuItem onClick={this.handleClose}>Favourites</MenuItem>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default TopNavLibrary
