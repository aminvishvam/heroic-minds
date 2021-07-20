import React, { Component } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import DropdownArrow from "../DropdownArrow/DropdownArrow";

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
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px', marginTop: '5px', flexDirection: 'row', lineHeight: '30px' }} onClick={this.handleClick} >
                <label className="Nav-text s18">Library</label>
                <DropdownArrow />
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
                    <div style={{ height: '1px', backgroundColor: '#A8A8A8' }}></div>
                    <MenuItem onClick={this.handleClose}>Recommend a Story/Topic</MenuItem>
                    <MenuItem style={{ color: '#F57C00' }} onClick={this.handleClose}>Gift an Episode</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default TopNavLibrary
